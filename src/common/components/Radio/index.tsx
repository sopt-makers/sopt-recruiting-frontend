import { InputHTMLAttributes, useEffect } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import Container from './Container';
import ErrorMessage from './ErrorMessage';
import Option from './Option';

interface RadioProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch' | 'setValue'>;
  label: string[];
  name: Path<T>;
  defaultValue?: string;
}

const Radio = <T extends FieldValues>({ label, name, defaultValue, formObject, ...rest }: RadioProps<T>) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = formObject;

  useEffect(() => {
    setValue(name as string, defaultValue);
  }, [defaultValue, name, setValue]);

  return (
    <>
      <Container>
        {label.map((item: string) => (
          <Option key={item} register={register} errors={errors} label={item} name={name} {...rest} />
        ))}
      </Container>
      <ErrorMessage>
        <>{errors[name]?.message}</>
      </ErrorMessage>
    </>
  );
};

export default Radio;
