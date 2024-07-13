import { type ChangeEvent, forwardRef, useState } from 'react';

import Dialog from '@components/Dialog';

import {
  checkboxContainer,
  checkboxWrapper,
  checkmark,
  hiddenCheckbox,
  infoContainer,
  infoLabel,
  infoValue,
  infoWrapper,
} from './style.css';
import { buttonInside, buttonOutside, buttonWrapper, mainText, subText } from '../style.css';

const MyInfoItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <li className={infoWrapper}>
      <label className={infoLabel}>{label}</label>
      <span className={infoValue}>{value}</span>
    </li>
  );
};

interface SubmitDialogProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    part: string;
  };
  onSendData: () => void;
}

const SubmitDialog = forwardRef<HTMLDialogElement, SubmitDialogProps>(
  ({ userInfo: { name, email, phone, part }, onSendData }, ref) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <Dialog ref={ref}>
        <p className={mainText}>이대로 제출하시겠어요?</p>
        <p className={subText}>제출 완료하신 지원서는 수정하실 수 없어요.</p>
        <ol className={infoContainer}>
          <MyInfoItem label="이름" value={name} />
          <MyInfoItem label="이메일" value={email} />
          <MyInfoItem label="전화번호" value={phone} />
          <MyInfoItem label="지원파트" value={part} />
        </ol>
        <div className={checkboxContainer}>
          <label className={checkboxWrapper}>
            <input type="checkbox" className={hiddenCheckbox} onChange={handleCheck} />
            <span className={checkmark} />
            <span>확인했습니다.</span>
          </label>
        </div>
        <div className={buttonWrapper}>
          <form method="dialog" className={buttonOutside.line}>
            <button className={buttonInside.line}>검토하기</button>
          </form>
          <div className={buttonOutside[!isChecked ? 'disabled' : 'solid']}>
            <button className={buttonInside.solid} onClick={onSendData} disabled={!isChecked}>
              제출하기
            </button>
          </div>
        </div>
      </Dialog>
    );
  },
);

SubmitDialog.displayName = 'SubmitDialog';

export default SubmitDialog;
