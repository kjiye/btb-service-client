import styles from "./input-baiscinput.module.scss";

interface Props {
  title: string;
  placeholder?: string;
  value: string;
  editable?: boolean;
  validationMsg?: string;
  onChange?: (text: string) => void;
}

export default function BasicInput({
  title,
  placeholder = "",
  value,
  editable = true,
  validationMsg,
  onChange,
}: Props) {
  return (
    <>
      <div className={`${styles.inputWrapper} flexRow`}>
        <span className={styles.title}>{title}: </span>
        <input
          className={styles.input}
          contentEditable={editable}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
      {validationMsg && validationMsg.length > 0 && (
        <div className={styles.msg}>{validationMsg}</div>
      )}
    </>
  );
}
