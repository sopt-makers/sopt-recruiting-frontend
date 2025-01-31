import { forwardRef, type KeyboardEvent } from 'react';

import Dialog from '@components/Dialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';
import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';

const SessionExpiredDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const { deviceType } = useDeviceType();

  const handlePreventESCKeyPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') e.preventDefault();
  };

  const handleLogout = () => {
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
      <p className={mainTextVar[deviceType]}>로그인을 다시 해주세요.</p>
      <p className={subTextVar[deviceType]}>세션이 만료되었거나 비정상적인 로그인이에요.</p>
      <form
        method="dialog"
        className={`${buttonWrapperVar[deviceType]} ${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
        <AmplitudeEventTrack eventName="click-session-okay">
          <button className={buttonInside.solid} onClick={handleLogout}>
            확인
          </button>
        </AmplitudeEventTrack>
      </form>
    </Dialog>
  );
});

SessionExpiredDialog.displayName = 'SessionExpiredDialog';

export default SessionExpiredDialog;
