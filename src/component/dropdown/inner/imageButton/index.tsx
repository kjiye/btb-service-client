/* eslint-disable @next/next/no-img-element */
import { getNftList } from "@/api/fetch";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import React, { useContext, useEffect, useState } from "react";
import styles from "./dropdown-inner-imagebutton.module.scss";
import text from "../../../../text.json";
import { LangContext } from "@/context/lang.context";
import {
  IMAGE_SIZE,
  ProductCategoryDatasets,
  ProductCategoryItem,
} from "@/model/props";
import { NftItem } from "@/model/api";

interface Props {
  onSelectNft: (data: any) => void;
}

export default function DropdownImageButtonList({ onSelectNft }: Props) {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [categoryList, setCategoryList] = useState<ProductCategoryItem[]>(
    ProductCategoryDatasets
  );
  const [nftDisplayList, setNftDisplayList] = useState<NftItem[]>([]);

  const onChangeCategory = async (selected: number) => {
    setCategoryList(
      categoryList.map((v: ProductCategoryItem) => {
        return {
          ...v,
          selected: v.id === selected ? !v.selected : false,
        };
      })
    );
  };

  const getList = async () => {
    const getResult = await getNftList(
      categoryList.find((v: ProductCategoryItem) => v.selected)?.id ||
        ProductCategoryDatasets[0].id
    );
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
        {categoryList.map((v: ProductCategoryItem) => (
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
        nftDisplayList.map((v: NftItem, i) => {
          const isAvailable = v.soldEdition < v.totalEdition;
          return (
            <div key={i.toString()} className={styles.itemWrapper}>
              <div>{`${v.title} / ${v.year} / ${textObj.product.price[lang]}: ${v.price} ${textObj.product.priceUnit[lang]} / ${textObj.product.type[lang]}: ${v.fileExtension} / ${textObj.product.dimension[lang]}: ${v.Dimension} / ${textObj.product.fileSize[lang]}: ${v.fileSize} / ${textObj.product.description[lang]}: ${v.description}`}</div>
              <img
                className={styles.thumbnail}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.thumbnailFilePath}${v.thumbnailFilename}`}
                alt={v.title}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                onClick={() => onSelectNft(v)}
              />
              <RoundedSingleButton
                name={
                  isAvailable
                    ? textObj.common.button.buy[lang]
                    : textObj.common.button.soldout[lang]
                }
                disabled={!isAvailable}
                onClick={() => onSelectNft(v)}
              />
            </div>
          );
        })
      ) : (
        <div>{textObj.common.msg.loading[lang]}</div>
      )}
    </div>
  );
}
