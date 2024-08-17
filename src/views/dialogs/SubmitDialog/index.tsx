import { track } from '@amplitude/analytics-browser';
import { type ChangeEvent, forwardRef, useContext, useState } from 'react';

import Dialog from '@components/Dialog';
import { DeviceTypeContext } from '@store/deviceTypeContext';
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
  deviceType,
  label,
  value,
}: {
  deviceType: 'MOB' | 'TAB' | 'DESK';
  label: string;
  value: string;
}) => {
  return (
    <li className={infoWrapperVar[deviceType]}>
      <label className={infoLabelVar[deviceType]}>{label}</label>
      <span className={infoValueVar[deviceType]}>{value}</span>
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

    const { deviceType } = useContext(DeviceTypeContext);

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <Dialog ref={ref}>
        <p className={mainTextVar[deviceType]}>이대로 제출하시겠어요?</p>
        <p className={subTextVar[deviceType]}>제출 완료하신 지원서는 수정하실 수 없어요.</p>
        <ol className={infoContainerVar[deviceType]}>
          <MyInfoItem deviceType={deviceType} label="이름" value={name} />
          <MyInfoItem deviceType={deviceType} label="이메일" value={email} />
          <MyInfoItem deviceType={deviceType} label="전화번호" value={phone} />
          <MyInfoItem deviceType={deviceType} label="지원파트" value={part} />
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
        <div className={buttonWrapperVar[deviceType]}>
          <form
            method="dialog"
            className={`${dataIsPending ? buttonOutside.disabled : buttonOutside.line} ${buttonOutsideVar[deviceType]}`}
            onSubmit={() => setIsChecked(false)}>
            <button className={buttonInside.line} disabled={dataIsPending} onClick={() => track('click-apply-cancel')}>
              {dataIsPending ? <ButtonLoading width={48} height={18} /> : '검토하기'}
            </button>
          </form>
          <div className={`${buttonOutside[!isChecked ? 'disabled' : 'solid']} ${buttonOutsideVar[deviceType]}`}>
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
