import { createContext } from 'react';

import { circle, containerVar, title } from './style.css';
import { TextBoxProps } from '../types';

export const FormContext = createContext({} as Pick<TextBoxProps, 'required' | 'formObject'>);

// TextBox Container
export const TextBox = ({
  children,
  label,
  name,
  size = 'md',
  required,
  formObject,
}: Pick<TextBoxProps, 'children' | 'label' | 'name' | 'size' | 'required' | 'formObject'>) => {
  return (
    <FormContext.Provider value={{ required, formObject }}>
      <div className={containerVar[size]}>
        <label className={title} htmlFor={name}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
