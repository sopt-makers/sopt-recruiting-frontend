import Button from '@components/Button';
import { useDevice } from '@hooks/useDevice';

import { buttonVar } from './style.css';
import { InputButtonProps } from './types';

// TextBox 내부 InputLine 우측 버튼
const InputButton = ({ isLoading, text, ...props }: InputButtonProps) => {
  const DEVICE_TYPE = useDevice();
  return (
    <Button isLoading={isLoading} className={buttonVar[DEVICE_TYPE]} {...props}>
      {text}
    </Button>
  );
};

export default InputButton;
