import Modal from "@/component/modal";
import styles from "./modal-termsmodal.module.css";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";

interface Props {
  rsp?: string;
  isShow?: boolean;
  selected: "terms" | "privacy";
  onCloseClick: () => void;
}

export default function TermsModal({
  rsp = "",
  isShow,
  selected,
  onCloseClick,
}: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{textObj.footer[selected].title[lang]}</div>
      <div className={styles.contentWrapper}>
        <div>{textObj.footer[selected].content[lang]}</div>
      </div>
    </Modal>
  );
}
