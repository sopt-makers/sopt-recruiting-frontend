import { ChangeEvent, useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { inputFontVar, inputLineVar, inputVar } from './style.css';
import { formatBirthdate } from './utils/formatBirthdate';
import { formatPhoneNumber } from './utils/formatPhoneNumber';
import { TextBoxProps } from '../../types';
import Description from '../Description';
import { FormContext } from '../TextBox';

// TextBox 내부 Input
const InputLine = ({
  name,
  pattern,
  validate,
  errorText,
  children,
  ...inputElementProps
}: Omit<TextBoxProps, 'label' | 'size'>) => {
  const {
    register,
    formState: { errors },
    clearErrors,
    trigger,
    setValue,
  } = useFormContext();
  const { required, deviceType } = useContext(FormContext);
  const { maxLength, minLength } = inputElementProps;
  const { defaultValue } = inputElementProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors && errors[name] && clearErrors(name);

    if (name === 'birthday') {
      const formattedValue = formatBirthdate(e.target.value);
      setValue('birthday', formattedValue);
    }
    if (name === 'phone') {
      const formattedValue = formatPhoneNumber(e.target.value);
      setValue('phone', formattedValue);
    }
  };

  return (
    <>
      <div className={inputLineVar[deviceType]}>
        <input
          id={name}
          defaultValue={defaultValue}
          className={`${inputVar[errors[name] ? 'error' : 'default']} ${inputFontVar[deviceType]}`}
          {...inputElementProps}
          {...register(name, {
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
              message: `최소 ${minLength}자 이상 입력해주세요.`,
            },
            validate: validate,
            onBlur: (e) => {
              if (!pattern || e.currentTarget.value === '') return;
              trigger(name);
            },
            onChange: handleChange,
          })}
        />
        {children}
      </div>
      {errors[name] && (
        <Description styleType="error">
          <p>{errors[name]?.message as string}</p>
        </Description>
      )}
    </>
  );
};

export default InputLine;
