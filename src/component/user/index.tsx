import { getUserInfo } from "@/api/fetch";
import { LangContext } from "@/context/lang.context";
import { UserItem } from "@/model/api";
import { textBundle, textEllipsis } from "@/util/format.util";
import { useContext, useEffect, useState } from "react";
import styles from "./user.module.scss";

export default function User() {
  const {
    state: { lang },
  } = useContext(LangContext);

  const text = textBundle();
  const [user, setUser] = useState<UserItem>({});

  const getData = async () => {
    const res = await getUserInfo();
    if (res.success) {
      const {
        data: { name, email, phone, walletAddr, nftOrder },
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
        <div>{text.user.title.account[lang]}</div>
        <div>{textEllipsis(user?.walletAddr || "")}</div>
        <div className={`${styles.textSection}`}>{user?.name}</div>
        <div>{user?.email}</div>
        <div>{user?.phone}</div>
        <div className={`${styles.textBottom}`}>
          {text.contact[lang]}
          <div>{text.footer.email.content[lang]}</div>
        </div>
      </div>
    </>
  );
}
