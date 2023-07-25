import { getUserSession } from "@/util/session.util";

export const getRequest = async (path: string, param?: any) => {
  const url = process.env.NEXT_PUBLIC_API_SERVER_URL + path;
  // param이 있는 경우 querystring으로 변환하는 처리도 추가하기
  return await fetch(url, {
    cache: "no-store",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // console.log(error);
      return false;
    });
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
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // console.log(error);
      return false;
    });
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
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // console.log(error);
      return false;
    });
};
