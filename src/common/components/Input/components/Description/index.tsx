import { TextBoxProps } from '@components/Input/types';

import { descriptionVar } from './style.css';

// TextBox 내부 Input 하단의 부가텍스트
const Description = ({ children, styleType = 'default' }: Pick<TextBoxProps, 'children' | 'styleType'>) => (
  <div className={descriptionVar[styleType]}>{children}</div>
);

export default Description;
