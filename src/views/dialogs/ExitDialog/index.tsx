import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText, subText } from './style.css';

const ExitDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>이대로 나가시겠어요?</p>
      <p className={subText}>변경사항이 있는 경우 임시저장을 해주세요.</p>
      <div className={buttonWrapper}>
        <form method="dialog" className={buttonOutside.line}>
          <button className={buttonInside.line}>머물기</button>
        </form>
        <div className={buttonOutside.solid}>
          <button className={buttonInside.solid}>확인</button>
        </div>
      </div>
    </Dialog>
  );
});

ExitDialog.displayName = 'ExitDialog';

export default ExitDialog;
