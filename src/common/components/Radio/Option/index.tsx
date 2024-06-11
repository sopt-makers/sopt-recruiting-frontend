import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { inputStyle, labelStyle, container } from './style.css';

interface OptionProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  children?: ReactNode;
  label: string;
  name: Path<T>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<T>;
  required?: boolean;
}

const Option = <T extends FieldValues>({
  label,
  errors,
  register,
  name,
  required = false,
  ...rest
}: OptionProps<T>) => {
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
          name={name}
          value={label}
          {...rest}
        />
        <label className={labelStyle} htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Option;
