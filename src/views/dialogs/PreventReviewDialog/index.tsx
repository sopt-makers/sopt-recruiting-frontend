import { forwardRef, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const PreventReviewDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const DEVICE_TYPE = useDevice();

  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  return (
    <Dialog ref={ref} onKeyDown={handlePreventESCKeyPress}>
      <p className={mainTextVar[DEVICE_TYPE]}>지원서 제출을 먼저 해주세요.</p>
      <p className={subTextVar[DEVICE_TYPE]}>&apos;지원서&apos; 페이지로 이동할게요.</p>
      <form method="dialog" className={`${buttonWrapperVar[DEVICE_TYPE]} ${buttonOutside.solid}`}>
        <Link to="/" className={buttonInside.solid}>
          확인
        </Link>
      </form>
    </Dialog>
  );
});

PreventReviewDialog.displayName = 'PreventReviewDialog';

export default PreventReviewDialog;
