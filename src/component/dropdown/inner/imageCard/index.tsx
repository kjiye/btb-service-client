/* eslint-disable @next/next/no-img-element */
import { mapList, viewCount } from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { useContext, useEffect, useState } from "react";
import styles from "./dropdown-inner-imagecard.module.scss";
import text from "../../../../text.json";
import { MapListItem } from "@/model/api";

// MapList에 해당하는 페이지
// 서버에서 리스트 불러와서 출력하기
export default function DrodownImageCardList() {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [list, setList] = useState<MapListItem[]>([]);

  const getList = async () => {
    const res = await mapList();
    if (res.success && res.data) {
      const { data } = res;
      console.log(data);
      setList(data);
    }
  };

  const updateViewCount = async (mapId: number, url: string) => {
    await viewCount(mapId);
    if (url && typeof window !== "undefined") {
      window.location.href = `${url}`;
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
            list.map((v: { [key: string]: any }, i: number) => {
              const name: any =
                v[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
              return (
                <div key={i.toString()} className={styles.listItem}>
                  <img
                    className={styles.image}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.thumbnailFilePath}${v.thumbnailFilename}`}
                    alt={v.nameEn}
                    onClick={() => {
                      updateViewCount(v.id, v.url);
                    }}
                  />
                  <div className={styles.name}>{name}</div>
                </div>
              );
            })
          ) : (
            <div>{textObj.common.msg.loading[lang]}</div>
          )}
        </>
        <div className={styles.listItem}></div>
      </div>
    </div>
  );
}
