import {
  IsShowModalItem,
  IsShowModalItemDatasets,
  IsShowModalType,
} from "@/model/props";
import { useCallback, useState } from "react";

export default function useShowModal() {
  const [isShowModal, setIsShowModal] = useState<IsShowModalItem>(
    IsShowModalItemDatasets
  );

  const onChangeModal = useCallback(
    (type: IsShowModalType, isShow: boolean) => {
      setIsShowModal({
        ...isShowModal,
        [`${type}`]: isShow,
      });
    },
    [isShowModal]
  );

  return { isShowModal, onChangeModal };
}
