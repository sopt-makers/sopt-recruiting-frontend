import { UseFormReturn } from 'react-hook-form';

export interface SelectBoxProps {
  label: string;
  options: string[];
  size?: 'sm' | 'lg';
  required?: boolean;
  formObject: Pick<UseFormReturn, 'register' | 'setValue' | 'formState' | 'clearErrors'>;
}
