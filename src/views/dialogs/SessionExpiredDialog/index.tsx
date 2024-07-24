import { track } from '@amplitude/analytics-browser';
import { forwardRef, type KeyboardEvent } from 'react';

import Dialog from '@components/Dialog';

import { buttonInside, buttonOutside, buttonWrapper, mainText, subText } from '../style.css';

const SessionExpiredDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  const handleLogout = () => {
    track('click-session-okay');
    sessionStorage.removeItem('soptApplyAccessToken');
    if (window.location.pathname === '/') {
      location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Dialog ref={ref} onKeyDown={handlePreventESCKeyPress}>
      <p className={mainText}>로그인을 다시 해주세요.</p>
      <p className={subText}>세션이 만료되었거나 비정상적인 로그인이에요.</p>
      <form method="dialog" className={`${buttonWrapper} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid} onClick={handleLogout}>
          확인
        </button>
      </form>
    </Dialog>
  );
});

SessionExpiredDialog.displayName = 'SessionExpiredDialog';

export default SessionExpiredDialog;
