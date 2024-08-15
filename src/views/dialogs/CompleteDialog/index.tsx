import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const CompleteDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const deviceType = useDevice();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[deviceType]}>비밀번호 재설정이 완료되었어요.</p>
      <p className={subTextVar[deviceType]}>&apos;로그인&apos; 페이지로 이동할게요.</p>
      <form
        method="dialog"
        className={`${buttonWrapperVar[deviceType]} ${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
        <Link to="/" className={buttonInside.solid}>
          확인
        </Link>
      </form>
    </Dialog>
  );
});

CompleteDialog.displayName = 'CompleteDialog';

export default CompleteDialog;
