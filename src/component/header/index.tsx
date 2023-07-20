import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

interface Props {
  isTabletBelow?: boolean;
  rsp?: string;
  lang?: string;
}

// 다국어 기능 추가하기
export default function Header({
  isTabletBelow = false,
  rsp = "",
  lang = "en",
}: Props) {
  return (
    <header className={rsp}>
      <div className={`flexRowBtw`}>
        <div>
          <Link href="#" className={`${styles.btn}`}>
            Beyond the Birthplace
          </Link>
        </div>
        {isTabletBelow ? (
          <button className={styles.hamburger}>
            <Image
              src="/img/icon/icon_hamburger.png"
              alt={"mobile menu button"}
              width="40"
              height="40"
            />
          </button>
        ) : (
          <div className={`${styles.btnContainer} flexRowBtw`}>
            <button className={`${styles.btn}`}>Log in</button>
            <div className={`${styles.btn}`}>
              <button>EN</button>
              <span> / </span>
              <button>KR</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
