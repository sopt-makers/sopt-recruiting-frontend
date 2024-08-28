import { forwardRef } from 'react';

import Dialog from '@components/Dialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar } from '../style.css';

const DraftDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const { deviceType } = useDeviceType();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[deviceType]}>임시 저장이 완료되었어요.</p>
      <form
        method="dialog"
        className={`${buttonWrapperVar[deviceType]} ${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

DraftDialog.displayName = 'DraftDialog';

export default DraftDialog;
