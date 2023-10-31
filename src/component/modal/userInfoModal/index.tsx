import { login } from "@/api/fetch";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import BasicInput from "@/component/input/basicInput";
import Modal from "@/component/modal";
import { checkTextFormat, textBundle, textEllipsis } from "@/util/format.util";
import { useContext, useEffect, useState } from "react";
import styles from "./modal-userinfomodal.module.scss";
import { setUserSession } from "@/util/session.util";
import { LangContext } from "@/context/lang.context";
import { LanguageType, UserInfoValidateItem } from "@/model/props";

interface Props {
  rsp?: string;
  lang?: LanguageType;
  isShow?: boolean;
  account?: string | null;
  sign?: string;
  onSubmitError: () => void;
  onSubmitSuccess: () => void;
  onCloseClick: () => void;
}

export default function UserInfoModal({
  rsp = "",
  isShow,
  sign,
  account = "",
  onSubmitError,
  onSubmitSuccess,
  onCloseClick,
}: Props) {
  const text = textBundle();
  const {
    state: { lang },
  } = useContext(LangContext);

  const [userInfo, setUserInfo] = useState<UserInfoValidateItem>();

  const updateUserInfo = async (userInfo: UserInfoValidateItem) => {
    if (account) {
      const { name, email, phone } = userInfo;
      const loginResult = await login(account, sign, email, name, phone);
      if (loginResult?.success) {
        const {
          data: { accessToken, id },
        } = loginResult;
        await setUserSession(accessToken.token, account, id);
        onSubmitSuccess();
      } else {
        onSubmitError();
      }
    }
  };

  useEffect(() => {
    setUserInfo({
      name: "",
      email: "",
      phone: "",
    });
  }, []);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{text.join.welcome[lang]}</div>
      <BasicInput
        title={text.join.title.connectTo[lang]}
        value={account ? textEllipsis(account) : ""}
        editable={false}
      />
      <BasicInput
        title={text.join.title.name[lang]}
        placeholder={text.join.placeholder.name[lang]}
        value={userInfo?.name || ""}
        editable={true}
        validationMsg={userInfo?.nameErr ? text.join.validation.name[lang] : ""}
        onChange={(text: string) => {
          setUserInfo({
            ...userInfo,
            name: text,
            nameErr: !(text.trim().length > 0),
          });
        }}
      />
      <BasicInput
        title={text.join.title.email[lang]}
        placeholder={text.join.placeholder.email[lang]}
        value={userInfo?.email || ""}
        editable={true}
        validationMsg={
          userInfo?.emailErr ? text.join.validation.email[lang] : ""
        }
        onChange={(text: string) => {
          setUserInfo({
            ...userInfo,
            email: text,
            emailErr: !checkTextFormat("email", text),
          });
        }}
      />
      <BasicInput
        title={text.join.title.number[lang]}
        placeholder={text.join.placeholder.number[lang]}
        value={userInfo?.phone || ""}
        editable={true}
        validationMsg={
          userInfo?.phoneErr ? text.join.validation.number[lang] : ""
        }
        onChange={(text: string) => {
          setUserInfo({
            ...userInfo,
            phone: text,
            phoneErr: !checkTextFormat("phone", text),
          });
        }}
      />
      <div className={`${styles.bottom}`}>
        <RoundedSingleButton
          name={text.join.button.submit[lang]}
          disabled={
            userInfo?.nameErr || userInfo?.emailErr || userInfo?.phoneErr
          }
          onClick={() => userInfo && updateUserInfo(userInfo)}
        />
      </div>
    </Modal>
  );
}
