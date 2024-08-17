import { createContext } from 'react';

import { TextBoxProps } from '@components/Input/types';

import { circle, containerVar, titleVar } from './style.css';

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
      <div className={containerVar[deviceType === 'DESK' ? size : deviceType]}>
        <label className={titleVar[deviceType]} htmlFor={name}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
