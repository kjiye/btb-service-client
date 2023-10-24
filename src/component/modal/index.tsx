// dimmed 처리된 화면 + 모달 팝업 세트로 구성
import { ICON_SIZE_TINY } from "@/model/props";
import Image from "next/image";
import styles from "./modal.module.scss";

interface Props {
  isShow?: boolean;
  rsp?: string;
  children?: React.ReactNode;
  useClose?: boolean;
  onCloseClick?: () => void;
}

export default function Modal({
  isShow = true,
  rsp = "",
  children,
  useClose = true,
  onCloseClick,
}: Props) {
  return isShow ? (
    <div className={styles.dimmed}>
      <div className={`${styles.modalWrapper} ${styles[rsp]}`}>
        {useClose && (
          <div
            className={`${styles.close}`}
            onClick={() => onCloseClick && onCloseClick()}
          >
            <Image
              src="/img/icon/icon_close.png"
              alt="close icon"
              width={ICON_SIZE_TINY}
              height={ICON_SIZE_TINY}
            />
          </div>
        )}
        {children && <div className={styles.content}>{children}</div>}
      </div>
    </div>
  ) : (
    <></>
  );
}
