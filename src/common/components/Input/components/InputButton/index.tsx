import Button from '@components/Button';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonVar } from './style.css';
import { InputButtonProps } from './types';

// TextBox 내부 InputLine 우측 버튼
const InputButton = ({ isLoading, text, ...props }: InputButtonProps) => {
  const { deviceType } = useDeviceType();
  return (
    <Button isLoading={isLoading} className={buttonVar[deviceType]} {...props}>
      {text}
    </Button>
  );
};

export default InputButton;
