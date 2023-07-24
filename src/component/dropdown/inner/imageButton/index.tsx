/* eslint-disable @next/next/no-img-element */
import { nftList } from "@/api/fetch";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import { checkIsWalletConnected } from "@/util/session.util";
import React, { useEffect, useState } from "react";
import styles from "./dropdown-inner-imagebutton.module.css";

interface Props {
  onSelectNft: (data: any) => void;
  onConnectWallet: () => void;
  onBuyClick: (data: any) => void;
}

export default function DropdownImageButtonList({
  onSelectNft,
  onConnectWallet,
  onBuyClick,
}: Props) {
  const [categoryList, setCategoryList] = useState<any[]>([
    { id: 1, title: "ALL", selected: true },
    { id: 2, title: "2023", selected: false },
  ]);
  const [nftDisplayList, setNftDisplayList] = useState<any[]>([]);

  const onChangeCategory = async (selected: number) => {
    setCategoryList(
      categoryList.map((v) => {
        return {
          ...v,
          selected: v.id === selected ? !v.selected : false,
        };
      })
    );
  };

  const getList = async () => {
    const getResult = await nftList(categoryList.find((v) => v.selected)?.id);
    // 지갑 연결 시 내 정보 매칭도 추가
    if (getResult.success && getResult.data) {
      const {
        data: { nftList },
      } = getResult;
      setNftDisplayList(nftList);
    } else {
      setNftDisplayList([]);
    }
  };

  // 모달 사라질 때도 실행 필요
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.container}>
      {/* 가로 카테고리 리스트 */}
      <div className={`flexRow`}>
        {categoryList.map((v) => (
          <span
            key={v.id}
            className={`${styles.cateItem} ${
              v.selected ? styles.selected : styles.unselected
            }`}
            onClick={() => {
              onChangeCategory(v.id);
            }}
          >
            {v.title}
          </span>
        ))}
      </div>
      {/* 카테고리 하단 리스트 */}
      {nftDisplayList.length > 0 ? (
        nftDisplayList.map((v, i) => {
          const isAvailable = v.soldEdition < v.totalEdition;
          return (
            <div key={i.toString()} className={styles.itemWrapper}>
              <div>{`${v.title} / ${v.year} / Price: ${v.price} ETH / Type: ${v.fileExtension} / Dimension: ${v.Dimension} / Description: ${v.description}`}</div>
              <img
                className={styles.thumbnail}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.thumbnailFilePath}${v.thumbnailFilename}`}
                alt={v.title}
                width={216}
                height={216}
                onClick={() => {
                  onSelectNft(v);
                }}
              />
              {/* 지갑이 연결되어 있으면서 내 구매 내역과 일치할 때는 GLB DOWNLOAD 버튼 */}
              <RoundedSingleButton
                name={isAvailable ? "BUY" : "SOLD OUT"}
                disabled={!isAvailable}
                onClick={() => {
                  if (checkIsWalletConnected()) {
                    onBuyClick(v);
                  } else {
                    onConnectWallet();
                  }
                }}
              />
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
