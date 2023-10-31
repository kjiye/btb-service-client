import Modal from "@/component/modal";
import styles from "./modal-termsmodal.module.scss";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";
import TermsContent from "./content";
import { SelectTermsType } from "@/model/props";
import { textBundle } from "@/util/format.util";

interface Props {
  rsp?: string;
  isShow?: boolean;
  selected: SelectTermsType;
  onCloseClick: () => void;
}

export default function TermsModal({
  rsp = "",
  isShow,
  selected,
  onCloseClick,
}: Props) {
  const text = textBundle();
  const {
    state: { lang },
  } = useContext(LangContext);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      <div>{text.footer[selected].title[lang]}</div>
      <div className={styles.contentWrapper}>
        <div>
          <TermsContent selected={selected} />
        </div>
      </div>
    </Modal>
  );
}
