import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/components/Contentbox';
import SelectBox from '@components/Select';
import { PRIVACY_POLICY } from '@constants/policy';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';

import { doubleLineCheck, label, line, sectionContainer } from './style.css';

interface BottomSectionProps {
  isMakers?: boolean;
  isReview: boolean;
  knownPath?: string;
}

const BottomSection = ({ isMakers, isReview, knownPath }: BottomSectionProps) => {
  return (
    <section className={sectionContainer}>
      <hr className={line} />
      <SelectBox
        label="동아리를 알게 된 경로"
        name="knownPath"
        defaultValue={knownPath}
        placeholder="지원 경로를 선택해 주세요."
        options={SELECT_OPTIONS.knownPath}
        required
        disabled={isReview}
      />
      <div id="check-necessary" className={doubleLineCheck}>
        <p className={label}>
          {isMakers
            ? 'SOPT Makers의 행사 및 정기 모임은 매주 일요일에 진행됩니다.'
            : 'SOPT의 행사 및 세미나는 매주 토요일에 진행됩니다.'}
        </p>
        <Checkbox checked={isReview ? true : undefined} name="attendance" required>
          참석 가능합니다.
        </Checkbox>
      </div>
      <div>
        <Checkbox checked={isReview ? true : undefined} required name="personalInformation">
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
    </section>
  );
};

export default BottomSection;
