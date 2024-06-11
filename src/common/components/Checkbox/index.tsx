import { IconChevronDown } from '@sopt-makers/icons';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { theme } from 'styles/theme.css';

import { container, checkboxContainer, checkmark, hiddenCheckbox, requireDot, iconStyle, error } from './style.css';

import type { InputHTMLAttributes } from 'react';

interface CheckboxProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | number;
  label: Path<T>;
  showIcon?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  isOpen?: boolean;
}

const Checkbox = <T extends FieldValues>({
  children,
  label,
  register,
  errors,
  showIcon = false,
  required = false,
  isOpen = false,
  onClick,
  ...checkboxElementProps
}: CheckboxProps<T>) => {
  return (
    <>
      <div className={container}>
        <label className={checkboxContainer}>
          <input
            {...register(label, {
              ...(required && { required: '필수 동의 항목이에요' }),
            })}
            type="checkbox"
            className={hiddenCheckbox}
            {...checkboxElementProps}
          />
          <span className={checkmark[errors[label] ? 'error' : 'default']} />
          <span>{children}</span>
          {required && <i className={requireDot} />}
        </label>
        {showIcon && (
          <div className={iconStyle[isOpen ? 'isOpen' : 'default']} onClick={onClick}>
            <IconChevronDown color={theme.color.dropdownButton} />
          </div>
        )}
      </div>
      <p className={error}>
        <>{errors[label]?.message}</>
      </p>
    </>
  );
};

export default Checkbox;
