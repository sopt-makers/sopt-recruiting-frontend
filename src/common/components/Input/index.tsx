/* eslint-disable indent */
import { createContext, useContext, useEffect, useRef, useState } from 'react';

import formatTimer from '@utils/formatTimer';

import { circle, title, inputLine, containerVar, inputVar, descriptionVar, timer } from './style.css';
import { TextBoxProps, TimerProps } from './types';

const FormContext = createContext({} as Pick<TextBoxProps, 'required' | 'formObject'>);

// TextBox 내부 타이머
export const Timer = ({ isActive, setActive }: TimerProps) => {
  const [seconds, setSeconds] = useState(300);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      setSeconds(300);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      timerRef.current && clearInterval(timerRef.current);
    }

    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [isActive]);

  useEffect(() => {
    if (seconds < 0) {
      setActive(false);
      timerRef.current && clearInterval(timerRef.current);
    }
  }, [seconds]);

  return <span className={timer}>{isActive && formatTimer(seconds)}</span>;
};

// TextBox 내부 Input 및 Button(optional)
export const InputLine = ({
  label,
  pattern,
  validate,
  button,
  errorText,
  children,
  ...inputElementProps
}: Omit<TextBoxProps, 'size' | 'formObject'>) => {
  const {
    required,
    formObject: { register, formState, clearErrors, trigger },
  } = useContext(FormContext);
  const { errors } = formState;

  return (
    <>
      <div className={inputLine}>
        <input
          id={label}
          className={inputVar[errors?.[label] ? 'error' : 'default']}
          {...inputElementProps}
          {...register(label, {
            required: required && '필수 입력 항목이에요',
            pattern:
              pattern && errorText
                ? {
                    value: pattern,
                    message: errorText,
                  }
                : undefined,
            validate: validate,
            onBlur: (e) => {
              if (!pattern || e.currentTarget.value === '') return;
              trigger(label);
            },
            onChange: () => clearErrors && clearErrors(label),
          })}
        />
        {button}
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

// TextBox 내부 Input 하단의 부가텍스트
export const Description = ({ children, styleType = 'default' }: Pick<TextBoxProps, 'children' | 'styleType'>) => (
  <div className={descriptionVar[styleType]}>{children}</div>
);

// TextBox Container
export const TextBox = ({
  children,
  label,
  size = 'md',
  required,
  formObject,
}: Pick<TextBoxProps, 'children' | 'label' | 'size' | 'required' | 'formObject'>) => {
  return (
    <FormContext.Provider value={{ required, formObject }}>
      <div className={containerVar[size]}>
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
