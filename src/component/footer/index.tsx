import { LangContext } from "@/context/lang.context";
import { SelectTermsType } from "@/model/props";
import Link from "next/link";
import { useContext } from "react";
import text from "../../text.json";
import styles from "./footer.module.scss";

interface Props {
  rsp?: string;
  onSelectTerms: (selected: SelectTermsType) => void;
}

export default function Footer({ rsp = "", onSelectTerms }: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <footer className={`${styles.footerContainer} ${styles[rsp]}`}>
      <ul className={`${styles.footerWrapper} ${styles[rsp]}`}>
        <li className={`${styles[rsp]}`}>
          {textObj.footer.copyright.content[lang]}
        </li>
        <li className={`${styles[rsp]} ${styles.clickable}`}>
          <Link href={`mailto:${textObj.footer.email.content[lang]}`}>
            {textObj.footer.email.content[lang]}
          </Link>
        </li>
        <li className={`${styles[rsp]}`}>
          <Link href={`${textObj.footer.instagram.content[lang]}`}>
            {textObj.footer.instagram.title[lang]}
          </Link>
        </li>
        <li
          className={`${styles[rsp]} ${styles.clickable}`}
          onClick={() => {
            onSelectTerms("terms");
          }}
        >
          {textObj.footer.terms.title[lang]}
        </li>
        <li
          className={`${styles[rsp]} ${styles.clickable}`}
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
