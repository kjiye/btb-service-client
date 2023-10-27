/* eslint-disable @next/next/no-img-element */
import { getMapList, updateViewCount } from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import Loading from "@/component/loading";
import { useContext, useEffect, useState } from "react";
import styles from "./dropdown-inner-imagecard.module.scss";
import { MapListItem } from "@/model/api";

export default function DrodownImageCardList() {
  const {
    state: { lang },
  } = useContext(LangContext);

  const [list, setList] = useState<MapListItem[]>([]);

  const getList = async () => {
    const res = await getMapList();
    if (res.success && res.data) {
      const { data } = res;
      setList(data);
    }
  };

  const updateCount = async (mapId: number, url: string) => {
    await updateViewCount(mapId);
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
              const name: string =
                v[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
              return (
                <div key={i.toString()} className={styles.listItem}>
                  <img
                    className={styles.image}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.thumbnailFilePath}${v.thumbnailFilename}`}
                    alt={v.nameEn}
                    onClick={() => {
                      updateCount(v.id, v.url);
                    }}
                  />
                  <div className={styles.name}>{name}</div>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </>
        <div className={styles.listItem}></div>
      </div>
    </div>
  );
}
