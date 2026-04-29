import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { TextBox } from '@components/Input';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { successVar } from './style.css';
import InputLine from '../InputLine';

export const TextBox이름 = () => {
  return (
    <TextBox label="이름" name="name" required>
      <InputLine
        name="name"
        pattern={VALIDATION_CHECK.name.pattern}
        errorText={VALIDATION_CHECK.name.errorText}
        placeholder="지원자 이름을 공백 없이 한글로 입력해주세요."
        maxLength={VALIDATION_CHECK.name.maxLength}
        minLength={VALIDATION_CHECK.name.minLength}
      />
    </TextBox>
  );
};

export const TextBox이메일 = () => {
  const { watch, trigger } = useFormContext();
  const { deviceType } = useDeviceType();

  const email = watch('email');
  const emailConfirm = watch('emailCheck');

  useEffect(() => {
    if (emailConfirm != undefined && emailConfirm !== '') trigger('emailCheck');
  }, [email, emailConfirm, trigger]);

  return (
    <TextBox label="이메일" name="email" required>
      <InputLine
        name="email"
        placeholder="이메일을 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.email.errorText}
      />
      <InputLine
        name="emailCheck"
        placeholder="이메일을 다시 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.emailConfirm.errorText}
        validate={VALIDATION_CHECK.emailConfirm.validate(watch, 'emailCheck')}
      />
      {emailConfirm && email === emailConfirm && <p className={successVar[deviceType]}>이메일이 일치해요.</p>}
    </TextBox>
  );
};

export const TextBox비밀번호 = () => {
  const { deviceType } = useDeviceType();

  const location = useLocation();
  const textVar = location.pathname === '/password' ? '새 비밀번호' : '비밀번호';
  const name = location.pathname === '/password' ? 'newPassword' : 'password';
  const { watch, trigger } = useFormContext();

  const password = watch(name);
  const passwordConfirm = watch('passwordCheck');

  useEffect(() => {
    if (passwordConfirm != undefined && passwordConfirm !== '') trigger('passwordCheck');
  }, [password, passwordConfirm, trigger]);

  return (
    <TextBox label={textVar} name={name} required>
      <InputLine
        name={name}
        placeholder={`${textVar}를 입력해주세요.`}
        autoComplete="new-password"
        type="password"
        maxLength={VALIDATION_CHECK.password.maxLength}
        pattern={VALIDATION_CHECK.password.pattern}
        errorText={VALIDATION_CHECK.password.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, name)}
      />
      <InputLine
        name="passwordCheck"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        type="password"
        maxLength={VALIDATION_CHECK.passwordConfirm.maxLength}
        errorText={VALIDATION_CHECK.passwordConfirm.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, name)}
      />
      {passwordConfirm && password === passwordConfirm && (
        <p className={successVar[deviceType]}>비밀번호가 일치해요.</p>
      )}
    </TextBox>
  );
};
