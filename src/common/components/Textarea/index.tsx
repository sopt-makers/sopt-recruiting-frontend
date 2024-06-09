import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { container, errorMsgStyle, maxCountStyle, textCountStyle, textareaStyle, bottomStyle } from './style.css';

import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  errorMsg: string;
  textCount: number;
  maxCount: number;
  required?: boolean;
}

const Textarea = <T extends FieldValues>({
  label,
  register,
  errors,
  errorMsg,
  textCount,
  maxCount,
  required = false,
  ...textareaElements
}: TextareaProps<T>) => {
  const state = errors[label] ? 'error' : 'default';

  return (
    <div className={container}>
      <textarea className={textareaStyle[state]} {...register(label, { required })} {...textareaElements} />
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
