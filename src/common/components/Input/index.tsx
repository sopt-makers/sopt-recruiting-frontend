/* eslint-disable indent */
import { createContext, useContext } from 'react';

import { circle, title, inputLine, containerVar, inputVar, descriptionVar } from './style.css';
import { TextBoxProps } from './types';

const ThemeContext = createContext({} as Pick<TextBoxProps, 'required' | 'formObject'>);

const InputLine = ({
  label,
  pattern,
  validate,
  button,
  errorText,
  ...inputElementProps
}: Omit<TextBoxProps, 'size' | 'children' | 'formObject'>) => {
  const {
    required,
    formObject: {
      register,
      formState: { errors },
      clearErrors,
    },
  } = useContext(ThemeContext);
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
          })}
          onChange={() => clearErrors && clearErrors(label)}
        />
        {button}
      </div>
      {errors[label] && (
        <Description styleType="error">
          <p>{errors[label].message}</p>
        </Description>
      )}
    </>
  );
};

const Description = ({ children, styleType = 'default' }: Pick<TextBoxProps, 'children' | 'styleType'>) => (
  <div className={descriptionVar[styleType]}>{children}</div>
);

const Container = ({
  children,
  label,
  size = 'md',
  required,
  formObject,
}: Pick<TextBoxProps, 'children' | 'label' | 'size' | 'required' | 'formObject'>) => {
  return (
    <ThemeContext.Provider value={{ required, formObject }}>
      <div className={containerVar[size]}>
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const TextBox = {
  Container,
  InputLine,
  Description,
};

export default TextBox;
