import { textBundle } from "@/util/format.util";

const text = textBundle();

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

export interface UserInfoValidateItem {
  name?: string;
  nameErr?: boolean;
  email?: string;
  emailErr?: boolean;
  phone?: string;
  phoneErr?: boolean;
}

export type IsShowModalType =
  | "drawer"
  | "user"
  | "join"
  | "nft"
  | "terms"
  | "process";

export const IsShowModalItemDatasets: IsShowModalItem = {
  drawer: false,
  user: false,
  join: false,
  nft: false,
  terms: false,
  process: false,
};

export interface IsShowModalItem {
  drawer: boolean;
  user: boolean;
  join: boolean;
  nft: boolean;
  terms: boolean;
  process: false;
}
