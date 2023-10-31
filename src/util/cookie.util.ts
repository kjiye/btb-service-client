"use server";
import { cookies } from "next/headers";

const nextCookies = cookies();

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
