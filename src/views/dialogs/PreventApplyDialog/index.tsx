import { forwardRef, type KeyboardEvent } from 'react';

import Dialog from '@components/Dialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar } from '../style.css';

const PreventApplyDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const { deviceType } = useDeviceType();

  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  return (
    <Dialog ref={ref} onKeyDown={handlePreventESCKeyPress}>
      <p className={mainTextVar[deviceType]}>지원서 제출 기한이 지났어요.</p>
      <form
        method="dialog"
        className={`${buttonWrapperVar[deviceType]} ${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

PreventApplyDialog.displayName = 'PreventApplyDialog';

export default PreventApplyDialog;
