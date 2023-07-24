"use client";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";

const getLibrary = (provider: any) => new Web3Provider(provider);

export const Web3ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
};
