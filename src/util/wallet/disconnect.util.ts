import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/navigation";
import { removeUserSession } from "@/util/session.util";

/**
 * 메타마스크 지갑 연결 해제
 */
export default async function DisconnectWallet() {
  const { account, active, deactivate } = useWeb3React();
  const router = useRouter();

  active && account && account.length > 0 && deactivate();
  await removeUserSession();
  router.refresh();
}
