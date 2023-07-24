import { getUserInfo, nftDetail } from "@/api/fetch";
import { Suspense, useContext, useEffect, useState } from "react";
import Modal from "@/component/modal";
import styles from "./modal-nftdetailmodal.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ModelRender from "./model";
import { modelScaleMatch } from "@/util/format.util";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { checkIsWalletConnected, getUserSession } from "@/util/session.util";
import text from "../../../text.json";
import { LangContext } from "@/context/lang.context";

const CAMERA_SETTING = { position: [0, 0, -0.26], near: 0.1, far: 10 };

interface Props {
  rsp?: string;
  lang?: string;
  isShow?: boolean;
  onCloseClick: () => void;
  onConnectWallet: () => void;
  onBuyClick: (data: any) => void;
  data?: any;
}

// 선택된 데이터 넘겨오기
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
  const [isConnected, setIsConnected] = useState<boolean>(!!getUserSession());
  const [isShowDownload, setIsShowDownload] = useState<boolean>(false);

  // 디테일 새 정보 한번 더 당겨오기
  // 공통 : glb, 작품 정보
  // 판매 완료 시 : etherscan, owner, soldout 표시
  // 판매 전일 시 : 구매하기 버튼 추가
  const getData = async (artworkId: number, checkUser: boolean) => {
    const recentData = await nftDetail(artworkId);
    //.nft.id
    if (checkUser) {
      const res = await getUserInfo();
      if (res.success && res?.data?.nftOrder && res.data.nftOrder.length > 0) {
        const {
          data: { nftOrder },
        } = res;
        const nfts = nftOrder.map((v: any) => {
          if (v.nftId && v.paymentStatusId === 2) {
            return v.nftId;
          }
        });
        if (nfts.length > 0) {
          setIsShowDownload(nfts.includes(artworkId));
        }
      }
    }
    if (recentData) {
      const { soldEdition, totalEdition } = recentData;
      setIsAvailable(soldEdition < totalEdition);
    } else {
      // 신규 데이터 불러오지 못했을 때 임시로 sold out 처리
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    if (data?.id) {
      console.log("....");
      console.log(data);
      getData(data.id, isConnected);
    }
  }, [data?.id, isConnected]);

  return (
    <Modal rsp={rsp} isShow={isShow} onCloseClick={() => onCloseClick()}>
      {data ? (
        <>
          {isAvailable ? (
            <div className={styles.status}>
              Would you like to purchase the artwork?
            </div>
          ) : (
            <div className={styles.status}>SOLD OUT</div>
          )}
          {/* sold out 중에서 구매가 완료된 내역에 한하여 (tokenId있는거) etherscan url 표시 */}
          <div>{`${data.title} / ${data.year} / Price: ${data.price} ETH / Type: ${data.fileExtension} / Dimension: ${data.Dimension} / Description: ${data.description}`}</div>
          {/* glb render */}
          <div className={`${styles.modelWrapper} ${rsp === "m" && styles.m}`}>
            <Canvas camera={CAMERA_SETTING}>
              {/* <ambientLight intensity={0.5} /> */}
              <ambientLight intensity={1} />
              {/* 스팟라이트 빼야 모델이 더 잘 보임 */}
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              {/* <pointLight position={[2, 2, 0]} /> */}
              <pointLight position={[10, 10, 0]} />
              <Suspense>
                <ModelRender
                  url={`/img/glb/${data.thumbnailFilename.replace(
                    "png",
                    "glb"
                  )}`}
                  scale={modelScaleMatch(data.id)}
                />
              </Suspense>
              <OrbitControls enableDamping={true} />
              {/* <Stats /> */}
            </Canvas>
            <div className={`${styles.bottom}`}>
              {/* 지갑이 연결되어 있으면서 내 구매내역과 일치할 때는 원본파일 다운로드 */}
              <RoundedSingleButton
                name={
                  isAvailable
                    ? `${textObj.common.button.confirmPurchase[lang]}`
                    : isShowDownload
                    ? `${textObj.common.button.glbDownload[lang]}`
                    : "SOLD OUT"
                }
                // 여기 수정
                disabled={!isAvailable && !isShowDownload}
                onClick={async () => {
                  if (!isAvailable && isShowDownload) {
                    window.open(
                      `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.originFilePath}${data.originFilename}`
                    );
                  } else {
                    if (checkIsWalletConnected()) {
                      onBuyClick(data);
                    } else {
                      // 지갑 연결 선택 모달 띄우기
                      onConnectWallet();
                    }
                  }
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </Modal>
  );
}
