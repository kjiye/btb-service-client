import { LangContext } from "@/context/lang.context";
import Link from "next/link";
import { useContext } from "react";
import text from "../../text.json";
import styles from "./footer.module.css";

interface Props {
  isTabletBelow?: boolean;
  rsp?: string;
  onSelectTerms: (selected: "terms" | "privacy") => void;
}

export default function Footer({
  isTabletBelow = false,
  rsp = "",
  onSelectTerms,
}: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <footer className={rsp}>
      <ul className={`footerWrapper ${rsp}`}>
        <li className={`footerItem ${rsp}`}>
          (C) 2023. birthplace/goyoson all rights reserved.
        </li>
        <li className={`footerItem ${rsp} ${styles.click}`}>
          <Link href={"mailto:beyondthebirthplace.kr@gmail.com"}>
            beyondthebirthplace.kr@gmail.com
          </Link>
        </li>
        {/* <li className={`footerItem ${rsp}`}>beyondthebirthplace.kr</li> */}
        <li className={`footerItem ${rsp}`}>
          <Link href="https://www.instagram.com/birthplace_goyoson/">
            {textObj.footer.instagram.title[lang]}
          </Link>
        </li>
        <li
          className={`footerItem ${rsp} ${styles.click}`}
          onClick={() => {
            onSelectTerms("terms");
          }}
        >
          {textObj.footer.terms.title[lang]}
        </li>
        <li
          className={`footerItem ${rsp} ${styles.click}`}
          onClick={() => {
            onSelectTerms("privacy");
          }}
        >
          {textObj.footer.privacy.title[lang]}
        </li>
      </ul>
    </footer>
  );
}
