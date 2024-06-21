import { createContext } from 'react';

import { circle, containerVar, title } from './style.css';
import { TextBoxProps } from '../types';

export const FormContext = createContext({} as Pick<TextBoxProps, 'required' | 'formObject'>);

// TextBox Container
export const TextBox = ({
  children,
  label,
  size = 'md',
  required,
  formObject,
}: Pick<TextBoxProps, 'children' | 'label' | 'size' | 'required' | 'formObject'>) => {
  return (
    <FormContext.Provider value={{ required, formObject }}>
      <div className={containerVar[size]}>
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
