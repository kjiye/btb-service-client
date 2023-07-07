import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import styles from "./header.module.css";

export default function Header() {
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
    <header className={`${device()}`}>
      <div className={styles.flexRowBtw}>
        <div className={`${styles.btnContainer}`}>
          <Link href="#" className={`${styles.btn}`}>
            Beyond the Birthplace
          </Link>
        </div>
        {!isMobile ? (
          <div className={`${styles.btnContainer} ${styles.flexRowBtw}`}>
            <button className={`${styles.btn}`}>Log in</button>
            <div className={`${styles.btn}`}>
              <button>EN</button>
              <span> / </span>
              <button>KR</button>
            </div>
          </div>
        ) : (
          <button className={styles.hamburger}>
            <Image
              src="/img/icon/icon_hamburger.png"
              alt={"menu"}
              width="40"
              height="40"
            />
          </button>
        )}
      </div>
    </header>
  );
}
