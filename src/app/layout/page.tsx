"use client";
// import { isMobile } from "react-device-detect";
import { useMediaQuery } from "react-responsive";

export default function Page() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1280px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:767px)",
  });

  const device = (className: string) => {
    if (isDesktop) return className + " pc";
    if (isTablet) return className + " t";
    if (isMobile) return className + " m";
  };

  return (
    <div>
      <h1>반응형 레이아웃 컨텐츠 영역 예시</h1>
      <div className="header">header</div>
      <div className={`${device("content")}`}>
        body (content)
        <div className={`${device("boxWrapper")}`}>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
        </div>
      </div>
      {/* 
      {isDesktop && <p style={{ background: "red" }}>Desktop</p>}
      {isTablet && <p style={{ background: "blue" }}>Tablet</p>}
      {isMobile && <p style={{ background: "green" }}>Mobile</p>} */}
    </div>
  );
}
