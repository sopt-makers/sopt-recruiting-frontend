import { UseFormReturn } from 'react-hook-form';

import { container, label, link } from './style.css';

const LinkInput = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'watch' | 'clearErrors' | 'trigger'>;
}) => {
  const {
    register,
    formState: { errors },
  } = formObject;

  return (
    <label htmlFor="link-input" className={container[errors['link-input'] ? 'error' : 'default']}>
      <span className={label}>링크</span>
      <input
        id="link-input"
        className={link}
        type="url"
        placeholder="https://www.sopt.org/recruit"
        {...register('link-input', {
          ...{ required: '필수 입력 항목이에요' },
        })}
      />
    </label>
  );
};

export default LinkInput;