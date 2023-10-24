import { LangContext } from "@/context/lang.context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import RoundedSingleButton from "../button/roundedSingleButton";
import User from "../user";
import styles from "./drawer.module.css";
import text from "../../text.json";
import { DropdownItem, ICON_SIZE_SMALL, LanguageType } from "@/model/props";

interface Props {
  active: boolean;
  lang: LanguageType;
  dropdownList: DropdownItem[];
  onSelected: (selected: number) => void;
  isShowDrawer: boolean;
  onCloseClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLoginClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLogoutClick: (event?: React.MouseEvent<HTMLElement>) => void;
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
  const en = textObj.util.language.title.en;
  const enSml = en.toLowerCase();
  const kr = textObj.util.language.title.kr;
  const krSml = kr.toLowerCase();

  return (
    <div className={`${styles.wrapper} ${!isShowDrawer && styles.hide}`}>
      <div className={styles.close} onClick={onCloseClick}>
        <Image
          src="/img/icon/icon_close.png"
          alt="close icon"
          width={ICON_SIZE_SMALL}
          height={ICON_SIZE_SMALL}
        />
      </div>
      <div>
        <Link href="/">{textObj.logo.title}</Link>
      </div>
      {dropdownList.map((v: DropdownItem) => (
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
          {textObj.util.login.title}
        </div>
      )}
      <div
        className={`${styles.menu} ${
          lang === enSml ? styles.activeText : styles.inactiveText
        }`}
        onClick={() => dispatch({ type: enSml })}
      >
        {en}
      </div>
      <div
        className={`${styles.menu} ${
          lang === krSml ? styles.activeText : styles.inactiveText
        }`}
        onClick={() => dispatch({ type: krSml })}
      >
        {kr}
      </div>
      {active && (
        <>
          <div
            className={`${styles.menu}`}
            onClick={() => setIsShowUser(!isShowUser)}
          >
            <Image
              src="/img/icon/icon_user.png"
              alt="user information icon"
              width={ICON_SIZE_SMALL}
              height={ICON_SIZE_SMALL}
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
