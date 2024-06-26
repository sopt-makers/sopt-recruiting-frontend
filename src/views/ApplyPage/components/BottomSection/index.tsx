import { UseFormReturn } from 'react-hook-form';

import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import SelectBox from '@components/Select';
import { circle } from '@components/Select/style.css';
import { PRIVACY_POLICY } from '@constants/policy';
import { doubleLineCheck, label, line, sectionContainer } from 'views/ApplyPage/style.css';

const BottomSection = ({
  formObject,
}: {
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger' | 'setValue'>;
}) => {
  return (
    <section className={sectionContainer}>
      <hr className={line} />
      <SelectBox
        label="동아리를 알게 된 경로"
        options={[
          'SOPT 페이스북 페이지',
          'SOPT 인스타그램',
          'SOPT 유튜브',
          '포스터',
          'SOPT 수료자 블로그',
          '지인 추천',
          '온라인 홍보글(온라인 커뮤니티 등)',
          '오프라인 홍보글(대학내일 등)',
          '디스콰이엇',
          '기타',
        ]}
        formObject={formObject}
        required
      />
      <div className={doubleLineCheck}>
        <p className={label}>
          <span>SOPT의 행사 및 세미나는 매주 토요일에 진행됩니다.</span>
          <i className={circle} />
        </p>
        <Checkbox label="참석여부" register={formObject.register} required>
          참석 가능합니다.
        </Checkbox>
      </div>
      <div>
        <Checkbox required label="개인정보수집동의" register={formObject.register} errors={formObject.formState.errors}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
    </section>
  );
};

export default BottomSection;
