import RoundedSingleButton from "@/component/button/roundedSingleButton";
import Image from "next/image";
import { useState } from "react";
import styles from "./dropdown-inner-imagebutton.module.css";

// 카테고리
// 카테고리 내 설명, 이미지, 버튼리스트까지 모두 하나로
export default function DropdownImageButtonList() {
  const [categoryList, setCategoryList] = useState<any[]>([
    { id: 1, title: "ALL", selected: true },
    { id: 2, title: "2024", selected: false },
    { id: 3, title: "2023", selected: false },
  ]);

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
      <div className={styles.itemWrapper}>
        <div>
          description description description description description
          description description description description description
          description description description description description
        </div>
        <Image
          src="/img/thumb/nft/P3.png"
          alt="title"
          width={216}
          height={216}
        />
        <RoundedSingleButton
          name={"ButtonName"}
          onClick={() => {
            console.log("구매하기 클릭 시 지갑 연결 상태 확인");
          }}
        />
      </div>
      <div className={styles.itemWrapper}>
        <div>
          description description description description description
          description description description description description
          description description description description description
        </div>
        <Image
          src="/img/thumb/nft/P3.png"
          alt="title"
          width={216}
          height={216}
        />
        <RoundedSingleButton
          name={"ButtonName"}
          onClick={() => {
            console.log("구매하기 클릭 시 지갑 연결 상태 확인");
          }}
        />
      </div>
    </div>
  );
}
