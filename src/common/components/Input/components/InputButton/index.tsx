import { useContext } from 'react';

import Button from '@components/Button';

import { buttonVar } from './style.css';
import { InputButtonProps } from './types';
import { FormContext } from '../TextBox';

// TextBox 내부 InputLine 우측 버튼
const InputButton = ({ isLoading, text, ...props }: InputButtonProps) => {
  const { deviceType } = useContext(FormContext);
  return (
    <Button isLoading={isLoading} className={buttonVar[deviceType]} {...props}>
      {text}
    </Button>
  );
};

export default InputButton;
