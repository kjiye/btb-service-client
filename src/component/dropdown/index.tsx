import Footer from "@/component/footer";
import styles from "./dropdown.module.css";

interface Props {
  id: number;
  title: string;
  selected?: boolean;
  child?: JSX.Element;
  rsp?: string;
  isTabletBelow?: boolean;
  onSelected: (selected: any) => void;
}

export default function Dropdown({
  id,
  title,
  selected,
  child,
  rsp = "",
  isTabletBelow = false,
  onSelected,
}: Props) {
  return (
    <>
      <div className={`${styles.container} ${rsp === "m" && styles.m}`}>
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
    </>
  );
}
