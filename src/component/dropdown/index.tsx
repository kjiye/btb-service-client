import styles from "./dropdown.module.css";
import DropdownInnerText from "./inner/text";

interface Props {
  id: number;
  title: string;
  selected?: boolean;
  child?: JSX.Element;
  onSelected: (selected: any) => void;
}

export default function Dropdown({
  id,
  title,
  selected,
  child,
  onSelected,
}: Props) {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.title} ${
          selected !== undefined && !selected
            ? styles.unselected
            : styles.selected
        }`}
        onClick={() => {
          onSelected(id);
        }}
      >
        {title}
      </div>
      {selected && <div>{child}</div>}
    </div>
  );
}
