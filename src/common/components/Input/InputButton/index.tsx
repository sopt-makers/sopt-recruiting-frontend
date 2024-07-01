import Button from '@components/Button';

import { textWidth } from './style.css';
import { InputButtonProps } from '../types';

// TextBox 내부 InputLine 우측 버튼
const InputButton = ({ text, ...props }: InputButtonProps) => {
  return (
    <Button className={textWidth} {...props}>
      {text}
    </Button>
  );
};

export default InputButton;
