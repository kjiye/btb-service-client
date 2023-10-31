import Image from "next/image";
import styles from "./modal.module.scss";
import { theme } from "../../../tailwind.config";

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
              width={theme?.extend?.size[`icon-tn`]}
              height={theme?.extend?.size[`icon-tn`]}
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
