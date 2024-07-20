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

{
  /* <TextareaHeader maxCount={maxCount} required>
            {`3. 최근 1년 이내로 머릿속으로만 생각하고 있던 계획을 행동으로 옮겨본 경험이 있나요? 만약 있다면 어떤. 계획이. 었으며, 행동을 통해 어떤 성장을 이루어냈는지에 대해 구체적으로 서술해 주세요. 만약 없다면, 해당 계획을 행동으로 옮기기 위한 액션 플랜을 서술해 주세요.`}
          </TextareaHeader>
          <Textarea label="q1" register={register} watch={watch} required errors={errors} maxCount={maxCount} /> */
}
