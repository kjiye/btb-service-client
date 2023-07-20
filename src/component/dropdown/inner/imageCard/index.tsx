/* eslint-disable @next/next/no-img-element */
import styles from "./dropdown-inner-imagecard.module.css";

// MapList에 해당하는 페이지
// 서버에서 리스트 불러와서 출력하기
export default function DrodownImageCardList() {
  return (
    <div className={styles.container}>
      <div className={styles.listWrapper}>
        <div className={styles.listItem}>
          <img
            className={styles.img}
            src="/img/thumb/map/deepsea.png"
            alt="deepsea"
            onClick={() => {
              console.log("스타일 변경 처리 후 새 창 열기");
            }}
          />
          <div className={styles.name}>Map Name</div>
        </div>
        <div className={styles.listItem}>
          <img
            className={styles.img}
            src="/img/thumb/map/resturant.png"
            alt="deepsea"
          />
        </div>
        <div className={styles.listItem}>
          <img
            className={styles.img}
            src="/img/thumb/map/space.png"
            alt="deepsea"
          />
        </div>
        <div className={styles.listItem}>
          <img
            className={styles.img}
            src="/img/thumb/map/stage.png"
            alt="deepsea"
          />
        </div>
        <div className={styles.listItem}>
          <img
            className={styles.img}
            src="/img/thumb/map/lava.png"
            alt="deepsea"
          />
        </div>
        <div className={styles.listItem}></div>
      </div>
    </div>
  );
}
