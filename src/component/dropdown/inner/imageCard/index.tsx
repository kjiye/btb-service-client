/* eslint-disable @next/next/no-img-element */
import { mapList, viewCount } from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { useContext, useEffect, useState } from "react";
import styles from "./dropdown-inner-imagecard.module.css";

// MapList에 해당하는 페이지
// 서버에서 리스트 불러와서 출력하기
export default function DrodownImageCardList() {
  const {
    state: { lang },
  } = useContext(LangContext);

  const [list, setList] = useState<any[]>([]);
  const getList = async () => {
    const res = await mapList();
    if (res.success && res.data) {
      const { data } = res;
      setList(data);
    }
  };

  const updateViewCount = async (mapId: number, url: string) => {
    await viewCount(mapId);
    if (url) {
      window.open(url);
    }
    return;
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.listWrapper}>
        <>
          {list && list.length > 0 ? (
            list.map((v, i) => {
              return (
                <div key={i.toString()} className={styles.listItem}>
                  <img
                    className={styles.img}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.thumbnailFilePath}${v.thumbnailFilename}`}
                    alt={v.nameEn}
                    onClick={() => {
                      updateViewCount(v.id, v.url);
                    }}
                  />
                  <div className={styles.name}>
                    {lang === "en" ? v.nameEn : v.nameKr}
                  </div>
                </div>
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </>
        <div className={styles.listItem}></div>
      </div>
    </div>
  );
}
