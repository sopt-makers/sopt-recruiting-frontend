import { track } from '@amplitude/analytics-browser';
import { forwardRef, type KeyboardEvent } from 'react';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';

import { buttonInside, buttonOutside, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const SessionExpiredDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const DEVICE_TYPE = useDevice();

  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  const handleLogout = () => {
    track('click-session-okay');
    localStorage.removeItem('soptApplyAccessToken');
    localStorage.removeItem('soptApplyAccessTokenExpiredTime');
    if (window.location.pathname === '/') {
      location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Dialog ref={ref} onKeyDown={handlePreventESCKeyPress}>
      <p className={mainTextVar[DEVICE_TYPE]}>로그인을 다시 해주세요.</p>
      <p className={subTextVar[DEVICE_TYPE]}>세션이 만료되었거나 비정상적인 로그인이에요.</p>
      <form method="dialog" className={`${buttonWrapperVar[DEVICE_TYPE]} ${buttonOutside.solid}`}>
        <button className={buttonInside.solid} onClick={handleLogout}>
          확인
        </button>
      </form>
    </Dialog>
  );
});

SessionExpiredDialog.displayName = 'SessionExpiredDialog';

export default SessionExpiredDialog;
