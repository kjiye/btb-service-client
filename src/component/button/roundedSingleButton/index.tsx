import styles from "./roundedsinglebutton.module.css";

// 활성, 비활성 상태
// width는 100%인 버전과 269px/ 48px 고정 버전 두 개로 쓰임

interface Props {
  name: string;
  type?: "fixed" | "responsive";
  disabled?: boolean;
  onClick: () => void;
}

export default function RoundedSingleButton({
  name,
  type = "fixed",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`${styles.wrapper} ${styles[type]} ${
        disabled && styles.disabled
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
