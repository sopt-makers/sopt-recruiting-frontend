import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { inputStyle, labelStyle, container } from './style.css';

interface OptionProps<T extends FieldValues> {
  children?: string | number;
  label: string;
  name: Path<T>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<T>;
  required: boolean;
}

const Option = <T extends FieldValues>({ label, errors, register, name, required }: OptionProps<T>) => {
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
        />
        <label className={labelStyle} htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Option;
