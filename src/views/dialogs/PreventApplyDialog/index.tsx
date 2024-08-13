import { forwardRef, type KeyboardEvent } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText } from '../style.css';

const PreventApplyDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  return (
    <Dialog ref={ref} onKeyDown={handlePreventESCKeyPress}>
      <p className={mainText}>지원서 제출 기한이 지났어요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid}>확인</button>
      </form>
    </Dialog>
  );
});

PreventApplyDialog.displayName = 'PreventApplyDialog';

export default PreventApplyDialog;
