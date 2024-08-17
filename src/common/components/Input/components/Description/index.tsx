import { useContext } from 'react';

import { TextBoxProps } from '@components/Input/types';
import { DeviceTypeContext } from '@store/deviceTypeContext';

import { descriptionFontVar, descriptionVar } from './style.css';

// TextBox 내부 Input 하단의 부가텍스트
const Description = ({ children, styleType = 'default' }: Pick<TextBoxProps, 'children' | 'styleType'>) => {
  const { deviceType } = useContext(DeviceTypeContext);

  return <div className={`${descriptionVar[styleType]} ${descriptionFontVar[deviceType]}`}>{children}</div>;
};

export default Description;
