import { createContext } from 'react';

import { TextBoxProps } from '@components/Input/types';

import { circle, container, titleVar } from './style.css';

export const FormContext = createContext({} as Pick<TextBoxProps, 'required'>);

// TextBox Container
export const TextBox = ({
  children,
  label,
  name,
  required,
}: Pick<TextBoxProps, 'children' | 'label' | 'name' | 'size' | 'required'>) => {
  return (
    <FormContext.Provider value={{ required }}>
      <div className={container}>
        <label className={titleVar} htmlFor={name}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
