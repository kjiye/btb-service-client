import { textBundle } from "@/util/format.util";
import styles from "./loading.module.scss";
import Image from "next/image";
import { ICON_SIZE_LARGE, LoadingViewType } from "@/model/props";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";

interface Props {
  type?: LoadingViewType;
}

export default function Loading({ type = "text" }: Props) {
  const {
    state: { lang },
  } = useContext(LangContext);

  return type === "text" ? (
    <div className={`${styles.textWrapper}`}>
      {textBundle().common.msg.loading[lang]}
    </div>
  ) : (
    <div className={`${styles.dimmedWrapper}`}>
      <Image
        src="/img/icon/loading.gif"
        alt="loading icon"
        width={ICON_SIZE_LARGE}
        height={ICON_SIZE_LARGE}
        className={styles.icon}
      />
    </div>
  );
}
