import {
  checkSigned,
  checkUserInfo,
  login,
  etherReady,
  etherResult,
} from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import {
  DeviceType,
  DropdownItem,
  DropdownDatasets,
  SelectTermsType,
  ProcessModalType,
  ErrorMessageItem,
} from "@/model/props";
import {
  checkIsWalletConnected,
  removeUserSession,
  setUserSession,
} from "@/util/session.util";
import { callMintNft, injected } from "@/util/walletConnector.util";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import text from "@/text.json";
import PagePresenter from "./page.presenter";
import { NftItem } from "@/model/api";
import { textBundle } from "@/util/format.util";

export default function PageContainer() {
  const isWalletConnected = checkIsWalletConnected();
  const textObj = Object(text);

  const { chainId, account, active, activate, deactivate } = useWeb3React();
  const router = useRouter();

  const {
    state: { lang },
  } = useContext(LangContext);

  // 반응형 레이아웃
  const [isTabletBelow, setIsTabletBelow] = useState<boolean>(false);
  const [rsp, setRsp] = useState<DeviceType>("");
  const isTabletOrBelow: boolean = useMediaQuery({
    query: "(max-width: 1279px)",
  });

  const [dropdownList, setDropdownList] =
    useState<DropdownItem[]>(DropdownDatasets);
  // 모바일 선택 컨텐츠
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  // PC 사용자 정보 펼침 상태
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  // 문구 에러 모달
  const [isShowMsgError, setIsShowMsgError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageItem>({});

  // 회원 가입 모달
  const [isShowJoin, setIsShowJoin] = useState<boolean>(false);
  const [joinSign, setJoinSign] = useState<string>();

  // NFT 상세 모달
  const [isShowNft, setIsShowNft] = useState<boolean>(false);
  const [nftDetail, setNftDetail] = useState<NftItem>();

  // 결제 과정 모달
  const [isShowProcess, setIsShowProcess] = useState<boolean>(false);
  const [processModalType, setProcessModalType] =
    useState<ProcessModalType>("process");

  // 약관 모달
  const [isShowTerms, setIsShowTerms] = useState<boolean>(false);
  const [selectedTerms, setSelectedTerms] = useState<SelectTermsType>("terms");
  // 반응형 감지
  useEffect(() => {
    setIsTabletBelow(isTabletOrBelow);
    setRsp(isTabletOrBelow ? "m" : "");
  }, [isTabletOrBelow, isTabletBelow]);

  // 드롭다운 메뉴 제목 클릭
  const onSelectDropdown = async (selected: number) => {
    isTabletBelow && setIsShowDrawer(false);
    setDropdownList(
      dropdownList.map((v) => {
        return {
          ...v,
          selected: isTabletBelow
            ? v.id === selected
              ? true
              : false
            : v.id === selected
            ? !v.selected
            : false,
        };
      })
    );
  };

  // 지갑 연결
  const connectWallet = () => {
    // 특정 상황에서만 지갑 연결 중이라는 문구 띄우기
    activate(injected, (error: any) => {
      if (error instanceof NoEthereumProviderError) {
        // 지갑 확장프로그램 미설치
        setTimeout(() => {
          const openUrl = isTabletBelow
            ? process.env.NEXT_PUBLIC_METAMASK_DEEPLINK
            : process.env.NEXT_PUBLIC_METAMASK_DOWNLOAD;
          if (typeof window !== "undefined") {
            // window.open(openUrl);
            window.location.href = `${openUrl}`;
          }
        }, 1000);
      } else if (error instanceof UnsupportedChainIdError) {
        // 미지원 네트워크 연결 상태
        setErrorMessage({
          message: textObj.wallet.unsupportedError.msg[lang],
          subMessage: textObj.wallet.unsupportedError.sub[lang],
        });
        setIsShowMsgError(true);
      } else if (error instanceof UserRejectedRequestError) {
        // 사용자가 사이트 지갑 연결을 거부한 경우
        return false;
      } else {
        // 알 수 없는 기타 에러
        setErrorMessage({
          message: textObj.wallet.connectionError.msg[lang],
          subMessage: textObj.wallet.connectionError.sub[lang],
        });
        setIsShowMsgError(true);
      }
    });
  };

  // 지갑 연결 해제
  const disconnectWallet = async () => {
    active && account && account.length > 0 && deactivate();
    // isTabletBelow && setIsShowDrawer(false);
    await removeUserSession();
    router.refresh();
  };

  // 로그인 에러 모달
  const loginErrorModal = () => {
    setErrorMessage({
      message: textObj.wallet.connectionError.msg[lang],
      subMessage: textObj.wallet.connectionError.sub[lang],
    });
    setIsShowMsgError(true);
  };

  // 서명 검증 및 로그인 연결
  const checkSignedAPI = async (account: string) => {
    if (!(await checkSigned(account))) {
      // 서명 요청
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        chainId
      );
      const signer = provider.getSigner();
      const signature: any = await signer
        .signMessage(text.sign.en)
        .catch((e: any) => {
          disconnectWallet();
          return false;
        });
      if (signature) {
        setJoinSign(signature);
        // 서명했을 때만 로그인 허용한다 + 즉, 서명과 회원정보를 모두 완료해야 첫 로그인을 허용한다
        const checkInfoResult = await checkUserInfo(account);
        if (!checkInfoResult) {
          setIsShowJoin(true);
        }
      }
    } else {
      // 이미 서명을 완료한 경우 (기존회원)
      // 로그인만 진행
      const loginResult = await login(account);
      if (loginResult?.success) {
        const {
          data: { accessToken, id },
        } = loginResult;
        await setUserSession(accessToken.token, account, id);
        // console.log("기존 회원 재로그인 성공!");
        router.refresh();
      } else {
        // console.log("로그인 에러");
        disconnectWallet();
        loginErrorModal();
      }
    }
  };

  // 지갑 신규 연결 감지
  useEffect(() => {
    active && account && !isWalletConnected && checkSignedAPI(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account, isWalletConnected]);

  // 이더결제 준비
  const checkEtherReady = async (data: NftItem) => {
    const { nft, price, id } = data;
    const checkResult = await etherReady(id);

    if (checkResult.success) {
      const { orderId } = checkResult.data;
      // 상세페이지가 열려있는 경우를 위해 false처리
      setIsShowNft(false);
      !nftDetail && setNftDetail(data);
      setProcessModalType("process");
      setIsShowProcess(true);
      const callResult = await callMintNft(nft.tokenUri, String(price));
      if (!callResult.success) {
        await etherResult(orderId, "N");
        setIsShowProcess(false);
        setErrorMessage({
          message:
            callResult?.code && callResult?.code?.includes("INSUFFICIENT")
              ? textObj.wallet.balanceError.msg[lang]
              : textObj.wallet.txCommonError.msg[lang],
          subMessage: textObj.wallet.balanceError.sub[lang],
        });
        setIsShowMsgError(true);
      } else {
        await etherResult(orderId, "Y", {
          txHash: callResult?.transactionHash,
          tokenId: Number(callResult.tokenId),
        });
        setProcessModalType("done");
        setIsShowProcess(true);
      }
      // router.refresh();
    } else {
      // 에러페이지 보여주기
      setIsShowNft(false);
      setErrorMessage({
        message: textObj.wallet.txCommonError.msg[lang],
        subMessage: textObj.wallet.balanceError.sub[lang],
      });
      setIsShowMsgError(true);
    }
  };

  const props = {
    rsp,
    lang,
    isShowTerms,
    selectedTerms,
    setIsShowTerms,
    isShowProcess,
    nftDetail,
    processModalType,
    setIsShowProcess,
    isShowNft,
    setIsShowNft,
    connectWallet,
    checkEtherReady,
    isShowJoin,
    account,
    joinSign,
    loginErrorModal,
    setIsShowJoin,
    disconnectWallet,
    setErrorMessage,
    setIsShowMsgError,
    isShowMsgError,
    errorMessage,
    isWalletConnected,
    dropdownList,
    onSelectDropdown,
    isShowDrawer,
    setIsShowDrawer,
    isTabletBelow,
    isShowUser,
    setIsShowUser,
    setNftDetail,
    setSelectedTerms,
    text: textBundle(),
  };

  return <PagePresenter {...props} />;
}
