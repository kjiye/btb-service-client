import { LangContext } from "@/context/lang.context";
import { ErrorMessageItem, ErrorMessageType } from "@/model/props";
import { useCallback, useContext, useState } from "react";
import { textBundle } from "../format.util";

export default function useErrorMessageModal() {
  const {
    state: { lang },
  } = useContext(LangContext);

  const [isShowMsgError, setIsShowMsgError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageItem>({});

  const onChangeErrorMessage = useCallback(
    (type?: ErrorMessageType) => {
      if (type) {
        const text = textBundle();
        const message = text.wallet[type].msg[lang];
        const sub = text.wallet[type].sub[lang];
        setErrorMessage({
          message: message,
          subMessage: sub || "",
        });
        setIsShowMsgError(true);
      } else {
        setIsShowMsgError(false);
        setErrorMessage({});
      }
    },
    [lang]
  );

  const resetMessage = useCallback(() => setErrorMessage({}), []);

  return { isShowMsgError, errorMessage, onChangeErrorMessage, resetMessage };
}
