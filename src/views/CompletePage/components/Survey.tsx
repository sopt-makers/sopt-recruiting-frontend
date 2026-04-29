import { useState } from 'react';

import useMutateSatisfaction from '../hooks/useMutateSatisfaction';
import {
  bottomContainer,
  pointBoxVar,
  pointContainerVar,
  surveyBox,
  thanksTextVar,
} from '../style.css';

const Survey = () => {
  const [point, setPoint] = useState<number | 'CHANGED'>(-1);

  const handleSatisfaction = () => {
    setTimeout(() => {
      setPoint('CHANGED');
    }, 200);
  };

  const { mutate } = useMutateSatisfaction({ onSuccess: handleSatisfaction });

  const handleClickPoint = (i: number) => {
    if (point === 'CHANGED') return;
    mutate({ satisfaction: i });
    setPoint(i);
  };

  return (
    <div className={surveyBox}>
      <span
        style={{
          textAlign: 'center',
          whiteSpace: 'pre-line',
        }}>{`지원서 이용 만족도를 0-10점 중에 선택해주세요.\n의견을 주시면 프로덕트 개선에 도움이 됩니다.`}</span>
      <div className={bottomContainer}>
        <span className={thanksTextVar[point === 'CHANGED' ? 'in' : 'out']}>소중한 의견 감사합니다</span>
        <ul className={pointContainerVar[point !== 'CHANGED' ? 'in' : 'out']}>
          {Array.from({ length: 11 }, (_, i) => i).map((v) => {
            return (
              <li
                key={v}
                className={pointBoxVar[point === 'CHANGED' ? 'changed' : v === point ? 'selected' : 'default']}
                onClick={() => handleClickPoint(v)}>
                <span>{v}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Survey;
