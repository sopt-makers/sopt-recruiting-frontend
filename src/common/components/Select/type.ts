import { DefaultValues, FieldErrors, FieldValues, Path, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface FormObjectProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  formState: {
    defaultValues: DefaultValues<any>;
    dirtyFields: object;
    errors: FieldErrors<any>;
    clearErrors: (name?: string | string[]) => void;
  };
}
export interface SelectBoxProps {
  label: Path<FieldValues>;
  options: string[];
  size?: 'sm' | 'lg';
  isRequired?: boolean;
  formObject: FormObjectProps;
}
