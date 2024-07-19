import { createContext } from 'react';

import { circle, containerVar, title } from './style.css';
import { TextBoxProps } from '../types';

export const FormContext = createContext({} as Pick<TextBoxProps, 'required'>);

// TextBox Container
export const TextBox = ({
  children,
  label,
  name,
  size = 'md',
  required,
}: Pick<TextBoxProps, 'children' | 'label' | 'name' | 'size' | 'required'>) => {
  return (
    <FormContext.Provider value={{ required }}>
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
