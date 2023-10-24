"use client";
import { useEffect, useState } from "react";
import PageComponent from "@/component/page";
import Loading from "@/component/loading";

// 루트페이지 렌더 전 초기 처리가 필요한 부분
async function getPreFetch() {
  // const res = await fetch('https://api.example.com/...');
  // return res.json();
}

export default function Page() {
  getPreFetch();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <PageComponent /> : <Loading />;
}
