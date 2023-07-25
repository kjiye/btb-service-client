import { InjectedConnector } from "@web3-react/injected-connector";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import { ContractABI } from "./abi";
import { getUserSession } from "@/util/session.util";

export const MAINNET_CHAINID = 1;
export const SEPOLIA_CHAINID = 11155111;

// 지갑 설정
export const injected = new InjectedConnector({
  // supportedChainIds: [MAINNET_CHAINID, SEPOLIA_CHAINID], // 테스트용
  supportedChainIds: [MAINNET_CHAINID],
});

// 컨트랙 콜
export const callMintNft = async (tokenUri: string, price: string) => {
  const walletAddr = await getUserSession()?.account;

  const provider = new ethers.providers.Web3Provider(
    window.ethereum
    // process.env.NEXT_PUBLIC_CHAINID
    // "sepolia" // 메인넷 배포 때 주석처리
  );
  const signer = provider.getSigner(walletAddr);
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDR!,
    ContractABI,
    signer
  );

  // 컨트랙 콜
  try {
    const transaction = await contract.mintNFT(
      tokenUri, // nft token
      ethers.utils.parseEther(price), // 설정 가격
      walletAddr, // 구매자 지갑 주소
      false,
      {
        value: ethers.utils.parseEther(price),
        gasLimit: Number(process.env.NEXT_PUBLIC_GASLIMIT),
      } // 실제 지불 가격
    );

    const result = await transaction.wait();
    const status = result.confirmations > 0 && result.status === 1;

    if (status && result?.transactionHash && result?.events.length > 0) {
      const { transactionHash, events } = result;
      return {
        success: true,
        transactionHash,
        tokenId: Number(events[0].args[2]),
      };
    } else {
      return {
        success: false,
        code: "PAYMENT_FAILED",
      };
    }
  } catch (error: any) {
    return {
      success: false,
      code: error?.code,
    };
  }
};

// 테스트 후 미사용 상태
export const checkInstalled = (isTabletBelow: boolean) => {
  if (isTabletBelow) {
    // 모바일 딥링크 이동
    location.href = "https://metamask.app.link/arte-nft.art";
  } else {
    // 데스크탑
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      // 이미 확장프로그램 설치된 상태
    } else {
      // 메타마스크 설치 링크로 이동
      location.href = "https://metamask.io/download";
    }
  }
};
