import { forwardRef } from 'react';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const ExitDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const DEVICE_TYPE = useDevice();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[DEVICE_TYPE]}>이대로 나가시겠어요?</p>
      <p className={subTextVar[DEVICE_TYPE]}>변경사항이 있는 경우 임시저장을 해주세요.</p>
      <div className={buttonWrapperVar[DEVICE_TYPE]}>
        <form method="dialog" className={buttonOutside.line}>
          <button className={buttonInside.line}>머물기</button>
        </form>
        <div className={buttonOutside.solid}>
          <button className={buttonInside.solid}>나가기</button>
        </div>
      </div>
    </Dialog>
  );
});

ExitDialog.displayName = 'ExitDialog';

export default ExitDialog;
