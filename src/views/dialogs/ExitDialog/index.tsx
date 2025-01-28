import { forwardRef } from 'react';

import Dialog from '@components/Dialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const ExitDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const { deviceType } = useDeviceType();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[deviceType]}>이대로 나가시겠어요?</p>
      <p className={subTextVar[deviceType]}>변경사항이 있는 경우 임시저장을 해주세요.</p>
      <div className={buttonWrapperVar[deviceType]}>
        <form method="dialog" className={`${buttonOutside.line} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.line}>머물기</button>
        </form>
        <div className={`${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.solid}>나가기</button>
        </div>
      </div>
    </Dialog>
  );
});

ExitDialog.displayName = 'ExitDialog';

export default ExitDialog;
