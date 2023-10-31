"use client";
import { MAINNET_CHAINID, SEPOLIA_CHAINID } from "@/model/props";
import { InjectedConnector } from "@web3-react/injected-connector";
import { BigNumber, ethers } from "ethers";
import { ContractABI } from "../abi";
import { getUserSession } from "../session.util";

const useMainnet = !!(process.env.NEXT_PUBLIC_CHAINID === "0x1");

/**
 * 지갑 커넥터 설정
 */
export const injected = new InjectedConnector({
  supportedChainIds: [useMainnet ? MAINNET_CHAINID : SEPOLIA_CHAINID],
});

export const returnResult = (success: boolean, data?: Record<string, any>) => {
  return {
    success,
    ...data,
  };
};

/**
 * NFT 민팅 컨트랙 콜
 * @param tokenUri 민팅할 작품의 고유 해시값 (IPFS 업로드)
 * @param price 작품 가격
 */
export const callMintNft = async (tokenUri: string, price: string) => {
  const walletAddr = await getUserSession()?.account;
  const provider = new ethers.providers.Web3Provider(
    useMainnet ? window.ethereum : "sepolia"
  );
  const signer = provider.getSigner(walletAddr);
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDR!,
    ContractABI,
    signer
  );

  try {
    const etherPrice = ethers.utils.parseEther(price);
    let option: { value: BigNumber; gasLimit?: number } = {
      value: etherPrice,
    };

    if (!useMainnet) {
      option = {
        ...option,
        gasLimit: Number(process.env.NEXT_PUBLIC_GASLIMIT),
      };
    }

    const transaction = await contract.mintNFT(
      tokenUri,
      etherPrice,
      walletAddr,
      false,
      option
    );

    const callResult = await transaction.wait();
    const status = callResult.confirmations > 0 && callResult.status === 1;

    if (
      status &&
      callResult?.transactionHash &&
      callResult?.events.length > 0
    ) {
      const { transactionHash, events } = callResult;
      return returnResult(true, {
        transactionHash,
        tokenId: Number(events[0].args[2]),
      });
    } else {
      return returnResult(false, { code: "PAYMENT_FAILED" });
    }
  } catch (error: any) {
    return returnResult(false, { code: error?.code });
  }
};
