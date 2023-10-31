/* eslint-disable @next/next/no-img-element */
import { getNftList } from "@/api/fetch";
import RoundedSingleButton from "@/component/button/roundedSingleButton";
import React, { useContext, useEffect, useState } from "react";
import styles from "./dropdown-inner-imagebutton.module.scss";
import { LangContext } from "@/context/lang.context";
import { ProductCategoryDatasets, ProductCategoryItem } from "@/model/props";
import { NftItem } from "@/model/api";
import { textBundle } from "@/util/format.util";
import { theme } from "../../../../../tailwind.config";

interface Props {
  onSelectNft: (data: NftItem) => void;
}

export default function DropdownImageButtonList({ onSelectNft }: Props) {
  const text = textBundle();

  console.log(theme?.extend?.size[`img-md`]);
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
    if (getResult.success && getResult.data) {
      const {
        data: { nftList },
      } = getResult;
      setNftDisplayList(nftList);
    } else {
      setNftDisplayList([]);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.container}>
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
      {nftDisplayList.length > 0 ? (
        nftDisplayList.map((v: NftItem, i) => {
          const isAvailable = v.soldEdition < v.totalEdition;
          return (
            <div key={i.toString()} className={styles.itemWrapper}>
              <div>{`${v.title} / ${v.year} / ${text.product.price[lang]}: ${v.price} ${text.product.priceUnit[lang]} / ${text.product.type[lang]}: ${v.fileExtension} / ${text.product.dimension[lang]}: ${v.Dimension} / ${text.product.fileSize[lang]}: ${v.fileSize} / ${text.product.description[lang]}: ${v.description}`}</div>
              <img
                className={styles.thumbnail}
                src={`${
                  process.env.NEXT_PUBLIC_IMAGE_URL +
                  v.thumbnailFilePath +
                  v.thumbnailFilename
                }`}
                alt={v.title}
                width={theme?.extend?.size[`img-md`]}
                height={theme?.extend?.size[`img-md`]}
                onClick={() => onSelectNft(v)}
              />
              <RoundedSingleButton
                name={
                  isAvailable
                    ? text.common.button.buy[lang]
                    : text.common.button.soldout[lang]
                }
                disabled={!isAvailable}
                onClick={() => onSelectNft(v)}
              />
            </div>
          );
        })
      ) : (
        <div>{text.common.msg.loading[lang]}</div>
      )}
    </div>
  );
}
