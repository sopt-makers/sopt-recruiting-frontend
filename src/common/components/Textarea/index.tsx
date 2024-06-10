import { useState, type ChangeEvent, type TextareaHTMLAttributes } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { container, errorMsgStyle, maxCountStyle, textCountStyle, textareaStyle, bottomStyle } from './style.css';

interface TextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  maxCount: number;
  required?: boolean;
}

const Textarea = <T extends FieldValues>({
  label,
  register,
  errors,
  maxCount,
  onChange,
  required = false,
  ...textareaElements
}: TextareaProps<T>) => {
  const [textCount, setTextCount] = useState(0);
  const state = errors[label] ? 'error' : 'default';

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.target.value.length);
    onChange && onChange(e);
  };

  return (
    <div className={container}>
      <textarea
        className={textareaStyle[state]}
        {...register(label, {
          ...(required && { required: '필수 입력 항목이에요' }),
          maxLength: {
            value: maxCount,
            message: '최대 글자 수를 초과했어요',
          },
        })}
        {...textareaElements}
        onChange={handleInputChange}
      />
      <p className={bottomStyle}>
        {errors[label] && (
          <span className={errorMsgStyle}>
            <>{errors[label]?.message}</>
          </span>
        )}
        <span>
          <span className={textCountStyle}>{textCount}</span>
          <span className={maxCountStyle}>/{maxCount}</span>
        </span>
      </p>
    </div>
  );
};

export default Textarea;
