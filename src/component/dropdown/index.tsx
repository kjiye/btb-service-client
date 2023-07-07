import styles from "./dropdown.module.css";

interface Props {
  title: string;
  selected?: boolean;
  child?: JSX.Element;
}

export default function Dropdown({ title, selected = false, child }: Props) {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.title} ${
          selected ? styles.selected : styles.unselected
        }`}
      >
        {title}
      </div>
      {selected && <div>{child}</div>}
    </div>
  );
}
