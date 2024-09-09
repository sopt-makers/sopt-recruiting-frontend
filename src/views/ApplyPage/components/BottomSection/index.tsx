import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/components/Contentbox';
import SelectBox from '@components/Select';
import { PRIVACY_POLICY } from '@constants/policy';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { SELECT_OPTIONS } from 'views/ApplyPage/constant';

import { doubleLineCheck, labelVar, line, sectionContainer } from './style.css';

interface BottomSectionProps {
  isReview?: boolean;
  knownPath?: string;
}

const BottomSection = ({ knownPath, isReview = false }: BottomSectionProps) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { isMakers },
  } = useRecruitingInfo();
  return (
    <section className={sectionContainer}>
      <hr className={line} />
      {!isMakers && (
        <SelectBox
          label="동아리를 알게 된 경로"
          name="knownPath"
          defaultValue={knownPath}
          placeholder="지원 경로를 선택해 주세요."
          options={SELECT_OPTIONS.knownPath}
          required
          disabled={isReview}
        />
      )}
      <div id="check-necessary" className={doubleLineCheck}>
        <p className={labelVar[deviceType]}>
          {isMakers
            ? 'SOPT makers의 행사 및 정기 모임은 일요일에 진행됩니다.'
            : 'SOPT의 행사 및 세미나는 매주 토요일에 진행됩니다.'}
        </p>
        <Checkbox
          checked={isReview ? true : undefined}
          name="attendance"
          required
          disabled={isReview ? true : undefined}>
          참석 가능합니다.
        </Checkbox>
      </div>
      <div>
        <Checkbox
          checked={isReview ? true : undefined}
          required
          name="personalInformation"
          disabled={isReview ? true : undefined}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
    </section>
  );
};

export default BottomSection;
