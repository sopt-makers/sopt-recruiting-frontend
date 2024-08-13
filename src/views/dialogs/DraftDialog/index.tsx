import { forwardRef } from 'react';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar } from '../style.css';

const DraftDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const DEVICE_TYPE = useDevice();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[DEVICE_TYPE]}>임시 저장이 완료되었어요.</p>
      <form
        method="dialog"
        className={`${buttonWrapperVar[DEVICE_TYPE]} ${buttonOutside.solid} ${buttonOutsideVar[DEVICE_TYPE]}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

DraftDialog.displayName = 'DraftDialog';

export default DraftDialog;
