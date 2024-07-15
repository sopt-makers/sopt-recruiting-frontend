import { ChangeEvent, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { InputLine, TextBox } from '@components/Input';
import Radio from '@components/Radio';
import SelectBox from '@components/Select';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';
import { Applicant } from 'views/ApplyPage/types';

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
  pic,
  formObject,
}: {
  pic?: string;
  formObject: Pick<
    UseFormReturn,
    'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch' | 'setValue' | 'getValues' | 'setError'
  >;
}) => {
  const {
    register,
    clearErrors,
    formState: { errors },
  } = formObject;
  const [image, setImage] = useState('');
  const [isFileSizeExceeded, setIsFileSizeExceeded] = useState('');
  const isError = isFileSizeExceeded || errors['사진'];

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (!imageFile) return;

    const LIMIT_SIZE = 1024 ** 2 * 10; // 10MB
    if (LIMIT_SIZE < imageFile.size) {
      setIsFileSizeExceeded(VALIDATION_CHECK.IDPhoto.errorText);
      return;
    }

    clearErrors && clearErrors('사진');
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setIsFileSizeExceeded('');
      setImage(reader.result as string);
    };
  };

  return (
    <TextBox name="사진" formObject={formObject} size="lg" required>
      <div className={profileWrapper}>
        <input
          id="사진"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          style={{ display: 'none' }}
          {...register('사진', {
            required: !pic && true && '필수 입력 항목이에요.',
            onChange: handleChangeImage,
          })}
        />
        <div>
          <label htmlFor="사진" className={profileLabelVar[isError ? 'error' : 'default']}>
            {pic || image ? <img src={image || pic} alt="지원서 프로필 사진" className={profileImage} /> : <IconUser />}
            {isError && <p className={errorText}>{isFileSizeExceeded || (errors['사진']?.message as string)}</p>}
          </label>
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
  refCallback,
  applicantDraft,
  formObject,
}: {
  refCallback?: (elem: HTMLSelectElement) => void;
  applicantDraft?: Applicant;
  formObject: Pick<
    UseFormReturn,
    'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch' | 'setValue' | 'getValues' | 'setError'
  >;
}) => {
  const {
    address,
    birthday,
    college,
    email,
    gender,
    major,
    mostRecentSeason,
    name,
    nearestStation,
    phone,
    pic,
    univYear,
    leaveAbsence,
  } = applicantDraft || {};

  return (
    <section ref={refCallback} id="default" className={sectionContainer}>
      <h2 className={title}>기본 인적사항</h2>
      <ProfileImage pic={pic} formObject={formObject} />
      <div className={doubleWrapper}>
        <TextBox name="이름" formObject={formObject} required size="sm">
          <InputLine value={name} name="이름" readOnly />
        </TextBox>
        <SelectBox
          defaultValue={gender}
          placeholder="성별을 선택해주세요."
          label="성별"
          name="성별"
          options={SELECT_OPTIONS.성별}
          formObject={formObject}
          required
        />
      </div>
      <div className={doubleWrapper}>
        <TextBox name="생년월일" formObject={formObject} required size="sm">
          <InputLine
            name="생년월일"
            placeholder="YYYY/MM/DD"
            defaultValue={birthday}
            min={VALIDATION_CHECK.birthdate.min}
            max={VALIDATION_CHECK.birthdate.max}
            maxLength={VALIDATION_CHECK.birthdate.maxLength}
            pattern={VALIDATION_CHECK.birthdate.pattern}
            errorText={VALIDATION_CHECK.birthdate.errorText}
            validate={VALIDATION_CHECK.birthdate.validate}
          />
        </TextBox>
        <TextBox name="연락처" formObject={formObject} required size="sm">
          <InputLine value={phone} name="연락처" readOnly />
        </TextBox>
      </div>
      <TextBox name="이메일" formObject={formObject} required size="lg">
        <InputLine value={email} name="이메일" readOnly />
      </TextBox>
      <Postcode addressDraft={address} formObject={formObject} />
      <TextBox name="지하철역" formObject={formObject} required size="lg">
        <InputLine
          defaultValue={nearestStation}
          name="지하철역"
          placeholder="역의 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;역)"
          maxLength={VALIDATION_CHECK.subway.maxLength}
          pattern={VALIDATION_CHECK.subway.pattern}
          errorText={VALIDATION_CHECK.subway.errorText}
        />
      </TextBox>
      <div className={doubleWrapper}>
        <TextBox name="학교" formObject={formObject} required size="sm">
          <InputLine
            defaultValue={college}
            name="학교"
            placeholder="학교 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;대학교)"
            maxLength={VALIDATION_CHECK.textInput.maxLength}
            pattern={VALIDATION_CHECK.textInput.pattern}
            errorText={VALIDATION_CHECK.textInput.errorText}
          />
        </TextBox>
        <div style={{ margin: '52px 0 0 22px' }}>
          <Radio
            defaultValue={leaveAbsence == undefined ? undefined : leaveAbsence ? '재학' : '휴학 ‧ 수료 ‧ 유예'}
            formObject={formObject}
            label={['재학', '휴학 ‧ 수료 ‧ 유예']}
            name="재학여부"
            required
          />
        </div>
      </div>
      <div className={doubleWrapper}>
        <TextBox name="학과" formObject={formObject} required size="sm">
          <InputLine
            defaultValue={major}
            name="학과"
            placeholder="학과 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;학과)"
            maxLength={VALIDATION_CHECK.textInput.maxLength}
            pattern={VALIDATION_CHECK.textInput.pattern}
            errorText={VALIDATION_CHECK.textInput.errorText}
          />
        </TextBox>
        <SelectBox
          defaultValue={univYear}
          label="학년"
          name="학년"
          placeholder="학년을 선택해주세요."
          options={SELECT_OPTIONS.학년}
          formObject={formObject}
          required
        />
      </div>
      <SelectBox
        defaultValue={mostRecentSeason === 0 ? '해당사항 없음' : mostRecentSeason}
        label="이전 기수 활동 여부 (제명 포함)"
        name="이전 기수 활동 여부 (제명 포함)"
        placeholder="가장 최근에 활동했던 기수를 선택해주세요."
        options={SELECT_OPTIONS.이전기수}
        formObject={formObject}
        required
        size="lg"
      />
    </section>
  );
};

export default DefaultSection;
