import { track } from '@amplitude/analytics-browser';
import { useContext, useState } from 'react';

import Button from '@components/Button';
import Callout from '@components/Callout';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import IconCheckmark from './icons/IconCheckmark';
import {
  container,
  icon,
  mainText,
  pointBoxVar,
  pointContainerVar,
  subText,
  surveyBox,
  thanksTextVar,
} from './style.css';

const CompletePage = () => {
  const {
    recruitingInfo: { name, season, group, soptName },
  } = useContext(RecruitingInfoContext);
  const isMakers = soptName?.toLowerCase().includes('makers');
  const [point, setPoint] = useState<number | 'CHANGED'>(-1);

  const handleClickMyPage = () => {
    track('click-complete-my');
    window.location.reload();
  };

  const handleClickPoint = (i: number) => {
    setPoint(i);
    setTimeout(() => {
      setPoint('CHANGED');
    }, 500);
    setTimeout(() => {
      setPoint(-1);
    }, 2500);
  };

  return (
    <section className={container}>
      <div className={icon}>
        <IconCheckmark />
      </div>
      <p className={mainText}>{`${name}님의\n${season}기 ${isMakers ? soptName : group} 지원서가 접수되었습니다.`}</p>
      <p className={subText}>이메일로 지원 접수 완료 알림이 발송되었습니다.</p>
      <Callout
        style={{
          marginBottom: 50,
        }}>{`이메일 도착 시점에 차이가 있을 수 있습니다.\n이메일이 오지 않으면 스팸 메일함을 확인해주세요.`}</Callout>
      <Button onClick={handleClickMyPage}>마이페이지로 이동하기</Button>
      <div className={surveyBox}>
        <span
          style={{
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}>{`지원서 이용 만족도를 0-10점 중에 선택해주세요.\n의견을 주시면 프로덕트 개선에 도움이 됩니다.`}</span>
        <div style={{ position: 'relative', width: 348, height: 36 }}>
          <span className={thanksTextVar[point === 'CHANGED' ? 'default' : 'out']}>소중한 의견 감사합니다 :&#41;</span>
          <ul className={pointContainerVar[point !== 'CHANGED' ? 'default' : 'out']}>
            {Array.from({ length: 11 }, (_, i) => i).map((v) => (
              <li
                key={v}
                className={pointBoxVar[v === point ? 'selected' : 'default']}
                onClick={() => handleClickPoint(v)}>
                <span style={{ paddingTop: 5 }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompletePage;
