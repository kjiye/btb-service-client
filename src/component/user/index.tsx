import { getUserInfo } from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { textEllipsis } from "@/util/format.util";
import { useContext, useEffect, useState } from "react";
import styles from "./user.module.css";
import text from "../../text.json";

export default function User() {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  const [user, setUser] = useState<any>({});

  const getData = async () => {
    const res = await getUserInfo();
    if (res.success) {
      const {
        data: { name, email, phone, nftOrder, walletAddr },
      } = res;
      setUser({
        name,
        email,
        phone,
        walletAddr,
        nftOrder,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={`${styles.userWrapper}`}>
        <div>Connected to:</div>
        <div>{textEllipsis(user?.walletAddr || "")}</div>
        <div className={`${styles.textSection}`}>{user?.name}</div>
        <div>{user?.email}</div>
        <div>{user?.phone}</div>
        <div className={`${styles.textBottom}`}>
          {textObj.contact[lang]}
          <div>beyondthebirthplace.kr@gmail.com</div>
        </div>
      </div>
    </>
  );
}
