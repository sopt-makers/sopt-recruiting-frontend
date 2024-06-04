import { Path, UseFormRegister } from 'react-hook-form';

import { textareaStyle } from './style.css';

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
}

const Textarea = ({ children, label, register, required, ...textareaElementProps }: TextareaProps) => {
  return (
    <>
      <label>{label}</label>
      <textarea className={textareaStyle} {...register(label, { required })} {...textareaElementProps}>
        {children}
      </textarea>
    </>
  );
};

export default Textarea;
