import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, mainText } from './style.css';

const DraftDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>임시 저장이 완료되었어요.</p>
      <form method="dialog" className={buttonOutside}>
        <button className={buttonInside}>확인</button>
      </form>
    </Dialog>
  );
});

DraftDialog.displayName = 'DraftDialog';

export default DraftDialog;
