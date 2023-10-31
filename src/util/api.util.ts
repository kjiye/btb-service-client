import { getUserSession } from "@/util/session.util";

export const getRequest = async (path: string, param?: Record<string, any>) => {
  let url =
    process.env.NEXT_PUBLIC_API_SERVER_URL +
    path +
    (param ? new URLSearchParams(param).toString() : "");
  return await fetch(url, {
    cache: "no-store",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => false);
};

export const postRequest = async (
  path: string,
  param: any,
  useToken?: boolean
) => {
  const url = process.env.NEXT_PUBLIC_API_SERVER_URL + path;
  let headers: any = {
    "Content-type": "application/json",
  };

  if (useToken) {
    const token = await getUserSession()?.token;
    if (!token) {
      return false;
    }
    headers = {
      ...headers,
      "x-access-token": token,
    };
  }
  return await fetch(url, {
    cache: "no-store",
    method: "POST",
    headers: headers,
    body: JSON.stringify(param),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => false);
};

export const putRequest = async (path: string, param: any) => {
  const url = process.env.NEXT_PUBLIC_API_SERVER_URL + path;
  return await fetch(url, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(param),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => false);
};
