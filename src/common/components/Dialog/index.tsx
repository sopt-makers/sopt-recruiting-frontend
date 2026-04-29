import { forwardRef, type DialogHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { light } from 'styles/theme.css';
import { containerVar } from './style.css';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, ...dialogElementProps }: DialogProps, ref) => {
  const { deviceType } = useDeviceType();

  return createPortal(
    <div className={light}>
      <dialog ref={ref} className={containerVar[deviceType]} {...dialogElementProps}>
        {children}
      </dialog>
    </div>,
    document.getElementById('modal')!,
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
