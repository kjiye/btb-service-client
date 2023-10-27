import { SelectTermsType } from "@/model/props";
import { getRequest, postRequest, putRequest } from "@/util/api.util";

export const updateViewCount = async (id: number) => {
  return !!(await putRequest(`/viewcount/${id}`, {}))?.success;
};

export const getTermsContent = async (type: SelectTermsType, lang: string) => {
  return await getRequest(`/terms/${type}/${lang}`);
};

export const checkSigned = async (walletAddr: string) => {
  const res = await getRequest(`/check/signed/${walletAddr}`);
  return !!(res.success && res.data?.signed);
};

export const checkUserInfo = async (walletAddr: string) => {
  const res = await getRequest(`/check/info/${walletAddr}`);
  return !!(res.success && res.data?.hasInfo);
};

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

export const getNftList = async (categoryId: number) => {
  return await getRequest(`/nft/list/${categoryId}`);
};

export const getNftDetail = async (artworkId: number) => {
  const data = await getRequest(`/nft/detail/${artworkId}`);
  return data.success && data.data ? data.data : undefined;
};

export const getMapList = async () => {
  return await getRequest("/map/list");
};

export const requestEtherReady = async (artworkId: number) => {
  return await postRequest(`/payment/ready/${artworkId}`, {}, true);
};

export const sendEtherResult = async (
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
