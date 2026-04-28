import Dialog from '@components/Dialog';
import { forwardRef } from 'react';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';
import { 문의메일열기 } from '@utils/support';

const SignInBlockedDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const { deviceType } = useDeviceType();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[deviceType]}>보안을 위해 로그인이 제한되었습니다.</p>
      <p className={subTextVar[deviceType]}>
        로그인에 여러 번 실패해 일시적으로 로그인이 제한되었습니다. 계정을 다시 이용하려면 SOPT에 문의해 주세요.
      </p>
      <div className={buttonWrapperVar[deviceType]}>
        <form method="dialog" className={`${buttonOutside.line} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.line}>닫기</button>
        </form>
        <div className={`${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.solid} onClick={문의메일열기}>
            문의하기
          </button>
        </div>
      </div>
    </Dialog>
  );
});

SignInBlockedDialog.displayName = 'SignInBlockedDialog';

export default SignInBlockedDialog;
