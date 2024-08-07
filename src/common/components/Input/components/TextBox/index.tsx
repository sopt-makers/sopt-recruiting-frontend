import { createContext } from 'react';

import { TextBoxProps } from '@components/Input/types';
import { useDevice } from '@hooks/useDevice';

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
  const DEVICE_TYPE = useDevice();

  return (
    <FormContext.Provider value={{ required }}>
      <div className={containerVar[DEVICE_TYPE === 'DESK' ? size : DEVICE_TYPE]}>
        <label className={titleVar[DEVICE_TYPE]} htmlFor={name}>
          <span>{label}</span>
          {required && <i className={circle} />}
        </label>
        {children}
      </div>
    </FormContext.Provider>
  );
};
