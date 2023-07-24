// API 리스트
// 중간 파라미터 처리도 여기서 진행

import { getRequest, postRequest, putRequest } from "@/util/api.util";

export const viewCount = async (id: number) => {
  // 0은 전체, 1부터는 map
  const res = await putRequest(`/viewcount/${id}`, {});
  return !!res.success;
};

export const checkSigned = async (walletAddr: string) => {
  const res = await getRequest(`/check/signed/${walletAddr}`);
  if (res.success && res.data?.signed) {
    console.log("서명 완료");
    return true;
  } else {
    console.log("서명 없음");
    return false;
  }
};

export const checkUserInfo = async (walletAddr: string) => {
  const res = await getRequest(`/check/info/${walletAddr}`);
  if (res.success && res.data?.hasInfo) {
    console.log("정보 등록");
    return true;
  } else {
    console.log("정보 미등록");
    return false;
  }
};

// getUserInfo
export const getUserInfo = async () => {
  return await postRequest("/user/info", {}, true);
};

export const login = async (
  walletAddr: string,
  sign?: string,
  email?: string,
  name?: string,
  phone?: string
) => {
  return await postRequest(`/login`, {
    walletAddr,
    sign,
    email,
    name,
    phone,
  });
};

export const nftList = async (categoryId: number) => {
  return await getRequest(`/nft/list/${categoryId}`);
};

export const nftDetail = async (artworkId: number) => {
  const data = await getRequest(`/nft/detail/${artworkId}`);
  return data.success && data.data ? data.data : undefined;
};

export const mapList = async () => {
  return await getRequest("/map/list");
};

export const etherReady = async (artworkId: number) => {
  return await postRequest(`/payment/ready/${artworkId}`, {}, true);
};

export const etherResult = async (
  orderId: number,
  successYn: "Y" | "N",
  param?: { txHash: string; tokenId: number }
) => {
  return await postRequest(
    `/payment/result/${orderId}/${successYn}`,
    param,
    true
  );
};
