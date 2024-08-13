import { createContext } from 'react';

import { TextBoxProps } from '@components/Input/types';
import { DeviceType, useDevice } from '@hooks/useDevice';

import { circle, containerVar, titleVar } from './style.css';

export const FormContext = createContext({} as Pick<TextBoxProps, 'required'> & { deviceType: DeviceType });

// TextBox Container
export const TextBox = ({
  children,
  label,
  name,
  size = 'md',
  required,
}: Pick<TextBoxProps, 'children' | 'label' | 'name' | 'size' | 'required'>) => {
  const deviceType = useDevice();

  return (
    <FormContext.Provider value={{ required, deviceType }}>
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
