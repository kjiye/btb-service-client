import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { NftItem } from "@/model/api";
import { DeviceType, LanguageType } from "@/model/props";
import { modelScaleMatch } from "@/util/format.util";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Modal from "@/component/modal";
import ModelRenderer from "@/component/modal/nftDetailModal/modelrenderer";
import styles from "./modal-nftdetailmodal.module.css";
import * as THREE from "three";

const CAMERA_SETTING = {
  position: new THREE.Vector3(0, 0, -0.3),
  near: 0.1,
  far: 10,
};

interface Props {
  rsp: DeviceType;
  lang: LanguageType;
  data?: NftItem;
  isShow: boolean;
  isAvailable: boolean;
  isShowDownload: boolean;
  text: Record<string, any>;
  onButtonClick: () => void;
  onCloseClick: () => void;
}

export default function NftDetailModalPresenter({
  rsp,
  lang,
  data,
  isShow,
  isAvailable,
  isShowDownload,
  text,
  onButtonClick,
  onCloseClick,
}: Props) {
  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={onCloseClick}>
      {data ? (
        <>
          {isAvailable ? (
            <div className={styles.status}>
              {text.payment.confirm.msg[lang]}
            </div>
          ) : (
            <div className={styles.status}>{text.common.msg.soldout[lang]}</div>
          )}
          <div>{`${data.title} / ${data.year} / ${text.product.price[lang]}: ${data.price} ${text.product.priceUnit[lang]} / ${text.product.type[lang]}: ${data.fileExtension} / ${text.product.dimension[lang]}: ${data.Dimension} /  ${text.product.dimension[lang]}: ${data.description}`}</div>
          <div className={`${styles.modelWrapper} ${styles[rsp]}`}>
            <Canvas camera={CAMERA_SETTING}>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 0]} />
              <Suspense>
                <ModelRenderer
                  url={`/img/glb/${data.thumbnailFilename.replace(
                    "png",
                    "glb"
                  )}`}
                  scale={modelScaleMatch(data.id)}
                />
              </Suspense>
              <OrbitControls enableDamping={true} />
            </Canvas>
            <div className={`${styles.bottom}`}>
              <RoundedSingleButton
                name={
                  isAvailable
                    ? `${text.common.button.confirmPurchase[lang]}`
                    : isShowDownload
                    ? `${text.common.button.glbDownload[lang]}`
                    : `${text.common.button.soldout[lang]}`
                }
                disabled={!isAvailable && !isShowDownload}
                onClick={() => {
                  if (!isAvailable && isShowDownload) {
                    window.open(
                      `${
                        process.env.NEXT_PUBLIC_IMAGE_URL +
                        data.originFilePath +
                        data.originFilename
                      }`
                    );
                  } else {
                    onButtonClick();
                  }
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <div>{text.common.msg.loading[lang]}</div>
      )}
    </Modal>
  );
}
