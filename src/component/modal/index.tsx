// dimmed 처리된 화면 + 모달 팝업 세트로 구성
import Image from "next/image";
import styles from "./modal.module.css";

interface Props {
  isShow?: boolean;
  rsp?: string;
  lang?: "en" | "kr";
  children?: React.ReactNode;
  useClose?: boolean;
  onCloseClick?: () => void;
}

export default function Modal({
  isShow = true,
  rsp = "",
  lang = "en",
  children,
  useClose = true,
  onCloseClick,
}: Props) {
  return isShow ? (
    <div className={styles.dimmed}>
      {/* 모바일 상황 테스트 */}
      <div className={`${styles.modalWrapper} ${rsp === "m" && styles.m}`}>
        {useClose && (
          <div
            className={`${styles.close}`}
            onClick={() => {
              if (onCloseClick) {
                onCloseClick();
              }
            }}
          >
            <Image
              src="/img/icon/icon_close.png"
              alt="close"
              width={21}
              height={21}
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
