import { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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

interface ProfileImageProps {
  disabled: boolean;
  pic?: string;
}

const ProfileImage = ({ disabled, pic }: ProfileImageProps) => {
  const {
    register,
    clearErrors,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();
  const [image, setImage] = useState('');

  const hasImage = image !== 'max-size' && (pic || image);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    // TEST
    console.log('IMAGE : ', imageFile);
    if (!imageFile) {
      // TEST
      console.log('NO IMAGE');
      return;
    }

    const LIMIT_SIZE = 1024 ** 2 * 10; // 10MB
    if (LIMIT_SIZE < imageFile.size) {
      // TEST
      console.log('🤬ERROR : ', imageFile);
      setValue('picture', null);
      setError('picture', { type: 'max-size', message: VALIDATION_CHECK.IDPhoto.errorText });
      setImage('max-size');

      return;
    }

    clearErrors && clearErrors('picture');
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      clearErrors('picture');
      setImage(reader.result as string);
    };
  };

  return (
    <TextBox label="사진" name="picture" size="lg" required>
      <div className={profileWrapper}>
        <input
          id="picture"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          style={{ display: 'none' }}
          disabled={disabled}
          {...register('picture', {
            required: !hasImage && '필수 입력 항목이에요.',
            onChange: handleChangeImage,
          })}
        />
        <div>
          <label
            htmlFor="picture"
            className={profileLabelVar[disabled ? 'disabled' : errors.picture ? 'error' : 'default']}>
            {hasImage ? (
              <img src={image || pic} alt="지원서 프로필 사진" className={`amp-block ${profileImage}`} />
            ) : (
              <IconUser />
            )}
            {errors.picture && <p className={errorText}>{errors.picture?.message as string}</p>}
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

interface DefaultSectionProps {
  isMakers?: boolean;
  isReview: boolean;
  refCallback?: (elem: HTMLSelectElement) => void;
  applicantDraft?: Applicant;
}

const DefaultSection = ({ isMakers, isReview, refCallback, applicantDraft }: DefaultSectionProps) => {
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
      <ProfileImage pic={pic} disabled={isReview} />
      <div className={doubleWrapper}>
        <TextBox label="이름" name="name" required size="sm">
          <InputLine value={name} name="name" readOnly disabled={isReview} />
        </TextBox>
        <SelectBox
          defaultValue={gender}
          placeholder="성별을 선택해주세요."
          label="성별"
          name="gender"
          options={SELECT_OPTIONS.gender}
          required
          disabled={isReview}
        />
      </div>
      <div className={doubleWrapper}>
        <TextBox label="생년월일" name="birthday" required size="sm">
          <InputLine
            name="birthday"
            placeholder="YYYY/MM/DD"
            defaultValue={birthday}
            min={VALIDATION_CHECK.birthdate.min}
            max={VALIDATION_CHECK.birthdate.max}
            maxLength={VALIDATION_CHECK.birthdate.maxLength}
            pattern={VALIDATION_CHECK.birthdate.pattern}
            errorText={VALIDATION_CHECK.birthdate.errorText}
            validate={VALIDATION_CHECK.birthdate.validate}
            disabled={isReview}
          />
        </TextBox>
        <TextBox label="연락처" name="phone" required size="sm">
          <InputLine value={phone} name="phone" readOnly disabled={isReview} />
        </TextBox>
      </div>
      <TextBox label="이메일" name="email" required size="lg">
        <InputLine value={email} name="email" readOnly disabled={isReview} />
      </TextBox>
      <Postcode addressDraft={address} disabled={isReview} />
      <TextBox label="지하철역" name="nearestStation" required size="lg">
        <InputLine
          defaultValue={nearestStation}
          name="nearestStation"
          placeholder="역의 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;역)"
          maxLength={VALIDATION_CHECK.subway.maxLength}
          pattern={VALIDATION_CHECK.subway.pattern}
          errorText={VALIDATION_CHECK.subway.errorText}
          disabled={isReview}
        />
      </TextBox>
      <div className={doubleWrapper}>
        <TextBox label="학교" name="college" required size="sm">
          <InputLine
            defaultValue={college}
            name="college"
            placeholder="학교 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;대학교)"
            maxLength={VALIDATION_CHECK.textInput.maxLength}
            pattern={VALIDATION_CHECK.textInput.pattern}
            errorText={VALIDATION_CHECK.textInput.errorText}
            disabled={isReview}
          />
        </TextBox>
        <div style={{ margin: '52px 0 0 22px' }}>
          <Radio
            defaultValue={
              leaveAbsence == undefined
                ? undefined
                : !leaveAbsence
                  ? SELECT_OPTIONS.leaveAbsence[0]
                  : isMakers
                    ? SELECT_OPTIONS.leaveAbsenceMakers[1]
                    : SELECT_OPTIONS.leaveAbsence[1]
            }
            label={isMakers ? SELECT_OPTIONS.leaveAbsenceMakers : SELECT_OPTIONS.leaveAbsence}
            name="leaveAbsence"
            required
            disabled={isReview}
          />
        </div>
      </div>
      <div className={doubleWrapper}>
        <TextBox label="학과" name="major" required size="sm">
          <InputLine
            defaultValue={major}
            name="major"
            placeholder="학과 이름을 정확하게 적어주세요. (ex. &#9675;&#9675;학과)"
            maxLength={VALIDATION_CHECK.textInput.maxLength}
            pattern={VALIDATION_CHECK.textInput.pattern}
            errorText={VALIDATION_CHECK.textInput.errorText}
            disabled={isReview}
          />
        </TextBox>
        <SelectBox
          defaultValue={
            univYear == undefined
              ? undefined
              : univYear !== 5
                ? `${univYear}학년`
                : isMakers
                  ? SELECT_OPTIONS.univYearMakers.slice(-1)[0]
                  : SELECT_OPTIONS.univYear.slice(-1)[0]
          }
          label="학년"
          name="univYear"
          placeholder="학년을 선택해주세요."
          options={isMakers ? SELECT_OPTIONS.univYearMakers : SELECT_OPTIONS.univYear}
          required
          disabled={isReview}
        />
      </div>
      <SelectBox
        defaultValue={mostRecentSeason === 0 ? '해당사항 없음' : mostRecentSeason}
        label="이전 기수 활동 여부 (제명 포함)"
        name="mostRecentSeason"
        placeholder="가장 최근에 활동했던 기수를 선택해주세요."
        options={isMakers ? SELECT_OPTIONS.mostRecentSeason.slice(1) : SELECT_OPTIONS.mostRecentSeason}
        required
        size="lg"
        disabled={isReview}
      />
    </section>
  );
};

export default DefaultSection;
