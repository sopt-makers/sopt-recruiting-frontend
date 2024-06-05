import { Path, UseFormRegister } from 'react-hook-form';

import { container, errorMsgStyle, maxCountStyle, textCountStyle, textareaStyle, bottomStyle } from './style.css';

import type { TextareaHTMLAttributes } from 'react';

interface IFormValues {
  'First Name': string;
  Age: number;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: unknown;
  errorMsg: string;
  textCount: number;
  maxCount: number;
}

const Textarea = ({
  label,
  register,
  required,
  errors,
  errorMsg,
  textCount,
  maxCount,
  ...textareaElementProps
}: TextareaProps) => {
  const state = errors[label] ? 'error' : 'default';

  return (
    <div className={container}>
      <textarea className={textareaStyle[state]} {...register(label, { required })} {...textareaElementProps} />
      <p className={bottomStyle}>
        {errors[label] && <span className={errorMsgStyle}>{errorMsg}</span>}
        <span>
          <span className={textCountStyle}>{textCount}</span>
          <span className={maxCountStyle}>/{maxCount}</span>
        </span>
      </p>
    </div>
  );
};

export default Textarea;
