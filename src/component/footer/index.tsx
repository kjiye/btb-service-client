import { LangContext } from "@/context/lang.context";
import { SelectTermsType } from "@/model/props";
import { textBundle } from "@/util/format.util";
import Link from "next/link";
import { useContext } from "react";
import styles from "./footer.module.scss";

interface Props {
  rsp?: string;
  onSelectTerms: (selected: SelectTermsType) => void;
}

export default function Footer({ rsp = "", onSelectTerms }: Props) {
  const text = textBundle();
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <footer className={`${styles.footerContainer} ${styles[rsp]}`}>
      <ul className={`${styles.footerWrapper} ${styles[rsp]}`}>
        <li className={`${styles[rsp]}`}>
          {text.footer.copyright.content[lang]}
        </li>
        <li className={`${styles[rsp]} ${styles.clickable}`}>
          <Link href={`mailto:${text.footer.email.content[lang]}`}>
            {text.footer.email.content[lang]}
          </Link>
        </li>
        <li className={`${styles[rsp]}`}>
          <Link href={`${text.footer.instagram.content[lang]}`}>
            {text.footer.instagram.title[lang]}
          </Link>
        </li>
        <li
          className={`${styles[rsp]} ${styles.clickable}`}
          onClick={() => {
            onSelectTerms("terms");
          }}
        >
          {text.footer.terms.title[lang]}
        </li>
        <li
          className={`${styles[rsp]} ${styles.clickable}`}
          onClick={() => {
            onSelectTerms("privacy");
          }}
        >
          {text.footer.privacy.title[lang]}
        </li>
      </ul>
    </footer>
  );
}
