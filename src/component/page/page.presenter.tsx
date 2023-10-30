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
  isShowNft: boolean;
  setIsShowNft: (isShow: boolean) => void;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
  isShowJoin: boolean;
  account?: string | null;
  joinSign?: string;
  setIsShowJoin: (isShow: boolean) => void;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  isShowMsgError: boolean;
  onChangeProcessModal: (type?: ProcessModalType) => void;
  errorMessage: ErrorMessageItem;
  isWalletConnected: boolean;
  dropdownList: DropdownItem[];
  onSelectDropdown: (selected: number) => void;
  isShowDrawer: boolean;
  onChangeDrawer: (isShow: boolean) => void;
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
  isShowNft,
  setIsShowNft,
  onConnectWallet,
  onDisconnectWallet,
  isShowJoin,
  account,
  joinSign,
  setIsShowJoin,
  onChangeErrorMessage,
  isShowMsgError,
  onChangeProcessModal,
  errorMessage,
  isWalletConnected,
  dropdownList,
  onSelectDropdown,
  isShowDrawer,
  onChangeDrawer,
  isTabletBelow,
  isShowUser,
  setIsShowUser,
  setNftDetail,
  setSelectedTerms,
  text,
}: Props) {
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
      />
      <NftDetailModal
        rsp={rsp}
        selectedData={nftDetail}
        isShow={isShowNft}
        setIsShowNft={setIsShowNft}
        onChangeErrorMessage={onChangeErrorMessage}
        onChangeProcessModal={onChangeProcessModal}
        onConnectWallet={onConnectWallet}
      />
      <UserInfoModal
        rsp={rsp}
        isShow={isShowJoin}
        account={account}
        sign={joinSign}
        onSubmitError={() => onChangeErrorMessage("connectionError")}
        onSubmitSuccess={() => setIsShowJoin(false)}
        onCloseClick={() => {
          // container 기능으로 묶기
          onDisconnectWallet();
          setIsShowJoin(false);
          onChangeErrorMessage("inputUserError");
        }}
      />
      <ErrorMessageModal
        rsp={rsp}
        isShow={isShowMsgError}
        message={errorMessage?.message}
        subMessage={errorMessage?.subMessage}
        onCloseClick={() => {
          onChangeErrorMessage();
        }}
      />
      {isTabletBelow && (
        <DrawerMenu
          active={isWalletConnected}
          lang={lang}
          dropdownList={dropdownList}
          onSelected={onSelectDropdown}
          isShowDrawer={isShowDrawer}
          onCloseClick={() => onChangeDrawer(false)}
          onLoginClick={() => onConnectWallet()}
          onLogoutClick={() => onDisconnectWallet()}
        />
      )}
      <div className={`resContainer ${rsp}`}>
        <Header
          active={isWalletConnected}
          rsp={rsp}
          isTabletBelow={isTabletBelow}
          lang={lang}
          onMenuClick={() => {
            onChangeDrawer(true);
          }}
          onLoginClick={() => onConnectWallet()}
        />
        <div className={`mainWrapper ${rsp}`}>
          {!isTabletBelow && isWalletConnected && (
            // global css 사용 중
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
                    onClick={() => onDisconnectWallet()}
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
