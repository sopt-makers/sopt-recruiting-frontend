import { ChangeEvent, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { InputLine, TextBox } from '@components/Input';
import Radio from '@components/Radio';
import SelectBox from '@components/Select';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';
import {
  doubleWrapper,
  profileImage,
  profileLabel,
  profileText,
  profileTextWrapper,
  profileWrapper,
  sectionContainer,
  title,
} from 'views/ApplyPage/style.css';

import { DEFAULT_PROFILE } from './constants';
import IconUser from './icons/IconUser';

const ProfileImage = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger'>;
}) => {
  const [image, setImage] = useState('');

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files && e.target.files[0];
    if (!imageFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };

  return (
    <TextBox label="사진" formObject={formObject} size="lg" required>
      <div className={profileWrapper}>
        <input id="profile" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleChangeImage} />
        <label htmlFor="profile" className={profileLabel}>
          {image ? <img src={image} alt="지원서 프로필 사진" className={profileImage} /> : <IconUser />}
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
  );
};

const DefaultSection = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'setValue'>;
}) => {
  return (
    <section className={sectionContainer}>
      <h2 className={title}>기본 인적사항</h2>
      <ProfileImage formObject={formObject} />
      <div className={doubleWrapper}>
        <TextBox label="이름" formObject={formObject} required size="sm">
          <InputLine label="이름" disabled />
        </TextBox>
        <SelectBox label="성별" options={SELECT_OPTIONS.성별} formObject={formObject} required />
      </div>
      <div className={doubleWrapper}>
        <TextBox label="생년월일" formObject={formObject} required size="sm">
          <InputLine label="생년월일" placeholder="MM/DD/YYYY" />
        </TextBox>
        <TextBox label="연락처" formObject={formObject} required size="sm">
          <InputLine label="연락처" disabled />
        </TextBox>
      </div>
      <TextBox label="이메일" formObject={formObject} required size="lg">
        <InputLine label="이메일" disabled />
      </TextBox>
      <TextBox label="거주지" formObject={formObject} required size="lg">
        <InputLine label="거주지" placeholder="예) 서울특별시 관악구 신림동" />
      </TextBox>
      <TextBox label="지하철역" formObject={formObject} required size="lg">
        <InputLine label="지하철역" placeholder="예) 성신여대입구" />
      </TextBox>
      <div className={doubleWrapper}>
        <TextBox label="학교" formObject={formObject} required size="sm">
          <InputLine label="학교" placeholder="학교 이름을 정확하게 적어주세요." />
        </TextBox>
        <div style={{ margin: '52px 0 0 22px' }}>
          <Radio
            register={formObject.register}
            errors={formObject.formState.errors}
            label={['재학', '휴학 ‧ 수료 ‧ 유예']}
            name="학교"
            required
          />
        </div>
      </div>
      <div className={doubleWrapper}>
        <TextBox label="학과" formObject={formObject} required size="sm">
          <InputLine label="학과" placeholder="학과 이름을 정확하게 적어주세요." />
        </TextBox>
        <SelectBox label="학년" options={SELECT_OPTIONS.학년} formObject={formObject} required />
      </div>
      <SelectBox
        label="이전 기수 활동 여부 (제명 포함)"
        options={SELECT_OPTIONS.이전기수}
        formObject={formObject}
        required
        size="lg"
      />
    </section>
  );
};

export default DefaultSection;
