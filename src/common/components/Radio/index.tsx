import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import Container from './Container';
import ErrorMessage from './ErrorMessage';
import Option from './Option';

interface RadioProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch'>;
  label: string[];
  name: Path<T>;
}

const Radio = <T extends FieldValues>({ label, name, formObject, ...rest }: RadioProps<T>) => {
  const {
    register,
    formState: { errors },
  } = formObject;
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
