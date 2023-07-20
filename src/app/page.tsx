"use client";
import Dropdown from "@/component/dropdown";
import DropdownImageButtonList from "@/component/dropdown/inner/imageButton";
import DropdownImageCardList from "@/component/dropdown/inner/imageCard";
import DropdownInnerText from "@/component/dropdown/inner/text";
import Footer from "@/component/footer";
import Header from "@/component/header";
import { LangContext } from "@/context/lang.context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// root 경로인 "/" 에서 실행할 파일
// 메인페이지로 사용
export default function Page() {
  const router = useRouter();
  const {
    state: { lang },
  } = useContext(LangContext);

  // 반응형 레이아웃
  const [isTabletBelow, setIsTabletBelow] = useState<boolean>(false);
  const [rsp, setRsp] = useState<string>("");
  const isTabletOrBelow: boolean = useMediaQuery({
    query: "(max-width: 1279px)",
  });
  // 드롭다운
  const [dropdownList, setDropdownList] = useState<any[]>([
    { id: 1, title: "Introduction", child: <DropdownInnerText /> },
    { id: 2, title: "Map", child: <DropdownImageCardList /> },
    { id: 3, title: "NFT Shop", child: <DropdownImageButtonList /> },
  ]);

  useEffect(() => {
    setIsTabletBelow(isTabletOrBelow);
    setRsp(isTabletOrBelow ? "m" : "");
  }, [isTabletOrBelow, isTabletBelow]);

  const onSelectDropdown = async (selected: number) => {
    setDropdownList(
      dropdownList.map((v) => {
        return {
          ...v,
          selected: v.id === selected ? !v.selected : false,
        };
      })
    );
  };

  return (
    <div className={`resContainer ${rsp}`}>
      <Header rsp={rsp} isTabletBelow={isTabletBelow} />
      <div className={`mainWrapper ${rsp}`}>
        {dropdownList.map((v) => (
          <Dropdown
            key={v.id}
            id={v.id}
            title={v.title}
            selected={...v.selected}
            onSelected={onSelectDropdown}
            child={v.child}
          />
        ))}
        {isTabletBelow && <Footer rsp={rsp} isTabletBelow={isTabletBelow} />}
      </div>
      {!isTabletBelow && <Footer rsp={rsp} isTabletBelow={isTabletBelow} />}
    </div>
  );
}
