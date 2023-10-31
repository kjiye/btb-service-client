import { DropdownChildType } from "@/model/props";
import styles from "./dropdown.module.scss";
import DropdownImageButtonList from "@/component/dropdown/inner/imageButton";
import DropdownImageCardList from "@/component/dropdown/inner/imageCard";
import DropdownInnerText from "@/component/dropdown/inner/text";
import { NftItem } from "@/model/api";

interface Props {
  id: number;
  title: string;
  selected?: boolean;
  contentType: DropdownChildType;
  onSelectMenu: (selectedId: number) => void;
  onSelectNft: (data: NftItem) => void;
}

export const renderDropdownInnerComponent = (
  onSelectNft: (data: NftItem) => void,
  type?: DropdownChildType
) => {
  switch (type) {
    case "text":
      return <DropdownInnerText />;
    case "card":
      return <DropdownImageCardList />;
    case "button":
      return (
        <DropdownImageButtonList
          onSelectNft={(data: NftItem) => onSelectNft(data)}
        />
      );
    default:
      return <></>;
  }
};

export default function Dropdown({
  id,
  title,
  selected,
  contentType,
  onSelectMenu,
  onSelectNft,
}: Props) {
  return (
    <>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.title} ${
            selected !== undefined && !selected
              ? styles.unselected
              : styles.selected
          }`}
          onClick={() => {
            onSelectMenu(id);
          }}
        >
          {title}
        </div>
        {selected && (
          <div>{renderDropdownInnerComponent(onSelectNft, contentType)}</div>
        )}
      </div>
    </>
  );
}
