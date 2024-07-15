import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { container, checkboxContainer, checkmark, hiddenCheckbox, requireDot, error } from './style.css';

import type { InputHTMLAttributes } from 'react';

interface CheckboxProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | number;
  name: Path<T>;
  showIcon?: boolean;
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch'>;
}

const Checkbox = <T extends FieldValues>({
  children,
  name,
  formObject,
  required = false,
  ...checkboxElementProps
}: CheckboxProps<T>) => {
  const {
    register,
    formState: { errors },
  } = formObject;
  return (
    <>
      <div className={container}>
        <label className={checkboxContainer}>
          <input
            {...register(name, {
              ...(required && { required: '필수 동의 항목이에요.' }),
            })}
            type="checkbox"
            className={hiddenCheckbox}
            {...checkboxElementProps}
          />
          <span className={checkmark[errors && errors.name ? 'error' : 'default']} />
          <span>{children}</span>
          {required && <i className={requireDot} />}
        </label>
      </div>
      <p className={error}>
        <>{errors && errors.name?.message}</>
      </p>
    </>
  );
};

export default Checkbox;
