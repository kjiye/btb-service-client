import { SelectTermsType } from "@/model/props";
import { getRequest, postRequest, putRequest } from "@/util/api.util";

// 조회수 업데이트
export const updateViewCount = async (id: number) => {
  return !!(await putRequest(`/viewcount/${id}`, {}))?.success;
};

// 이용약관 내용 조회
export const getTermsContent = async (type: SelectTermsType, lang: string) => {
  return await getRequest(`/terms/${type}/${lang}`);
};

// 지갑 서명 완료 여부 검증
export const checkSigned = async (walletAddr: string) => {
  const res = await getRequest(`/check/signed/${walletAddr}`);
  return !!(res.success && res.data?.signed);
};

// 지갑 계정의 회원정보 등록 완료 여부 검증
export const checkUserInfo = async (walletAddr: string) => {
  const res = await getRequest(`/check/info/${walletAddr}`);
  return !!(res.success && res.data?.hasInfo);
};

// 사용자 정보 조회
export const getUserInfo = async () => {
  return await postRequest("/user/info", {}, true);
};

// 회원가입 및 로그인
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

// NFT 작품 리스트 조회
export const getNftList = async (categoryId: number) => {
  return await getRequest(`/nft/list/${categoryId}`);
};

// NFT 작품 상세 정보 조회
export const getNftDetail = async (artworkId: number) => {
  const data = await getRequest(`/nft/detail/${artworkId}`);
  return data.success && data.data ? data.data : undefined;
};

// 맵 리스트 조회
export const getMapList = async () => {
  return await getRequest("/map/list");
};

// 이더리움 결제 준비
export const requestEtherReady = async (artworkId: number) => {
  return await postRequest(`/payment/ready/${artworkId}`, {}, true);
};

// 이더리움 결제 결과 전송
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
