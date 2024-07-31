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
}

const Textarea = <T extends FieldValues>({
  name,
  maxCount,
  children,
  required = false,
  extraInput,
  ...textareaElements
}: TextareaProps<T>) => {
  const id = useId();

  return (
    <div className={container}>
      <Label label={id} maxCount={maxCount} required={required}>
        {children}
      </Label>
      {extraInput}
      <Input
        id={id}
        name={name}
        required={required}
        maxCount={maxCount}
        isFileInput={extraInput?.props.defaultFile}
        {...textareaElements}
      />
    </div>
  );
};

export default Textarea;
