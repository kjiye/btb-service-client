import { getUserInfo, getNftDetail } from "@/api/fetch";
import { Suspense, useContext, useEffect, useState } from "react";
import Modal from "@/component/modal";
import styles from "./modal-nftdetailmodal.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ModelRenderer from "./modelrenderer";
import { modelScaleMatch } from "@/util/format.util";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { checkIsWalletConnected, getUserSession } from "@/util/session.util";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";
import * as THREE from "three";
import { NftItem, NftOrderItem } from "@/model/api";
import NftDetailModalContainer from "./nftdetailmodal.container";

const CAMERA_SETTING = {
  position: new THREE.Vector3(0, 0, -0.3),
  near: 0.1,
  far: 10,
};

interface Props {
  rsp?: string;
  lang?: string;
  isShow?: boolean;
  onCloseClick: () => void;
  onConnectWallet: () => void;
  onBuyClick: (data: NftItem) => void;
  data?: any;
}

/*
export default function NftDetailModal({
  rsp = "",
  isShow,
  onCloseClick,
  onConnectWallet,
  onBuyClick,
  data,
}: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isShowDownload, setIsShowDownload] = useState<boolean>(false);

  const isConnected = !!getUserSession();

  const getData = async (artworkId: number, checkUser: boolean) => {
    const recentData: NftItem = await getNftDetail(artworkId);
    if (checkUser) {
      const res = await getUserInfo();
      if (res.success && res?.data?.nftOrder && res.data.nftOrder.length > 0) {
        const {
          data: { nftOrder },
        } = res;
        const nfts = nftOrder.map((v: NftOrderItem) => {
          if (v.nftId && v.paymentStatusId === 2) {
            return v.nftId;
          }
        });
        nfts.length > 0 && setIsShowDownload(nfts.includes(artworkId));
      }
    }
    if (recentData) {
      const { soldEdition, totalEdition } = recentData;
      setIsAvailable(soldEdition < totalEdition);
    } else {
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    if (data?.id) {
      getData(data.id, isConnected);
    }
  }, [data?.id, isConnected]);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={() => onCloseClick()}>
      {data ? (
        <>
          {isAvailable ? (
            <div className={styles.status}>
              {textObj.payment.confirm.msg[lang]}
            </div>
          ) : (
            <div className={styles.status}>
              {textObj.common.msg.soldout[lang]}
            </div>
          )}
          <div>{`${data.title} / ${data.year} / ${textObj.product.price[lang]}: ${data.price} ${textObj.product.priceUnit[lang]} / ${textObj.product.type[lang]}: ${data.fileExtension} / ${textObj.product.dimension[lang]}: ${data.Dimension} /  ${textObj.product.dimension[lang]}: ${data.description}`}</div>
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
                    ? `${textObj.common.button.confirmPurchase[lang]}`
                    : isShowDownload
                    ? `${textObj.common.button.glbDownload[lang]}`
                    : `${textObj.common.button.soldout[lang]}`
                }
                disabled={!isAvailable && !isShowDownload}
                onClick={() => {
                  if (!isAvailable && isShowDownload) {
                    window.open(
                      `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.originFilePath}${data.originFilename}`
                    );
                  } else {
                    checkIsWalletConnected()
                      ? onBuyClick(data)
                      : onConnectWallet();
                  }
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <div>{textObj.common.msg.loading[lang]}</div>
      )}
    </Modal>
  );
}
*/

export default NftDetailModalContainer;
