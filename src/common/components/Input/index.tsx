import { container, circle, input, description, error, title } from './style.css';
import { ContainerProps, DescriptionProps, InputProps, TitleProps } from './types';

const Container = ({ children }: ContainerProps) => {
  return <div className={container}>{children}</div>;
};

const Title = ({ children, isRequired }: TitleProps) => {
  return (
    <label className={title}>
      <span>{children}</span>
      {isRequired && <i className={circle} />}
    </label>
  );
};

const Description = ({ children, buttonText, buttonHandler, isError }: DescriptionProps) => {
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

const Input = ({ placeholderText, isRequired, isFixed, errorText, ...inputElementProps }: InputProps) => {
  // isRequired, isFixed에 따라 동적스타일링
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
