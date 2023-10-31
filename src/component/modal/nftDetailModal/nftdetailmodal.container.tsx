import {
  getNftDetail,
  getUserInfo,
  requestEtherReady,
  sendEtherResult,
} from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { NftItem, NftOrderItem } from "@/model/api";
import { DeviceType, ErrorMessageType, ProcessModalType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import { checkIsWalletConnected, getUserSession } from "@/util/session.util";
import { callMintNft } from "@/util/wallet/transaction.util";
import { useContext, useEffect, useState } from "react";
import NftDetailModalPresenter from "./nftdetailmodal.presenter";

interface Props {
  rsp?: DeviceType;
  selectedData?: NftItem;
  isShow: boolean;
  onCloseClick: () => void;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  onChangeProcessModal: (type?: ProcessModalType) => void;
  onConnectWallet: () => void;
}

export default function NftDetailModalContainer({
  rsp = "",
  isShow,
  selectedData,
  onCloseClick,
  onChangeErrorMessage,
  onChangeProcessModal,
  onConnectWallet,
}: Props) {
  const {
    state: { lang },
  } = useContext(LangContext);

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isShowDownload, setIsShowDownload] = useState<boolean>(false);
  const [data, setData] = useState<NftItem | undefined>(selectedData);

  const isConnected = !!getUserSession();
  const text = textBundle();

  /**
   * NFT 상세정보 조회
   * @param artworkId 작품 고유번호
   * @param checkUser 연결된 지갑 계정 유무 여부
   */
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
   * 이더리움 결제 준비
   * @param data 구매할 NFT 객체
   */
  const checkEtherReady = async (data: NftItem) => {
    const { nft, price, id } = data;
    const checkResult = await requestEtherReady(id);

    onCloseClick();

    if (!checkResult.success) {
      onChangeErrorMessage("txCommonError");
      return;
    }

    onChangeProcessModal("process");

    const { orderId } = checkResult.data;
    const mintResult: Record<string, any> = await callMintNft(
      nft.tokenUri,
      String(price)
    );

    if (mintResult.success) {
      await sendEtherResult(orderId, "Y", {
        txHash: mintResult?.transactionHash,
        tokenId: Number(mintResult.tokenId),
      });
      onChangeProcessModal("done");
    } else {
      await sendEtherResult(orderId, "N");
      onChangeProcessModal();
      onChangeErrorMessage(
        mintResult?.code && mintResult?.code?.includes("INSUFFICIENT")
          ? "balanceError"
          : "txCommonError"
      );
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
        checkIsWalletConnected()
          ? data && checkEtherReady(data)
          : onConnectWallet();
      }
    },
    onCloseClick,
  };
  return <NftDetailModalPresenter {...props} />;
}
