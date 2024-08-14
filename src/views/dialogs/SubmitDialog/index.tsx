import { track } from '@amplitude/analytics-browser';
import { type ChangeEvent, forwardRef, useState } from 'react';

import Dialog from '@components/Dialog';
import { useDevice } from '@hooks/useDevice';
import ButtonLoading from 'views/loadings/ButtonLoading';

import {
  checkboxContainer,
  checkboxWrapper,
  checkmark,
  hiddenCheckbox,
  infoContainerVar,
  infoLabelVar,
  infoValueVar,
  infoWrapperVar,
} from './style.css';
import { buttonInside, buttonOutside, buttonOutsideVar, buttonWrapperVar, mainTextVar, subTextVar } from '../style.css';

const MyInfoItem = ({
  DEVICE_TYPE,
  label,
  value,
}: {
  DEVICE_TYPE: 'MOB' | 'TAB' | 'DESK';
  label: string;
  value: string;
}) => {
  return (
    <li className={infoWrapperVar[DEVICE_TYPE]}>
      <label className={infoLabelVar[DEVICE_TYPE]}>{label}</label>
      <span className={infoValueVar[DEVICE_TYPE]}>{value}</span>
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
  dataIsPending: boolean;
  onSendData: () => void;
}

const SubmitDialog = forwardRef<HTMLDialogElement, SubmitDialogProps>(
  ({ userInfo: { name, email, phone, part }, dataIsPending, onSendData }, ref) => {
    const [isChecked, setIsChecked] = useState(false);

    const DEVICE_TYPE = useDevice();

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <Dialog ref={ref}>
        <p className={mainTextVar[DEVICE_TYPE]}>이대로 제출하시겠어요?</p>
        <p className={subTextVar[DEVICE_TYPE]}>제출 완료하신 지원서는 수정하실 수 없어요.</p>
        <ol className={infoContainerVar[DEVICE_TYPE]}>
          <MyInfoItem DEVICE_TYPE={DEVICE_TYPE} label="이름" value={name} />
          <MyInfoItem DEVICE_TYPE={DEVICE_TYPE} label="이메일" value={email} />
          <MyInfoItem DEVICE_TYPE={DEVICE_TYPE} label="전화번호" value={phone} />
          <MyInfoItem DEVICE_TYPE={DEVICE_TYPE} label="지원파트" value={part} />
        </ol>
        <div className={checkboxContainer}>
          <label className={checkboxWrapper}>
            <input
              type="checkbox"
              checked={isChecked}
              className={`amp-unmask ${hiddenCheckbox}`}
              onChange={handleCheck}
            />
            <span className={checkmark} />
            <span>확인했습니다.</span>
          </label>
        </div>
        <div className={buttonWrapperVar[DEVICE_TYPE]}>
          <form
            method="dialog"
            className={`${dataIsPending ? buttonOutside.disabled : buttonOutside.line} ${buttonOutsideVar[DEVICE_TYPE]}`}
            onSubmit={() => setIsChecked(false)}>
            <button className={buttonInside.line} disabled={dataIsPending} onClick={() => track('click-apply-cancel')}>
              {dataIsPending ? <ButtonLoading width={48} height={18} /> : '검토하기'}
            </button>
          </form>
          <div className={`${buttonOutside[!isChecked ? 'disabled' : 'solid']} ${buttonOutsideVar[DEVICE_TYPE]}`}>
            <button className={buttonInside.solid} onClick={onSendData} disabled={!isChecked || dataIsPending}>
              {dataIsPending ? <ButtonLoading width={48} height={18} /> : '제출하기'}
            </button>
          </div>
        </div>
      </Dialog>
    );
  },
);

SubmitDialog.displayName = 'SubmitDialog';

export default SubmitDialog;
