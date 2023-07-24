import styles from "./modal-errormessagemodal.module.css";
import Modal from "@/component/modal";
import RoundedSingleButton from "@/component/button/roundedSingleButton";

interface Props {
  rsp?: string;
  lang?: "en" | "kr";
  isShow?: boolean;
  message: string;
  subMessage?: string;
  onCloseClick: () => void;
}

export default function ErrorMessageModal({
  rsp = "",
  isShow,
  message,
  subMessage = "",
  onCloseClick,
}: Props) {
  // lang 불러오기
  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{message}</div>
      <div className={`${styles.subMessage}`}>{subMessage}</div>
      <div className={`${styles.bottom}`}>
        <RoundedSingleButton name={"OK"} onClick={() => onCloseClick()} />
      </div>
    </Modal>
  );
}
