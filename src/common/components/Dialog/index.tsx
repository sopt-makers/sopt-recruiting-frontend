import { forwardRef, type DialogHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useDevice } from '@hooks/useDevice';

import { containerVar } from './style.css';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, ...dialogElementProps }: DialogProps, ref) => {
  const DEVICE_TYPE = useDevice();

  return createPortal(
    <dialog ref={ref} className={containerVar[DEVICE_TYPE]} {...dialogElementProps}>
      {children}
    </dialog>,
    document.getElementById('modal')!,
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
