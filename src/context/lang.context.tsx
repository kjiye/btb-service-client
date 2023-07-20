"use client";
import React, { Dispatch, createContext, useReducer } from "react";

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
      {children}
    </LangContext.Provider>
  );
};
