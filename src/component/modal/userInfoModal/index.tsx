import { login } from "@/api/fetch";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import BasicInput from "@/component/input/basicInput";
import Modal from "@/component/modal";
import { checkTextFormat, textEllipsis } from "@/util/format.util";
import { useContext, useEffect, useState } from "react";
import styles from "./modal-userinfomodal.module.css";
import { setUserSession } from "@/util/session.util";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";

interface Props {
  rsp?: string;
  lang?: "en" | "kr";
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
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // 유효성 검사
  const [nameErr, setNameErr] = useState<boolean>();
  const [emailErr, setEmailErr] = useState<boolean>();
  const [phoneErr, setPhoneErr] = useState<boolean>();

  // useEffect로 값 초기화 처리

  useEffect(() => {
    setName("");
    setEmail("");
    setPhone("");
  }, []);

  const updateUserInfo = async (name: string, email: string, phone: string) => {
    if (account) {
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

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={() => onCloseClick()}>
      <div>Welcome to Beyond the Birthplace</div>
      <BasicInput
        title={textObj.join.title.connectTo[lang]}
        value={account ? textEllipsis(account) : ""}
        editable={false}
      />
      <BasicInput
        title={textObj.join.title.name[lang]}
        placeholder={textObj.join.placeholder.name[lang]}
        value={name}
        editable={true}
        validationMsg={nameErr ? textObj.join.validation.name[lang] : ""}
        onChange={(text: string) => {
          setNameErr(!(text.trim().length > 0));
          setName(text);
        }}
      />
      <BasicInput
        title={textObj.join.title.email[lang]}
        placeholder={textObj.join.placeholder.email[lang]}
        value={email}
        editable={true}
        validationMsg={emailErr ? textObj.join.validation.email[lang] : ""}
        onChange={(text: string) => {
          setEmailErr(!checkTextFormat("email", text));
          setEmail(text);
        }}
      />
      <BasicInput
        title={textObj.join.title.number[lang]}
        placeholder={textObj.join.placeholder.number[lang]}
        value={phone}
        editable={true}
        validationMsg={phoneErr ? textObj.join.validation.number[lang] : ""}
        onChange={(text: string) => {
          setPhone(text);
          setPhoneErr(!checkTextFormat("phone", text));
        }}
      />
      <div className={`${styles.bottom}`}>
        <RoundedSingleButton
          name={textObj.join.button.submit[lang]}
          disabled={
            !(
              name.length > 0 &&
              phone.length > 0 &&
              email.length > 0 &&
              !nameErr &&
              !phoneErr &&
              !emailErr
            )
          }
          onClick={() => updateUserInfo(name, email, phone)}
        />
      </div>
    </Modal>
  );
}
