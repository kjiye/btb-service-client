/* eslint-disable @next/next/no-img-element */
import styles from "./model-processmodal.module.scss";
import Modal from "@/component/modal";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";
import { ProcessModalType } from "@/model/props";
import { NftItem } from "@/model/api";
import { textBundle } from "@/util/format.util";
import { theme } from "../../../../tailwind.config";

interface Props {
  rsp?: string;
  lang?: string;
  isShow?: boolean;
  data?: NftItem;
  type: ProcessModalType;
}

export default function ProcessModal({ rsp = "", isShow, data, type }: Props) {
  const text = textBundle();
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <Modal rsp={rsp} isShow={isShow} useClose={false}>
      {data ? (
        type === "process" ? (
          <>
            <div>{text.payment.process.msg[lang]}</div>
            <div>{text.payment.process.sub[lang]}</div>
            <img
              className={`${styles.thumbnail} ${styles[rsp]}`}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.thumbnailFilePath}${data.thumbnailFilename}`}
              alt={data.title}
              width={theme?.extend?.size[`img-md`]}
              height={theme?.extend?.size[`img-md`]}
            />
          </>
        ) : (
          <>
            <div>{text.payment.complete[lang]}</div>
            <div>{`${data.title} / ${data.year} / ${text.product.price[lang]}: ${data.price} ${text.product.priceUnit[lang]} / Type: ${data.fileExtension} / ${text.product.dimension[lang]}: ${data.Dimension} / ${text.product.description[lang]}: ${data.description}`}</div>
            <img
              className={`${styles.thumbnail} ${styles[rsp]}`}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.thumbnailFilePath}${data.thumbnailFilename}`}
              alt={data.title}
              width={theme?.extend?.size[`img-md`]}
              height={theme?.extend?.size[`img-md`]}
            />
            <div className={`${styles.bottom}`}>
              <RoundedSingleButton
                name={text.common.button.ok[lang]}
                disabled={false}
                onClick={() => {
                  typeof window !== "undefined" && window.location.reload();
                }}
              />
            </div>
          </>
        )
      ) : (
        <></>
      )}
    </Modal>
  );
}
