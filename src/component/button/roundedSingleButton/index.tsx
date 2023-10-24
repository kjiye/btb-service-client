import { RoundedSingleButtonType } from "@/model/props";
import styles from "./roundedsinglebutton.module.scss";

interface Props {
  name: string;
  type?: RoundedSingleButtonType;
  disabled?: boolean;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
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
