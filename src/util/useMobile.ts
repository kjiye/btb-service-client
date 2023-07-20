"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useMobile = () => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1280px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:768px)",
  });

  useEffect(() => {
    console.log("!!!!!!");
  }, []);
};
