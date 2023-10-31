import { NftItem } from "@/model/api";
import {
  DeviceType,
  DropdownItem,
  ErrorMessageItem,
  ErrorMessageType,
  ICON_SIZE_SMALL,
  IsShowModalItem,
  IsShowModalType,
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
import NftDetailModal from "@/component/modal/nftDetailModal";
import ProcessModal from "@/component/modal/processModal";
import TermsModal from "@/component/modal/termsModal";
import UserInfoModal from "@/component/modal/userInfoModal";
import User from "@/component/user";

interface Props {
  rsp: DeviceType;
  isTabletBelow: boolean;
  lang: LanguageType;
  selectedTerms: SelectTermsType;
  setSelectedTerms: (temsType: SelectTermsType) => void;
  nftDetail?: NftItem;
  setNftDetail: (data: NftItem) => void;
  isWalletConnected: boolean;
  joinSign?: string;
  account?: string | null;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
  isShowMsgError: boolean;
  errorMessage: ErrorMessageItem;
  onChangeErrorMessage: (type?: ErrorMessageType) => void;
  isShowModal: IsShowModalItem;
  onChangeModal: (type: IsShowModalType, isShow: boolean) => void;
  processModalType: ProcessModalType;
  onChangeProcessModal: (type?: ProcessModalType) => void;
  dropdownList: DropdownItem[];
  onSelectDropdown: (selected: number) => void;
  text: Record<string, any>;
}

export default function PagePresenter({
  rsp,
  isTabletBelow,
  lang,
  selectedTerms,
  setSelectedTerms,
  nftDetail,
  setNftDetail,
  isWalletConnected,
  joinSign,
  account,
  onConnectWallet,
  onDisconnectWallet,
  isShowMsgError,
  errorMessage,
  onChangeErrorMessage,
  isShowModal,
  onChangeModal,
  processModalType,
  onChangeProcessModal,
  dropdownList,
  onSelectDropdown,
  text,
}: Props) {
  return (
    <>
      <TermsModal
        rsp={rsp}
        isShow={isShowModal.terms}
        selected={selectedTerms}
        onCloseClick={() => onChangeModal("terms", false)}
      />
      <ProcessModal
        rsp={rsp}
        lang={lang}
        isShow={isShowModal.process}
        data={nftDetail}
        type={processModalType}
      />
      <NftDetailModal
        rsp={rsp}
        selectedData={nftDetail}
        isShow={isShowModal.nft}
        onCloseClick={() => onChangeModal("nft", false)}
        onChangeErrorMessage={onChangeErrorMessage}
        onChangeProcessModal={onChangeProcessModal}
        onConnectWallet={onConnectWallet}
      />
      <UserInfoModal
        rsp={rsp}
        isShow={isShowModal.join}
        account={account}
        sign={joinSign}
        onSubmitError={() => onChangeErrorMessage("connectionError")}
        onSubmitSuccess={() => onChangeModal("join", false)}
        onCloseClick={() => {
          onDisconnectWallet();
          onChangeModal("join", false);
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
          isShow={isShowModal.drawer}
          onCloseClick={() => onChangeModal("drawer", false)}
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
          onMenuClick={() => onChangeModal("drawer", true)}
          onLoginClick={() => onConnectWallet()}
        />
        <div className={`mainWrapper ${rsp}`}>
          {!isTabletBelow && isWalletConnected && (
            <div className={`userWrapper`}>
              <span
                className={`userBtn`}
                onClick={() => onChangeModal("user", !isShowModal.user)}
              >
                <Image
                  src="/img/icon/icon_user.png"
                  alt="user information icon"
                  width={ICON_SIZE_SMALL}
                  height={ICON_SIZE_SMALL}
                />
              </span>
              {isShowModal.user && (
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
            ? !isShowModal.drawer && (
                <div>
                  {renderDropdownInnerComponent((data: NftItem) => {
                    setNftDetail(data);
                    onChangeModal("nft", true);
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
                    onSelectDropdown(selectedId)
                  }
                  onSelectNft={(data: NftItem) => {
                    setNftDetail(data);
                    onChangeModal("nft", true);
                  }}
                />
              ))}
        </div>
        {!isTabletBelow && (
          <Footer
            rsp={rsp}
            onSelectTerms={(selected: SelectTermsType) => {
              setSelectedTerms(selected);
              onChangeModal("terms", true);
            }}
          />
        )}
      </div>
    </>
  );
}
