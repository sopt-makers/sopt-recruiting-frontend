import { ReactNode, TextareaHTMLAttributes, useId } from 'react';
import { type FieldValues, type Path, useFormContext } from 'react-hook-form';

import Input from './components/Input';
import Label from './components/Label';
import { container } from './style.css';

interface TextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>;
  maxCount: number;
  children: string | number;
  extraInput?: ReactNode;
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
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={container}>
      <Label label={id} maxCount={maxCount} required={required}>
        {children}
      </Label>
      {extraInput}
      <Input
        id={id}
        name={name}
        register={register}
        watch={watch}
        required={required}
        errors={errors}
        maxCount={maxCount}
        {...textareaElements}
      />
    </div>
  );
};

export default Textarea;
