import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonWrapperVar, mainTextVar } from '../style.css';

const ExistingApplicantDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const DEVICE_TYPE = useDevice();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[DEVICE_TYPE]}>이미 가입된 계정이 있어요.</p>
      <div className={buttonWrapperVar[DEVICE_TYPE]}>
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
