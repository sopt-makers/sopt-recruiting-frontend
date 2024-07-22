import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText } from '../style.css';

const ExistingApplicantDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>이미 가입된 계정이 있어요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

ExistingApplicantDialog.displayName = 'ExistingApplicantDialog';

export default ExistingApplicantDialog;
