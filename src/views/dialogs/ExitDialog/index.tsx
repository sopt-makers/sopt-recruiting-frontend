import { forwardRef } from 'react';

import Dialog from '@components/Dialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

interface ExitDialogProps {
  onExit: () => void;
  onCancel?: () => void;
}

const ExitDialog = forwardRef<HTMLDialogElement, ExitDialogProps>(({ onExit, onCancel }, ref) => {
  const { deviceType } = useDeviceType();

  return (
    <Dialog ref={ref}>
      <p className={mainTextVar[deviceType]}>페이지에서 나가시겠어요?</p>
      <p className={subTextVar[deviceType]}>저장하지 않은 변경사항은 사라져요.</p>
      <div className={buttonWrapperVar[deviceType]}>
        <form method="dialog" className={`${buttonOutside.line} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.line} onClick={onCancel}>돌아가기</button>
        </form>
        <form method="dialog" className={`${buttonOutside.solid} ${buttonOutsideVar[deviceType]}`}>
          <button className={buttonInside.solid} onClick={onExit}>나가기</button>
        </form>
      </div>
    </Dialog>
  );
});

ExitDialog.displayName = 'ExitDialog';

export default ExitDialog;
