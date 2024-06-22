import { forwardRef } from 'react';

import Dialog from '@components/Dialog';

import {
  buttonInside,
  buttonOutside,
  buttonWrapper,
  infoContainer,
  infoLabel,
  infoValue,
  infoWrapper,
  mainText,
  subText,
} from './style.css';

const MyInfoItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <li className={infoWrapper}>
      <label className={infoLabel}>{label}</label>
      <span className={infoValue}>{value}</span>
    </li>
  );
};

const SubmitDialog = forwardRef<HTMLDialogElement>((_, ref) => {
  const disabled = true;

  return (
    <Dialog ref={ref}>
      <p className={mainText}>이대로 제출하시겠어요?</p>
      <p className={subText}>제출 완료하신 지원서는 수정하실 수 없어요.</p>
      <ol className={infoContainer}>
        <MyInfoItem label="이름" value="김솝트" />
        <MyInfoItem label="이메일" value="엄청나게긴이메일을가진다면은?@naver.com" />
        <MyInfoItem label="전화번호" value="010-0000-0000" />
        <MyInfoItem label="지원파트" value="디자인" />
      </ol>
      <div className={buttonWrapper}>
        <form method="dialog" className={buttonOutside.line}>
          <button className={buttonInside.line}>검토하기</button>
        </form>
        <div className={buttonOutside[disabled ? 'disabled' : 'solid']}>
          <button className={buttonInside.solid} disabled={disabled}>
            제출하기
          </button>
        </div>
      </div>
    </Dialog>
  );
});

SubmitDialog.displayName = 'SubmitDialog';

export default SubmitDialog;
