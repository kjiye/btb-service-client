"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import { Web3ContextProvider } from "./web3.context";

type StateType = {
  lang: string;
};

type ActionType = {
  type: "en" | "kr";
};

// 초기 언어 설정
const initialState: StateType = {
  lang: "en",
};

const reducer = (state: StateType, action: ActionType) => {
  if (action?.type) {
    return { ...state, lang: action.type };
  }
  return state;
};

export const LangContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const LangContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LangContext.Provider value={{ state, dispatch }}>
      <Web3ContextProvider>{children}</Web3ContextProvider>
    </LangContext.Provider>
  );
};
