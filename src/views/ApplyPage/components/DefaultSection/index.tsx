import { UseFormReturn } from 'react-hook-form';

import { TextBox } from '@components/Input';

import { DEFAULT_PROFILE } from './constants';
import IconUser from './icons/IconUser';
import { container, profileLabel, profileText, profileTextWrapper, profileWrapper, title } from './style.css';

const DefaultSection = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger'>;
}) => {
  return (
    <section className={container}>
      <h2 className={title}>기본 인적사항</h2>
      <TextBox label="사진" formObject={formObject} size="lg" required>
        <div className={profileWrapper}>
          <input id="profile" type="file" accept="image/*" style={{ display: 'none' }} />
          <label htmlFor="profile" className={profileLabel}>
            <IconUser />
          </label>
          <ul className={profileTextWrapper}>
            {DEFAULT_PROFILE.map((el) => (
              <li key={el} className={profileText}>
                &#183; {el}
              </li>
            ))}
          </ul>
        </div>
      </TextBox>
    </section>
  );
};

export default DefaultSection;
