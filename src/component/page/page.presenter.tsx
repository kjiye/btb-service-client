import { NftItem } from "@/model/api";
import {
  DeviceType,
  DropdownItem,
  ErrorMessageItem,
  ErrorMessageType,
  ICON_SIZE_SMALL,
  LanguageType,
  ProcessModalType,
  SelectTermsType,
} from "@/model/props";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import DrawerMenu from "@/component/drawer";
import Dropdown, { renderDropdownInnerComponent } from "@/component/dropdown";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Image from "next/image";
import ErrorMessageModal from "@/component/modal/errorMessageModal";
// import NftDetailModal from "@/component/modal/nftDetailModal";
import NftDetailModal from "@/component/modal/nftDetailModal";
import ProcessModal from "@/component/modal/processModal";
import TermsModal from "@/component/modal/termsModal";
import UserInfoModal from "@/component/modal/userInfoModal";
import User from "@/component/user";

interface Props {
  rsp: DeviceType;
  lang: LanguageType;
  isShowTerms: boolean;
  selectedTerms: SelectTermsType;
  setIsShowTerms: (isShow: boolean) => void;
  isShowProcess: boolean;
  nftDetail?: NftItem;
  processModalType: ProcessModalType;
  setIsShowProcess: (isShow: boolean) => void;
  isShowNft: boolean;
  setIsShowNft: (isShow: boolean) => void;
  connectWallet: () => void;
  isShowJoin: boolean;
  account?: string | null;
  joinSign?: string;
  loginErrorModal: () => void;
  setIsShowJoin: (isShow: boolean) => void;
  disconnectWallet: () => void;
  // setErrorMessage: (message: ErrorMessageItem) => void;
  // setIsShowMsgError: (isShow: boolean) => void;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  isShowMsgError: boolean;
  onChangeProcessModal: (type?: ProcessModalType) => void;

  errorMessage: ErrorMessageItem;
  isWalletConnected: boolean;
  dropdownList: DropdownItem[];
  onSelectDropdown: (selected: number) => void;
  isShowDrawer: boolean;
  setIsShowDrawer: (isShow: boolean) => void;
  isTabletBelow: boolean;
  isShowUser: boolean;
  setIsShowUser: (isShow: boolean) => void;
  setNftDetail: (data: NftItem) => void;
  setSelectedTerms: (temsType: SelectTermsType) => void;
  text: Record<string, any>;
}

export default function PagePresenter({
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
  isShowJoin,
  account,
  joinSign,
  loginErrorModal,
  setIsShowJoin,
  disconnectWallet,
  // setErrorMessage,
  // setIsShowMsgError,
  onChangeErrorMessage,
  isShowMsgError,
  onChangeProcessModal,
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
  text,
}: Props) {
  console.log("=========");
  console.log(isShowMsgError);
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

      {/* 
      <NftDetailModal
        rsp={rsp}
        lang={lang}
        isShow={isShowNft}
        onCloseClick={() => setIsShowNft(false)}
        onConnectWallet={() => connectWallet()}
        onBuyClick={(data: NftItem) => checkEtherReady(data)}
        data={nftDetail}
      /> 
      */}
      <NftDetailModal
        rsp={rsp}
        onChangeErrorMessage={onChangeErrorMessage}
        isShow={isShowNft}
        setIsShowNft={setIsShowNft}
        selectedData={nftDetail}
        onChangeProcessModal={onChangeProcessModal}
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
          /*
          setErrorMessage({
            message: text.wallet.inputUserError.msg[lang],
            subMessage: text.wallet.inputUserError.sub[lang],
          });
          setIsShowMsgError(true);
          */
          onChangeErrorMessage("inputUserError");
        }}
      />
      {isShowMsgError && (
        <ErrorMessageModal
          rsp={rsp}
          isShow={isShowMsgError}
          message={errorMessage?.message}
          subMessage={errorMessage?.subMessage}
          onCloseClick={() => {
            /*
            setIsShowMsgError(false);
            setErrorMessage({});
            */
            onChangeErrorMessage();
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
          rsp={rsp}
          isTabletBelow={isTabletBelow}
          lang={lang}
          onMenuClick={() => {
            setIsShowDrawer(true);
          }}
          onLoginClick={() => connectWallet()}
        />
        <div className={`mainWrapper ${rsp}`}>
          {!isTabletBelow && isWalletConnected && (
            <div className={`userWrapper`}>
              <span
                className={`userBtn`}
                onClick={() => setIsShowUser(!isShowUser)}
              >
                <Image
                  src="/img/icon/icon_user.png"
                  alt="user information icon"
                  width={ICON_SIZE_SMALL}
                  height={ICON_SIZE_SMALL}
                />
              </span>
              {isShowUser && (
                <span className={`userInfo`}>
                  <User />
                  <RoundedSingleButton
                    name={text.common.button.logout[lang]}
                    onClick={() => disconnectWallet()}
                  />
                </span>
              )}
            </div>
          )}
          {isTabletBelow
            ? !isShowDrawer && (
                <div>
                  {renderDropdownInnerComponent((data: NftItem) => {
                    setNftDetail(data);
                    setIsShowNft(true);
                  }, dropdownList.find((v: DropdownItem) => !!v.selected)?.content)}
                </div>
              )
            : dropdownList.map((v: DropdownItem) => (
                <Dropdown
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  selected={v.selected}
                  contentType={v.content}
                  onSelectMenu={(selectedId: number) =>
                    // container로 분리
                    onSelectDropdown(selectedId)
                  }
                  onSelectNft={(data: NftItem) => {
                    // container로 분리
                    setNftDetail(data);
                    setIsShowNft(true);
                  }}
                />
              ))}
        </div>
        {!isTabletBelow && (
          <Footer
            rsp={rsp}
            onSelectTerms={(selected: SelectTermsType) => {
              setSelectedTerms(selected);
              setIsShowTerms(true);
            }}
          />
        )}
      </div>
    </>
  );
}
