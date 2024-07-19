import { InputHTMLAttributes, useEffect } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

import Container from './Container';
import ErrorMessage from './ErrorMessage';
import Option from './Option';

interface RadioProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  label: string[];
  name: Path<T>;
  defaultValue?: string;
}

const Radio = <T extends FieldValues>({ label, name, defaultValue, ...rest }: RadioProps<T>) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

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
