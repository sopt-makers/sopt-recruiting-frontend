import { TextBoxProps } from '@components/Input/types';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { descriptionFontVar, descriptionVar } from './style.css';

// TextBox 내부 Input 하단의 부가텍스트
const Description = ({ children, styleType = 'default' }: Pick<TextBoxProps, 'children' | 'styleType'>) => {
  const { deviceType } = useDeviceType();

  return <div className={`${descriptionVar[styleType]} ${descriptionFontVar[deviceType]}`}>{children}</div>;
};

export default Description;
