"use client";
import DrawerMenu from "@/component/drawer";
import Dropdown from "@/component/dropdown";
import DropdownImageButtonList from "@/component/dropdown/inner/imageButton";
import DropdownImageCardList from "@/component/dropdown/inner/imageCard";
import DropdownInnerText from "@/component/dropdown/inner/text";
import Footer from "@/component/footer";
import Header from "@/component/header";
import UserInfoModal from "@/component/modal/userInfoModal";
import { LangContext } from "@/context/lang.context";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import User from "@/component/user";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { callMintNft, injected } from "@/util/walletConnector.util";
import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { ethers } from "ethers";
import ErrorMessageModal from "@/component/modal/errorMessageModal";
import {
  checkSigned,
  checkUserInfo,
  etherReady,
  etherResult,
  login,
} from "@/api/fetch";
import text from "../text.json";
import {
  checkIsWalletConnected,
  removeUserSession,
  setUserSession,
} from "@/util/session.util";
import NftDetailModal from "@/component/modal/nftDetailModal";
import ProcessModal from "@/component/modal/processModal";
import TermsModal from "@/component/modal/termsModal";

async function getPreFetch() {
  // const res = await fetch('https://api.example.com/...');
  // return res.json();
}

// root 경로인 "/" 에서 실행할 파일
// 메인페이지로 사용
export default function Page() {
  getPreFetch();
  const isWalletConnected = checkIsWalletConnected();
  const textObj = Object(text);

  const { chainId, account, active, activate, deactivate } = useWeb3React();
  const router = useRouter();

  const {
    state: { lang },
  } = useContext(LangContext);

  // 반응형 레이아웃
  const [isTabletBelow, setIsTabletBelow] = useState<boolean>(false);
  const [rsp, setRsp] = useState<string>("");
  const isTabletOrBelow: boolean = useMediaQuery({
    query: "(max-width: 1279px)",
  });
  // 드롭다운
  const [dropdownList, setDropdownList] = useState<any[]>([
    { id: 1, title: "Introduction", child: <DropdownInnerText /> },
    { id: 2, title: "Map", child: <DropdownImageCardList /> },
    {
      id: 3,
      title: "NFT Shop",
      child: (
        <DropdownImageButtonList
          onConnectWallet={() => {
            connectWallet();
          }}
          onSelectNft={(data: any) => {
            setNftDetail(data);
            setIsShowNft(true);
          }}
          onBuyClick={(data: any) => checkEtherReady(data)}
        />
      ),
    },
  ]);

  // 모바일 선택 컨텐츠
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  // PC 사용자 정보 펼침 상태
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  // 문구 에러 모달
  const [isShowMsgError, setIsShowMsgError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>({});

  // 회원 가입 모달
  const [isShowJoin, setIsShowJoin] = useState<boolean>(false);
  const [joinSign, setJoinSign] = useState<string>();

  // NFT 상세 모달
  const [isShowNft, setIsShowNft] = useState<boolean>(false);
  const [nftDetail, setNftDetail] = useState<any>();

  // 결제 과정 모달
  const [isShowProcess, setIsShowProcess] = useState<boolean>(false);
  const [processModalType, setProcessModalType] = useState<"process" | "done">(
    "process"
  );

  // 약관 모달
  const [isShowTerms, setIsShowTerms] = useState<boolean>(false);
  const [selectedTerms, setSelectedTerms] = useState<"terms" | "privacy">(
    "terms"
  );

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
            window.open(openUrl);
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
        console.log("기존 회원 재로그인 성공!");
        router.refresh();
      } else {
        console.log("로그인 에러");
        disconnectWallet();
        loginErrorModal();
      }
    }
  };

  // 지갑 신규 연결 감지
  useEffect(() => {
    if (active && account && !isWalletConnected) {
      checkSignedAPI(account);
    }
  }, [active, account]);

  // 마운트 테스트
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 구매 가능여부 확인 후 컨트랙 콜
  // 컨트랙 콜 결과 전송
  const checkEtherReady = async (data: any) => {
    const { nft, price, id } = data;
    const checkResult = await etherReady(id);
    if (checkResult.success) {
      const { orderId, orderNumber } = checkResult.data;
      setIsShowNft(false); // 상세페이지가 열려있는 경우를 위해 false처리
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

  if (mounted) {
    return (
      <>
        <TermsModal
          rsp={rsp}
          isShow={isShowTerms}
          selected={selectedTerms}
          onCloseClick={() => {
            setIsShowTerms(false);
          }}
        />
        <ProcessModal
          rsp={rsp}
          lang={lang}
          isShow={isShowProcess}
          data={nftDetail}
          type={processModalType}
          onCloseClick={() => setIsShowProcess(false)}
        />

        <NftDetailModal
          rsp={rsp}
          lang={lang}
          isShow={isShowNft}
          onCloseClick={() => setIsShowNft(false)}
          onConnectWallet={() => connectWallet()}
          onBuyClick={(data: any) => checkEtherReady(data)}
          data={nftDetail}
        />
        <UserInfoModal
          rsp={rsp}
          isShow={isShowJoin}
          account={account}
          sign={joinSign}
          onSubmitError={() => loginErrorModal()}
          onSubmitSuccess={() => setIsShowJoin(false)}
          onCloseClick={() => {
            disconnectWallet();
            setIsShowJoin(false);
            setErrorMessage({
              message: textObj.wallet.inputUserError.msg[lang],
              subMessage: textObj.wallet.inputUserError.sub[lang],
            });
            setIsShowMsgError(true);
          }}
        />
        {isShowMsgError && (
          <ErrorMessageModal
            rsp={rsp}
            isShow={isShowMsgError}
            message={errorMessage.message}
            subMessage={errorMessage.subMessage}
            onCloseClick={() => {
              setIsShowMsgError(false);
              setErrorMessage({});
            }}
          />
        )}
        {isTabletBelow && (
          <DrawerMenu
            active={isWalletConnected}
            lang={lang}
            dropdownList={dropdownList}
            onSelected={(selected: number) => onSelectDropdown(selected)}
            isShowDrawer={isShowDrawer}
            onCloseClick={() => {
              setIsShowDrawer(false);
            }}
            onLoginClick={() => connectWallet()}
            onLogoutClick={() => disconnectWallet()}
          />
        )}
        <div className={`resContainer ${rsp}`}>
          <Header
            active={isWalletConnected}
            // active={!!(sessionStorage?.getItem("isWalletConnected") === "true")}
            rsp={rsp}
            isTabletBelow={isTabletBelow}
            lang={lang}
            onMenuClick={() => {
              setIsShowDrawer(true);
            }}
            onLoginClick={() => connectWallet()}
          />
          <div className={`mainWrapper ${rsp}`}>
            {/* PC 지갑 연결 상태일 시 표시 아이콘 */}
            {!isTabletBelow && isWalletConnected && (
              <div className={`userWrapper`}>
                <span
                  className={`userBtn`}
                  onClick={() => setIsShowUser(!isShowUser)}
                >
                  <Image
                    src="/img/icon/icon_user.png"
                    alt="user"
                    width={30}
                    height={30}
                  />
                </span>
                {isShowUser && (
                  <span className={`userInfo`}>
                    {/* 한번 더 펼침 여부 확인해야함 */}
                    <User />
                    <RoundedSingleButton
                      name={textObj.common.button.logout[lang]}
                      onClick={() => disconnectWallet()}
                    />
                  </span>
                )}
              </div>
            )}
            {isTabletBelow
              ? !isShowDrawer && (
                  <div>{dropdownList.find((v) => !!v.selected)?.child}</div>
                )
              : dropdownList.map((v) => (
                  <Dropdown
                    key={v.id}
                    id={v.id}
                    title={v.title}
                    selected={...v.selected}
                    onSelected={(selected: number) =>
                      onSelectDropdown(selected)
                    }
                    child={v.child}
                    rsp={rsp}
                    isTabletBelow={isTabletBelow}
                  />
                ))}
          </div>
          {!isTabletBelow && (
            <Footer
              rsp={rsp}
              isTabletBelow={isTabletBelow}
              onSelectTerms={(selected: "terms" | "privacy") => {
                setSelectedTerms(selected);
                setIsShowTerms(true);
              }}
            />
          )}
        </div>
      </>
    );
  } else {
    <div>loading..</div>;
  }
}
