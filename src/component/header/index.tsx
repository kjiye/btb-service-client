import { LangContext } from "@/context/lang.context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styles from "./header.module.css";

interface Props {
  active: boolean;
  isTabletBelow?: boolean;
  rsp?: string;
  lang?: string;
  onMenuClick: () => void;
  onLoginClick: () => void;
}

// 다국어 기능 추가하기
export default function Header({
  active,
  isTabletBelow = false,
  rsp = "",
  lang = "en",
  onMenuClick,
  onLoginClick,
}: Props) {
  const { dispatch } = useContext(LangContext);

  return (
    <header className={rsp}>
      <div className={`flexRowBtw`}>
        <div>
          <Link href="/" className={`${styles.btn}`}>
            Beyond the Birthplace
          </Link>
        </div>
        {isTabletBelow ? (
          <button className={styles.hamburger} onClick={onMenuClick}>
            <Image
              src="/img/icon/icon_hamburger.png"
              alt={"mobile menu button"}
              width="40"
              height="40"
            />
          </button>
        ) : (
          <div className={`${styles.btnContainer} flexRowBtw`}>
            {/* 지갑 연결이 되어있을 땐 표시되지 않는다 */}
            {!active && (
              <button
                className={`${styles.btn}`}
                onClick={() => onLoginClick()}
              >
                Log in
              </button>
            )}
            <div className={`${styles.btn}`}>
              <button
                className={`${
                  lang === "en" ? styles.activeText : styles.inactiveText
                }`}
                onClick={() => {
                  dispatch({ type: "en" });
                }}
              >
                EN
              </button>
              <span> / </span>
              <button
                className={`${
                  lang === "kr" ? styles.activeText : styles.inactiveText
                }`}
                onClick={() => {
                  dispatch({ type: "kr" });
                }}
              >
                KR
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
