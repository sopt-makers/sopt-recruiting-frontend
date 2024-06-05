import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { container, errorMsgStyle, maxCountStyle, textCountStyle, textareaStyle, bottomStyle } from './style.css';

import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  errors: FieldErrors<FieldValues>;
  errorMsg: string;
  textCount: number;
  maxCount: number;
}

const Textarea = <T extends FieldValues>({
  label,
  register,
  required,
  errors,
  errorMsg,
  textCount,
  maxCount,
  ...textareaElementProps
}: TextareaProps<T>) => {
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
