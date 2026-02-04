import { type ReactElement, type TextareaHTMLAttributes, useId } from 'react';

import Input from './components/Input';
import Label from './components/Label';
import { container } from './style.css';

import type { FieldValues, Path } from 'react-hook-form';

interface TextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>;
  maxCount: number;
  children: string;
  extraInput?: ReactElement;
  onlyFileUpload: boolean;
  questionOrder?: number;
}

const Textarea = <T extends FieldValues>({
  name,
  maxCount,
  children,
  required = false,
  extraInput,
  onlyFileUpload = false,
  questionOrder,
  ...textareaElements
}: TextareaProps<T>) => {
  const id = useId();

  return (
    <div className={container}>
      <Label label={id} maxCount={maxCount} required={required} questionOrder={questionOrder}>
        {children}
      </Label>
      {extraInput}
      {!onlyFileUpload && (
        <Input
          id={id}
          name={name}
          required={required}
          maxCount={maxCount}
          isFileInput={extraInput?.props.defaultFile}
          {...textareaElements}
        />
      )}
    </div>
  );
};

export default Textarea;
