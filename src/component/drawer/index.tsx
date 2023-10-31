import { LangContext } from "@/context/lang.context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import User from "@/component/user";
import styles from "./drawer.module.scss";
import { DropdownItem, LanguageType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import { theme } from "../../../tailwind.config";

interface Props {
  active: boolean;
  lang: LanguageType;
  dropdownList: DropdownItem[];
  onSelected: (selected: number) => void;
  isShow: boolean;
  onCloseClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLoginClick: (event?: React.MouseEvent<HTMLElement>) => void;
  onLogoutClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default function DrawerMenu({
  active,
  lang,
  dropdownList,
  onSelected,
  isShow,
  onCloseClick,
  onLoginClick,
  onLogoutClick,
}: Props) {
  const { dispatch } = useContext(LangContext);
  const [isShowUser, setIsShowUser] = useState<boolean>(false);

  const text = textBundle();
  const { en, kr } = text.util.language.title;
  const enSml = en.toLowerCase();
  const krSml = kr.toLowerCase();

  return (
    <div className={`${styles.wrapper} ${!isShow && styles.hide}`}>
      <div className={styles.close} onClick={onCloseClick}>
        <Image
          src="/img/icon/icon_close.png"
          alt="close icon"
          width={theme?.extend?.size[`icon-sm`]}
          height={theme?.extend?.size[`icon-sm`]}
        />
      </div>
      <div>
        <Link href="/">{text.logo.title}</Link>
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
          {text.util.login.title}
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
              width={theme?.extend?.size[`icon-sm`]}
              height={theme?.extend?.size[`icon-sm`]}
            />
          </div>
          {isShowUser && (
            <div className={styles.userBtnWrapper}>
              <User />
              <RoundedSingleButton
                name={text.common.button.logout[lang]}
                type={"responsive"}
                onClick={() => onLogoutClick()}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
