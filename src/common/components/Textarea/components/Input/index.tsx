import { useContext, useEffect, type TextareaHTMLAttributes } from 'react';
import { type FieldValues, type Path, useFormContext } from 'react-hook-form';

import { DeviceTypeContext } from '@store/deviceTypeContext';

import {
  containerVar,
  errorMsgStyle,
  maxCountStyle,
  textCountStyle,
  textareaStyle,
  bottomStyle,
  textareaHeight,
} from './style.css';

interface InputProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>;
  maxCount: number;
  isFileInput?: boolean;
}

const Input = <T extends FieldValues>({
  name,
  maxCount,
  required,
  isFileInput,
  ...textareaElements
}: InputProps<T>) => {
  const { deviceType } = useContext(DeviceTypeContext);

  const {
    watch,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const state = errors[name] ? 'error' : 'default';
  const textareaSize = isFileInput || maxCount <= 100 ? 'sm' : 'lg';
  const textCount = watch(name)?.length;

  useEffect(() => {
    maxCount < textCount
      ? setError(name, { type: 'maxLength', message: '최대 글자 수를 초과했어요.' })
      : clearErrors(name);
  }, [textCount, maxCount, name, setError, clearErrors]);

  return (
    <div className={containerVar[deviceType]}>
      <textarea
        className={`${textareaStyle[state]} ${textareaHeight[textareaSize]}`}
        {...register(name, {
          ...(required && { required: '필수 입력 항목이에요.' }),
          maxLength: {
            value: maxCount,
            message: '최대 글자 수를 초과했어요.',
          },
        })}
        {...textareaElements}
      />
      <p className={bottomStyle}>
        {errors[name] && (
          <span className={errorMsgStyle}>
            <>{errors[name]?.message}</>
          </span>
        )}
        {!textareaElements.disabled && (
          <span>
            <span className={textCountStyle}>{textCount || 0}</span>
            <span className={maxCountStyle}>/{maxCount}</span>
          </span>
        )}
      </p>
    </div>
  );
};

export default Input;
