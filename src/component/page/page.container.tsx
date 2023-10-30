import {
  checkSigned,
  checkUserInfo,
  login,
  requestEtherReady,
  sendEtherResult,
} from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import {
  DeviceType,
  DropdownItem,
  DropdownDatasets,
  SelectTermsType,
  ProcessModalType,
  PC_MAX_WIDTH,
} from "@/model/props";
import { checkIsWalletConnected, setUserSession } from "@/util/session.util";
import { injected } from "@/util/wallet/transaction.util";
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
import useErrorMessageModal from "@/util/wallet/error.util";
import useDisconnectWallet from "@/util/wallet/disconnect.util";

export default function PageContainer() {
  const isWalletConnected = checkIsWalletConnected();
  const router = useRouter();
  const { chainId, account, active, activate } = useWeb3React();
  const {
    state: { lang },
  } = useContext(LangContext);
  const isTabletOrBelow: boolean = useMediaQuery({
    query: PC_MAX_WIDTH,
  });

  // 반응형 레이아웃
  const [isTabletBelow, setIsTabletBelow] = useState<boolean>(false);
  const [rsp, setRsp] = useState<DeviceType>("");

  const [dropdownList, setDropdownList] =
    useState<DropdownItem[]>(DropdownDatasets);

  // 모바일 선택 컨텐츠
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  // 사용자 정보 펼침
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  // 모달 타입 A - 회원가입 폼
  const [isShowJoin, setIsShowJoin] = useState<boolean>(false);
  const [joinSign, setJoinSign] = useState<string>();

  // 모달 타입 B - NFT 상세
  const [isShowNft, setIsShowNft] = useState<boolean>(false);
  const [nftDetail, setNftDetail] = useState<NftItem>();

  // 모달 타입 C - 결제 과정
  const [isShowProcess, setIsShowProcess] = useState<boolean>(false);
  const [processModalType, setProcessModalType] =
    useState<ProcessModalType>("process");

  // 모달 타입 D - 약관 출력
  const [isShowTerms, setIsShowTerms] = useState<boolean>(false);
  const [selectedTerms, setSelectedTerms] = useState<SelectTermsType>("terms");

  // 에러메세지 모달 커스텀 훅
  const { isShowMsgError, errorMessage, onChangeErrorMessage } =
    useErrorMessageModal();

  const { onDisconnectWallet } = useDisconnectWallet();

  /**
   * 메타마스크 지갑 연결
   */
  const onConnectWallet = () => {
    activate(injected, (error: any) => {
      if (error instanceof NoEthereumProviderError) {
        setTimeout(() => {
          const openUrl = isTabletBelow
            ? process.env.NEXT_PUBLIC_METAMASK_DEEPLINK
            : process.env.NEXT_PUBLIC_METAMASK_DOWNLOAD;
          if (typeof window !== "undefined") {
            window.location.href = `${openUrl}`;
          }
        }, 1000);
      } else if (error instanceof UnsupportedChainIdError) {
        onChangeErrorMessage("unsupportedError");
      } else if (error instanceof UserRejectedRequestError) {
        return false;
      } else {
        onChangeErrorMessage("connectionError");
      }
    });
  };

  /**
   * 서명 검증 및 회원가입
   * @param account
   */
  const checkSignedAPI = async (account: string) => {
    if (!(await checkSigned(account))) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        chainId
      );
      const signer = provider.getSigner();
      const signature: string | boolean = await signer
        .signMessage(text.sign.en)
        .catch(() => {
          onDisconnectWallet();
          return false;
        });
      if (signature) {
        setJoinSign(signature);
        // 서명 완료 + 회원정보 입력을 모두 완료해야 첫 로그인을 허용한다
        !(await checkUserInfo(account)) && setIsShowJoin(true);
      }
    } else {
      // 이미 서명을 완료한 기존 회원의 경우 로그인
      const loginResult = await login(account);
      if (!loginResult?.success) {
        onDisconnectWallet();
        onChangeErrorMessage("connectionError");
        return;
      }
      const {
        data: { accessToken, id },
      } = loginResult;
      await setUserSession(accessToken.token, account, id);
      router.refresh();
    }
  };

  /**
   * 지갑 신규 연결 감지
   */
  useEffect(() => {
    active && account && !isWalletConnected && checkSignedAPI(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account, isWalletConnected]);

  /**
   * 반응형 감지
   */
  useEffect(() => {
    setIsTabletBelow(isTabletOrBelow);
    setRsp(isTabletOrBelow ? "m" : "");
  }, [isTabletOrBelow, isTabletBelow]);

  const props = {
    rsp,
    lang,
    isShowTerms,
    selectedTerms,
    setIsShowTerms,
    isShowProcess,
    nftDetail,
    processModalType,
    isShowNft,
    setIsShowNft,
    // 신규
    onConnectWallet: () => onConnectWallet(),
    onDisconnectWallet: () => onDisconnectWallet(),
    isShowJoin,
    account,
    joinSign,
    setIsShowJoin,
    // 신규
    onChangeErrorMessage,
    isShowMsgError,
    onChangeProcessModal: (type?: ProcessModalType) => {
      // 추후 모달 관련된 것들은 객체형 props로 변경해서 처리하기
      type && setProcessModalType(type);
      setIsShowProcess(!!type);
    },
    errorMessage,
    isWalletConnected,
    dropdownList,
    onSelectDropdown: async (selected: number) => {
      isTabletBelow && setIsShowDrawer(false);
      setDropdownList(
        dropdownList.map((v: DropdownItem) => {
          return {
            ...v,
            selected: isTabletBelow
              ? v.id === selected
              : v.id === selected
              ? !v.selected
              : false,
          };
        })
      );
    },
    isShowDrawer,
    onChangeDrawer: (isShow: boolean) => setIsShowDrawer(isShow),
    isTabletBelow,
    isShowUser,
    setIsShowUser,
    setNftDetail,
    setSelectedTerms,
    text: textBundle(),
  };

  return <PagePresenter {...props} />;
}
