import { textBundle } from "@/util/format.util";

const text = textBundle();

// tailwind theme 으로 변경 적용하기
export const IMAGE_SIZE = 216;
export const ICON_SIZE_LARGE = 40;
export const ICON_SIZE_SMALL = 30;
export const ICON_SIZE_TINY = 21;

export const MAINNET_CHAINID = 1;
export const SEPOLIA_CHAINID = 11155111;

export const PC_MAX_WIDTH = "(max-width: 1279px)";

export type SelectTermsType = "terms" | "privacy";
export type DeviceType = "m" | "";
export type LanguageType = "en" | "kr";
export type DropdownChildType = "text" | "card" | "button";
export type RoundedSingleButtonType = "fixed" | "responsive";
export type ProcessModalType = "process" | "done";
export type LoadingViewType = "text" | "indicator";

export interface DropdownItem {
  id: number;
  title: string;
  content: DropdownChildType;
  selected?: boolean;
}

export const DropdownDatasets: DropdownItem[] = [
  { id: 1, title: text.dropdown.introduction.title, content: "text" },
  { id: 2, title: text.dropdown.map.title, content: "card" },
  { id: 3, title: text.dropdown.shop.title, content: "button" },
];

export interface ProductCategoryItem {
  id: number;
  title: string;
  selected: boolean;
}

export const ProductCategoryDatasets: ProductCategoryItem[] = [
  { id: 1, title: "ALL", selected: true },
  { id: 2, title: "2023", selected: false },
];

export type ErrorMessageType =
  | "connectionError"
  | "unsupportedError"
  | "balanceError"
  | "txCommonError"
  | "inputUserError";

export interface ErrorMessageItem {
  message?: string;
  subMessage?: string;
}

export interface ModalPropsItem {
  isShow: boolean;
  content: any;
}
