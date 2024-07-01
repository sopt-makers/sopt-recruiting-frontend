import Button from '@components/Button';

import { InputButtonProps } from '../types';

// TextBox 내부 InputLine 우측 버튼
const InputButton = ({ text, ...props }: InputButtonProps) => {
  return (
    <Button style={{ width: 148 }} {...props}>
      {text}
    </Button>
  );
};

export default InputButton;
