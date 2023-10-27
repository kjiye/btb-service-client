import text from "../text.json";

export const checkTextFormat = (type: string, value: string) => {
  switch (type) {
    case "email":
      const checkEmail = new RegExp(
        "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
      );
      return checkEmail.test(value);
    case "phone":
      const checkPhone = new RegExp("^[0-9]+$");
      return checkPhone.test(value);
  }
};

export const textEllipsis = (text: string) => {
  const length = 15;
  return text.length > length ? text.substring(0, length - 2) + "..." : text;
};

export const textBundle = () => {
  return Object(text);
};

export const modelScaleMatch = (artworkId: number) => {
  switch (artworkId) {
    case 1:
      return 0.28;
    case 2:
      return 0.45;
    case 3:
      return 0.45;
    case 4:
      return 0.45;
    case 5:
      return 0.45;
    case 6:
      return 0.4;
    case 7:
      return 0.45;
    case 8:
      return 0.45;
    case 9:
      return 0.45;
    case 10:
      return 0.4;
    case 11:
      return 0.4;
    case 12:
      return 0.4;
    case 13:
      return 0.4;
    case 14:
      return 0.4;
    case 15:
      return 0.35;
    case 16:
      return 0.4;
    case 17:
      return 0.4;
    case 18:
      return 0.35;
    case 19:
      return 0.35;
    case 20:
      return 0.4;
    default:
      return 0.4;
  }
};
