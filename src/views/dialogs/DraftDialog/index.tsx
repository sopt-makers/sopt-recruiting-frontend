import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText } from '../style.css';

const DraftDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>임시 저장이 완료되었어요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

DraftDialog.displayName = 'DraftDialog';

export default DraftDialog;
