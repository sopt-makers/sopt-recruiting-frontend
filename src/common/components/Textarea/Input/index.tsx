import { FieldErrors, FieldValues, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';

import { container, errorMsgStyle, maxCountStyle, textCountStyle, textareaStyle, bottomStyle } from './style.css';

import type { TextareaHTMLAttributes } from 'react';

interface InputProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  watch: UseFormWatch<T>;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<FieldValues>;
  maxCount: number;
}

const Input = <T extends FieldValues>({
  watch,
  register,
  name,
  errors,
  maxCount,
  required,
  ...textareaElements
}: InputProps<T>) => {
  const state = errors.name ? 'error' : 'default';
  const textCount = watch(name)?.length;

  return (
    <div className={container}>
      <textarea
        className={textareaStyle[state]}
        {...register(name, {
          ...(required && { required: '필수 입력 항목이에요.' }),
          maxLength: {
            value: maxCount,
            message: '최대 글자 수를 초과했어요.',
          },
        })}
        {...textareaElements}
      />
      <p className={bottomStyle}>
        {errors.name && (
          <span className={errorMsgStyle}>
            <>{errors.name?.message}</>
          </span>
        )}
        <span>
          <span className={textCountStyle}>{textCount || 0}</span>
          <span className={maxCountStyle}>/{maxCount}</span>
        </span>
      </p>
    </div>
  );
};

export default Input;
