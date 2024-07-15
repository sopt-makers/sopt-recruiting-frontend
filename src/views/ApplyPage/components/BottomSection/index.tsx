import { UseFormReturn } from 'react-hook-form';

import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import SelectBox from '@components/Select';
import { PRIVACY_POLICY } from '@constants/policy';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';

import { circle, doubleLineCheck, label, line, sectionContainer } from './style.css';

const BottomSection = ({
  knownPath,
  formObject,
}: {
  knownPath?: string;
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'setValue' | 'watch'>;
}) => {
  return (
    <section className={sectionContainer}>
      <hr className={line} />
      <SelectBox
        label="동아리를 알게 된 경로"
        defaultValue={knownPath}
        placeholder="지원 경로를 선택해 주세요."
        options={SELECT_OPTIONS.경로}
        formObject={formObject}
        required
      />
      <div id="check-necessary" className={doubleLineCheck}>
        <p className={label}>
          <span>SOPT의 행사 및 세미나는 매주 토요일에 진행됩니다.</span>
          <i className={circle} />
        </p>
        <Checkbox label="참석여부" formObject={formObject} required>
          참석 가능합니다.
        </Checkbox>
      </div>
      <div>
        <Checkbox required label="개인정보수집동의" formObject={formObject}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
    </section>
  );
};

export default BottomSection;
