import { LangContext } from "@/context/lang.context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import RoundedSingleButton from "../button/roundedSingleButton";
import User from "../user";
import styles from "./drawer.module.css";
import text from "../../text.json";

interface Props {
  active: boolean;
  lang: string;
  dropdownList: any[];
  onSelected: (selected: number) => void;
  isShowDrawer: boolean;
  onCloseClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export default function DrawerMenu({
  active,
  lang,
  dropdownList,
  onSelected,
  isShowDrawer,
  onCloseClick,
  onLoginClick,
  onLogoutClick,
}: Props) {
  const { dispatch } = useContext(LangContext);
  const [isShowUser, setIsShowUser] = useState<boolean>(false);
  const textObj = Object(text);

  return (
    <div className={`${styles.wrapper} ${!isShowDrawer && styles.hide}`}>
      {/* close */}
      <div className={styles.close} onClick={onCloseClick}>
        <Image
          src="/img/icon/icon_close.png"
          alt="close"
          width={30}
          height={30}
        />
      </div>
      <div>
        <Link href="/">Beyond the Birthplace</Link>
      </div>
      {dropdownList.map((v) => (
        <div
          key={v.id}
          className={`${styles.menu}`}
          onClick={() => onSelected(v.id)}
        >
          {v.title}
        </div>
      ))}
      {!active && (
        <div className={`${styles.menu}`} onClick={() => onLoginClick()}>
          Log in
        </div>
      )}
      <div
        className={`${styles.menu} ${
          lang === "en" ? styles.activeText : styles.inactiveText
        }`}
        onClick={() => dispatch({ type: "en" })}
      >
        EN
      </div>
      <div
        className={`${styles.menu} ${
          lang === "kr" ? styles.activeText : styles.inactiveText
        }`}
        onClick={() => dispatch({ type: "kr" })}
      >
        KR
      </div>
      {active && (
        <>
          <div
            className={`${styles.menu}`}
            onClick={() => setIsShowUser(!isShowUser)}
          >
            <Image
              src="/img/icon/icon_user.png"
              alt="user"
              width={30}
              height={30}
            />
          </div>
          {isShowUser && (
            <>
              <User />
              <RoundedSingleButton
                name={textObj.common.button.logout[lang]}
                type={"responsive"}
                onClick={() => onLogoutClick()}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
