/* eslint-disable indent */
import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { inputLine, inputVar } from './style.css';
import { formatBirthdate } from './utils/formatBirthdate';
import { formatPhoneNumber } from './utils/formatPhoneNumber';
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
  const [value, setValue] = useState('');
  const {
    required,
    formObject: { register, formState, clearErrors, trigger },
  } = useContext(FormContext);
  const { errors } = formState;
  const { maxLength, minLength } = inputElementProps;
  const { defaultValue } = inputElementProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors && clearErrors(label);

    if (label === '생년월일') {
      const formattedValue = formatBirthdate(e.target.value);
      setValue(formattedValue);
    }

    if (label === '연락처') {
      const formattedValue = formatPhoneNumber(e.target.value);
      setValue(formattedValue);
    }
  };

  useEffect(() => {
    if (label === '생년월일' && defaultValue) {
      setValue(defaultValue);
    }
  }, [label, setValue, defaultValue]);

  return (
    <>
      <div className={inputLine}>
        <input
          id={label}
          defaultValue={defaultValue}
          value={label === '연락처' || label === '생년월일' ? value : undefined}
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
            onChange: handleChange,
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
