import { forwardRef, type DialogHTMLAttributes, type ReactNode } from 'react';

import { container } from './style.css';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children?: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, ...dialogElementProps }: DialogProps, ref) => {
  return (
    <dialog ref={ref} className={container} {...dialogElementProps}>
      {children}
    </dialog>
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
