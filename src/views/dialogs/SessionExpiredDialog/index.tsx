import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText } from '../style.css';

const SessionExpiredDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const handleLogout = () => {
    localStorage.removeItem('soptApplyAccessToken');
    if (window.location.pathname === '/') {
      location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Dialog ref={ref}>
      <p className={mainText}>로그인 세션이 만료되었어요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid} onClick={handleLogout}>
          다시 로그인 하기
        </button>
      </form>
    </Dialog>
  );
});

SessionExpiredDialog.displayName = 'SessionExpiredDialog';

export default SessionExpiredDialog;