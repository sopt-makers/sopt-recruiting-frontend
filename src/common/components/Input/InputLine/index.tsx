/* eslint-disable indent */
import { useContext } from 'react';

import { inputLine, inputVar } from './style.css';
import Description from '../Description';
import { FormContext } from '../TextBox';
import { TextBoxProps } from '../types';

// TextBox 내부 Input
const InputLine = ({
  label,
  pattern,
  validate,
  errorText,
  children,
  ...inputElementProps
}: Omit<TextBoxProps, 'size' | 'formObject'>) => {
  const {
    required,
    formObject: { register, formState, clearErrors, trigger },
  } = useContext(FormContext);
  const { errors } = formState;
  const { maxLength, minLength } = inputElementProps;

  return (
    <>
      <div className={inputLine}>
        <input
          id={label}
          className={inputVar[errors?.[label] ? 'error' : 'default']}
          {...inputElementProps}
          {...register(label, {
            required: required && '필수 입력 항목이에요.',
            pattern: {
              value: pattern || /.*/,
              message: errorText || '',
            },
            maxLength: {
              value: maxLength || 9999,
              message: `최대 ${maxLength}자 까지 입력할 수 있어요.`,
            },
            minLength: {
              value: minLength || 0,
              message: `최소 ${minLength}자 이상 입력해 주세요.`,
            },
            validate: validate,
            onBlur: (e) => {
              if (!pattern || e.currentTarget.value === '') return;
              trigger(label);
            },
            onChange: () => clearErrors && clearErrors(label),
          })}
        />
        {children}
      </div>
      {errors[label] && (
        <Description styleType="error">
          <p>{errors[label]?.message as string}</p>
        </Description>
      )}
    </>
  );
};

export default InputLine;
