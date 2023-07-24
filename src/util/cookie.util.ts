"use server";
import { cookies } from "next/headers";

const nextCookies = cookies();

// 나중에 httpOnly, secure 처리 추가힉
export async function setTokenCookie(token: string) {
  nextCookies.set({
    name: "token",
    value: token,
    path: "/",
  });
  return true;
}

export async function removeTokenCookie() {
  nextCookies.set({
    name: "token",
    value: "",
    path: "/",
  });
  return true;
}

export async function getTokenCookie() {
  return nextCookies.get("token");
}
