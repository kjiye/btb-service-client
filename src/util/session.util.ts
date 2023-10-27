"use client";

export async function setUserSession(
  token: string,
  account: string,
  userId: number
) {
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      token,
      userId,
      account,
    })
  );
  sessionStorage.setItem("isWalletConnected", "true");
  return true;
}

export async function removeUserSession() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("isWalletConnected");
  return true;
}

export const checkIsWalletConnected = () => {
  const getResult =
    typeof window !== "undefined"
      ? sessionStorage?.getItem("isWalletConnected")
      : null;
  return !!(getResult && getResult === "true");
};

export const getUserSession = () => {
  const origin =
    typeof window !== "undefined" && sessionStorage.getItem("user");
  return origin ? JSON.parse(origin) : undefined;
};
