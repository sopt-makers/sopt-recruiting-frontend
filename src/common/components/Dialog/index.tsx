import { forwardRef, type DialogHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { container } from './style.css';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, ...dialogElementProps }: DialogProps, ref) => {
  return createPortal(
    <dialog ref={ref} className={container} {...dialogElementProps}>
      {children}
    </dialog>,
    document.getElementById('modal')!,
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
