import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { inputStyle, labelStyle, container, errorStyle } from './style.css';

import type { InputHTMLAttributes } from 'react';

interface RadioProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  children?: string | number;
  label: string;
  name: Path<T>;
  isLast?: boolean;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<T>;
}

const Radio = <T extends FieldValues>({
  label,
  errors,
  register,
  name,
  required,
  isLast = false,
  ...radioElementProps
}: RadioProps<T>) => {
  return (
    <>
      <div className={container}>
        <input
          {...register(name, {
            ...(required && { required: '필수 선택 항목이에요' }),
          })}
          className={inputStyle[errors[name] ? 'error' : 'default']}
          type="radio"
          id={label}
          {...radioElementProps}
        />
        <label className={labelStyle} htmlFor={label}>
          {label}
        </label>
      </div>
      {isLast && (
        <p className={errorStyle}>
          <>{errors[name]?.message}</>
        </p>
      )}
    </>
  );
};

export default Radio;
