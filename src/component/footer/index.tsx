import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1280px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:768px)",
  });

  const device = (className?: string) => {
    className = className || "";
    if (isDesktop) return className;
    if (isTablet) return className + " t";
    if (isMobile) return className + " m";
    return className;
  };

  return (
    <footer className={`${device()}`}>
      <ul className={`${device("listWrapper")}`}>
        <li className={`${device("list")}`}>
          (C) 2023. birthplace/goyoson all rights reserved.
        </li>
        <li className={`${device("list")}`}>
          beyondthebirthplace.kr@gmail.com
        </li>
        <li className={`${device("list")}`}>beyondthebirthplace.kr</li>
        <li className={`${device("list")}`}>
          <Link href="#">Instagram</Link>
        </li>
        <li className={`${device("list")}`}>Terms and conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  );
}
