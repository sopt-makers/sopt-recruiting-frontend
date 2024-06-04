import { Path, UseFormRegister } from 'react-hook-form';

import { container, errorMsgStyle, textareaStyle } from './style.css';

import type { ReactNode, TextareaHTMLAttributes } from 'react';

interface IFormValues {
  'First Name': string;
  Age: number;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  label?: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: unknown;
  errorMsg: string;
}

const Textarea = ({
  children,
  label,
  register,
  required,
  errors,
  errorMsg,
  ...textareaElementProps
}: TextareaProps) => {
  const state = errors[label] ? 'error' : 'default';

  return (
    <div className={container}>
      <textarea className={textareaStyle[state]} {...register(label, { required })} {...textareaElementProps}>
        {children}
      </textarea>
      {errors[label] && <p className={errorMsgStyle}>{errorMsg}</p>}
    </div>
  );
};

export default Textarea;
