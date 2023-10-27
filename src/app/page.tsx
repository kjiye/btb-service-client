"use client";
import { useEffect, useState } from "react";
import PageComponent from "@/component/page";
import Loading from "@/component/loading";
import { updateViewCount } from "@/api/fetch";

async function getPreFetch() {
  await updateViewCount(0);
}

export default function Page() {
  getPreFetch();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <PageComponent /> : <Loading />;
}
