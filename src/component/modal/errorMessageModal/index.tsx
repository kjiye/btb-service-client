import styles from "./modal-errormessagemodal.module.css";
import Modal from "@/component/modal";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { textBundle } from "@/util/format.util";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";

interface Props {
  rsp?: string;
  lang?: "en" | "kr";
  isShow?: boolean;
  message?: string;
  subMessage?: string;
  onCloseClick: () => void;
}

export default function ErrorMessageModal({
  rsp = "",
  isShow,
  message = "",
  subMessage = "",
  onCloseClick,
}: Props) {
  const {
    state: { lang },
  } = useContext(LangContext);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{message}</div>
      <div className={`${styles.subMessage}`}>{subMessage}</div>
      <div className={`${styles.bottom}`}>
        <RoundedSingleButton
          name={textBundle().common.button.ok[lang]}
          onClick={() => onCloseClick()}
        />
      </div>
    </Modal>
  );
}
