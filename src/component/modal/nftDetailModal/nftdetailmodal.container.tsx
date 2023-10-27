// checkEtherReady 와 같은 기능도 모두 여기서 처리하기
import {
  getNftDetail,
  getUserInfo,
  requestEtherReady,
  sendEtherResult,
} from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { NftItem, NftOrderItem } from "@/model/api";
import {
  DeviceType,
  ErrorMessageItem,
  ErrorMessageType,
  ProcessModalType,
} from "@/model/props";
import { textBundle } from "@/util/format.util";
import { checkIsWalletConnected, getUserSession } from "@/util/session.util";
import { callMintNft, injected } from "@/util/wallet.util";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { useContext, useEffect, useState } from "react";
import NftDetailModalPresenter from "./nftdetailmodal.presenter";

interface Props {
  rsp?: DeviceType;
  isShow: boolean;
  selectedData?: NftItem;
  setIsShowNft: (isShow: boolean) => void;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  onChangeProcessModal: (type: ProcessModalType) => void;
}

export default function NftDetailModalContainer({
  rsp = "",
  isShow,
  selectedData,
  setIsShowNft,
  onChangeErrorMessage,
  onChangeProcessModal,
}: Props) {
  const {
    state: { lang },
  } = useContext(LangContext);
  const { activate } = useWeb3React();

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isShowDownload, setIsShowDownload] = useState<boolean>(false);
  const [data, setData] = useState<NftItem | undefined>(selectedData);

  const isConnected = !!getUserSession();
  const text = textBundle();

  const getData = async (artworkId: number, checkUser: boolean) => {
    const newData: NftItem = await getNftDetail(artworkId);

    if (checkUser) {
      const res = await getUserInfo();
      if (res.success && res?.data?.nftOrder && res.data.nftOrder.length > 0) {
        const {
          data: { nftOrder },
        } = res;
        const nfts = nftOrder.map((v: NftOrderItem) => {
          if (v.nftId && v.paymentStatusId === 2) {
            return v.nftId;
          }
        });
        nfts.length > 0 && setIsShowDownload(nfts.includes(artworkId));
      }
    }
    if (newData) {
      const { soldEdition, totalEdition } = newData;
      setIsAvailable(soldEdition < totalEdition);
      setData(newData);
    } else {
      setIsAvailable(false);
    }
  };

  /**
   * 메타마스크 지갑 연결
   */
  const connectWallet = () => {
    activate(injected, (error: any) => {
      if (error instanceof NoEthereumProviderError) {
        // 지갑 확장프로그램 다운로드 링크 이동
        setTimeout(() => {
          const openUrl =
            process.env[
              rsp === "m"
                ? `NEXT_PUBLIC_METAMASK_DEEPLINK`
                : `NEXT_PUBLIC_METAMASK_DOWNLOAD`
            ];
          console.log(openUrl);
          if (typeof window !== "undefined") {
            window.location.href = `${openUrl}`;
          }
        }, 1000);
      } else if (error instanceof UnsupportedChainIdError) {
        onChangeErrorMessage("unsupportedError");
      } else if (error instanceof UserRejectedRequestError) {
        // 사용자 사이트 연결 거부
        return false;
      } else {
        onChangeErrorMessage("connectionError");
      }
    });
  };

  const checkEtherReady = async (data: NftItem) => {
    const { nft, price, id } = data;
    const checkResult = await requestEtherReady(id);

    setIsShowNft(false);
    if (!checkResult.success) {
      onChangeErrorMessage("txCommonError");
      return;
    }

    const { orderId } = checkResult.data;
    // !data && setData(data);
    onChangeProcessModal("process");
    const mintResult = await callMintNft(nft.tokenUri, String(price));
    if (mintResult.success) {
      await sendEtherResult(orderId, "Y", {
        txHash: mintResult?.transactionHash,
        tokenId: Number(mintResult.tokenId),
      });
      onChangeProcessModal("done");
    } else {
    }
  };

  useEffect(() => {
    selectedData?.id && getData(selectedData.id, isConnected);
  }, [selectedData?.id, isConnected]);

  const props = {
    rsp,
    lang,
    data,
    isShow,
    isAvailable,
    isShowDownload,
    text,
    onButtonClick: () => {
      if (!isAvailable && isShowDownload && data) {
        window.open(
          `${
            process.env.NEXT_PUBLIC_IMAGE_URL +
            data.originFilePath +
            data.originFilename
          }`
        );
      } else {
        data && checkEtherReady(data);
        /*
        checkIsWalletConnected()
          ? data && checkEtherReady(data)
          : connectWallet
        */
      }
    },
    onCloseClick: () => {
      setIsShowNft(false);
    },
  };
  return <NftDetailModalPresenter {...props} />;
}
