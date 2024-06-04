import { InputHTMLAttributes, ReactNode } from 'react';

import { container, circle, input, description, error, title } from './style.css';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={container}>{children}</div>;
};

const Title = ({ children, isRequired }: { children: string; isRequired?: boolean }) => {
  return (
    <label className={title}>
      <span>{children}</span>
      {isRequired && <i className={circle} />}
    </label>
  );
};

const Description = ({
  children,
  buttonText,
  buttonHandler,
  isError,
}: {
  children: string;
  buttonText?: string;
  buttonHandler?: () => void;
  isError?: boolean;
}) => {
  return (
    <div className={`${description} ${isError && error}`}>
      <p>{children}</p>
      {buttonText && (
        <button type="button" style={{ cursor: 'pointer' }} onClick={buttonHandler}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export interface InputProps extends Pick<InputHTMLAttributes<HTMLInputElement>, 'maxLength' | 'type' | 'pattern'> {
  placeholderText: string;
  //size?: 'xs' | 'sm' | 'md' | 'lg'; 나중에하겠습니다...
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
}

const Input = ({ placeholderText, isRequired, isFixed, errorText, ...inputElementProps }: InputProps) => {
  return (
    <>
      <input className={input} placeholder={placeholderText} {...inputElementProps} />
      {errorText && <Description isError>{errorText}</Description>}
      {/* 에러 조건 추가 */}
    </>
  );
};

const TextBox = {
  Container,
  Title,
  Description,
  Input,
};

export default TextBox;
