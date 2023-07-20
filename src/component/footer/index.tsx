import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  isTabletBelow?: boolean;
  rsp?: string;
  lang?: string;
}

export default function Footer({
  isTabletBelow = false,
  rsp = "",
  lang = "en",
}) {
  return (
    <footer className={rsp}>
      <ul className={`footerWrapper ${rsp}`}>
        <li className={`footerItem ${rsp}`}>
          (C) 2023. birthplace/goyoson all rights reserved.
        </li>
        <li className={`footerItem ${rsp}`}>
          beyondthebirthplace.kr@gmail.com
        </li>
        <li className={`footerItem ${rsp}`}>beyondthebirthplace.kr</li>
        <li className={`footerItem ${rsp}`}>
          <Link href="#">Instagram</Link>
        </li>
        <li className={`footerItem ${rsp}`}>Terms and conditions</li>
        <li className={`footerItem ${rsp}`}>Privacy Policy</li>
      </ul>
    </footer>
  );
}
