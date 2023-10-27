/* eslint-disable @next/next/no-img-element */
import styles from "./model-processmodal.module.scss";
import Modal from "@/component/modal";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";
import { useContext } from "react";
import { IMAGE_SIZE, ProcessModalType } from "@/model/props";

interface Props {
  rsp?: string;
  lang?: string;
  isShow?: boolean;
  data?: any;
  type: ProcessModalType;
  onCloseClick: () => void;
}

export default function ProcessModal({
  rsp = "",
  isShow,
  data,
  type,
  onCloseClick,
}: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);
  return (
    <Modal rsp={rsp} isShow={isShow} useClose={false}>
      {data ? (
        type === "process" ? (
          <>
            <div>{textObj.payment.process.msg[lang]}</div>
            <div>{textObj.payment.process.sub[lang]}</div>
            <img
              className={`${styles.thumbnail} ${rsp === "m" && styles.m}`}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.thumbnailFilePath}${data.thumbnailFilename}`}
              alt={data.title}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </>
        ) : (
          <>
            <div>{textObj.payment.complete[lang]}</div>
            <div>{`${data.title} / ${data.year} / Price: ${data.price} ETH / Type: ${data.fileExtension} / Dimension: ${data.Dimension} / Description: ${data.description}`}</div>
            <img
              className={`${styles.thumbnail} ${rsp === "m" && styles.m}`}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.thumbnailFilePath}${data.thumbnailFilename}`}
              alt={data.title}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
            <div className={`${styles.bottom}`}>
              <RoundedSingleButton
                name={"OK"}
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
