import Modal from "@/component/modal";
import styles from "./modal-walletmodal.module.css";

interface Props {
  rsp?: string;
  isShow?: boolean;
  onCloseClick: () => void;
}

export default function WalletModal({ rsp, isShow, onCloseClick }: Props) {
  return (
    <Modal rsp={rsp} isShow={isShow}>
      <div>metamask</div>
      <div>cancel</div>
    </Modal>
  );
}
