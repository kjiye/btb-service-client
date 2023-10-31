import { textBundle } from "@/util/format.util";
import styles from "./loading.module.scss";
import Image from "next/image";
import { LoadingViewType } from "@/model/props";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";
import { theme } from "../../../tailwind.config";

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
        width={theme?.extend?.size[`icon-lg`]}
        height={theme?.extend?.size[`icon-lg`]}
        className={styles.icon}
      />
    </div>
  );
}
