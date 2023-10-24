import { LangContext } from "@/context/lang.context";
import { DeviceType, ICON_SIZE_LARGE, LanguageType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./header.module.scss";
// import text from "../../text.json";

interface Props {
  active: boolean;
  isTabletBelow?: boolean;
  rsp?: DeviceType;
  lang?: LanguageType;
  onMenuClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLoginClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function Header({
  active,
  isTabletBelow = false,
  rsp = "",
  lang = "en",
  onMenuClick,
  onLoginClick,
}: Props) {
  const { dispatch } = useContext(LangContext);

  const text = textBundle();
  const en = text.util.language.title.en;
  const kr = text.util.language.title.kr;

  return (
    <header className={`${styles.headerContainer} ${styles[rsp]}`}>
      <div className={`flexRowBtw`}>
        <div>
          <Link href="/" className={`${styles.btn}`}>
            {text.logo.title}
          </Link>
        </div>
        <>
          {isTabletBelow ? (
            <button className={styles.hamburger} onClick={onMenuClick}>
              <Image
                src="/img/icon/icon_hamburger.png"
                alt={"mobile menu button"}
                width={ICON_SIZE_LARGE}
                height={ICON_SIZE_LARGE}
              />
            </button>
          ) : (
            <div className={`${styles.btnContainer} flexRowBtw`}>
              {/* 지갑이 연동된 상태일 때는 표시되지 않음 */}
              {!active && (
                <button
                  className={`${styles.btn}`}
                  onClick={() => onLoginClick()}
                >
                  {text.util.login.title}
                </button>
              )}
              <div className={`${styles.btn}`}>
                <button
                  className={`${
                    lang === en.toLowerCase()
                      ? styles.activeText
                      : styles.inactiveText
                  }`}
                  onClick={() => {
                    dispatch({ type: en.toLowerCase() });
                  }}
                >
                  {en}
                </button>
                <span> / </span>
                <button
                  className={`${
                    lang === kr.toLowerCase()
                      ? styles.activeText
                      : styles.inactiveText
                  }`}
                  onClick={() => {
                    dispatch({ type: kr.toLowerCase() });
                  }}
                >
                  {kr}
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    </header>
  );
}
