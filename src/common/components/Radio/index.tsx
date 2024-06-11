import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import Container from './Container';
import ErrorMessage from './ErrorMessage';
import Option from './Option';

interface RadioProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  label: string[];
  name: Path<T>;
}

const Radio = <T extends FieldValues>({ register, errors, label, name, ...rest }: RadioProps<T>) => {
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
