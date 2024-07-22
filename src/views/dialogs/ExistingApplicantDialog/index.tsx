import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText } from '../style.css';

const ExistingApplicantDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>이미 가입된 계정이 있어요.</p>
      <div className={buttonWrapper}>
        <form method="dialog" className={buttonOutside.line}>
          <button className={buttonInside.line}>다시 입력하기</button>
        </form>
        <div className={buttonOutside.solid}>
          <Link to="/" className={buttonInside.solid}>
            로그인하기
          </Link>
        </div>
      </div>
    </Dialog>
  );
});

ExistingApplicantDialog.displayName = 'ExistingApplicantDialog';

export default ExistingApplicantDialog;
