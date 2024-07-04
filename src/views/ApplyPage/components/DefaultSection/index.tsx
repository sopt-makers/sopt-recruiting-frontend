import { ChangeEvent, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { InputLine, TextBox } from '@components/Input';
import Radio from '@components/Radio';
import SelectBox from '@components/Select';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';

import Postcode from './components/Postcode';
import { DEFAULT_PROFILE } from './constants';
import IconUser from './icons/IconUser';
import {
  doubleWrapper,
  errorText,
  profileImage,
  profileLabelVar,
  profileText,
  profileTextWrapper,
  profileWrapper,
  sectionContainer,
  title,
} from './style.css';

const ProfileImage = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch'>;
}) => {
  const {
    register,
    clearErrors,
    formState: { errors },
  } = formObject;
  const [image, setImage] = useState('');

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files && e.target.files[0];
    if (!imageFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    clearErrors && clearErrors('사진');
  };

  return (
    <TextBox label="사진" formObject={formObject} size="lg" required>
      <div className={profileWrapper}>
        <input
          id="사진"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          {...register('사진', {
            required: true && '필수 입력 항목이에요.',
            onChange: handleChangeImage,
          })}
        />
        <div>
          <label htmlFor="사진" className={profileLabelVar[errors['사진'] ? 'error' : 'default']}>
            {image ? <img src={image} alt="지원서 프로필 사진" className={profileImage} /> : <IconUser />}
          </label>
          {errors['사진'] && <p className={errorText}>{errors['사진']?.message as string}</p>}
        </div>
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
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'setValue' | 'watch'>;
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
          <InputLine
            label="생년월일"
            placeholder="YYYY/MM/DD"
            min={VALIDATION_CHECK.birthdate.min}
            max={VALIDATION_CHECK.birthdate.max}
            maxLength={VALIDATION_CHECK.birthdate.maxLength}
            pattern={VALIDATION_CHECK.birthdate.pattern}
            errorText={VALIDATION_CHECK.birthdate.errorText}
            validate={VALIDATION_CHECK.birthdate.validate}
          />
        </TextBox>
        <TextBox label="연락처" formObject={formObject} required size="sm">
          <InputLine label="연락처" disabled />
        </TextBox>
      </div>
      <TextBox label="이메일" formObject={formObject} required size="lg">
        <InputLine label="이메일" disabled />
      </TextBox>
      <Postcode formObject={formObject} />
      <TextBox label="지하철역" formObject={formObject} required size="lg">
        <InputLine label="지하철역" placeholder="예) 성신여대입구" />
      </TextBox>
      <div className={doubleWrapper}>
        <TextBox label="학교" formObject={formObject} required size="sm">
          <InputLine label="학교" placeholder="학교 이름을 정확하게 적어주세요." />
        </TextBox>
        <div style={{ margin: '52px 0 0 22px' }}>
          <Radio formObject={formObject} label={['재학', '휴학 ‧ 수료 ‧ 유예']} name="재학여부" required />
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
