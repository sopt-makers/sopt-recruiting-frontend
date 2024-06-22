import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText, subText } from '../style.css';

const CompleteDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  return (
    <Dialog ref={ref}>
      <p className={mainText}>비밀번호 재설정이 완료되었어요.</p>
      <p className={subText}>&apos;지원하기&apos; 페이지로 이동할게요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <Link to="/apply" className={buttonInside.solid}>
          확인
        </Link>
      </form>
    </Dialog>
  );
});

CompleteDialog.displayName = 'CompleteDialog';

export default CompleteDialog;
