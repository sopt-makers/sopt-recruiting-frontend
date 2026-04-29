import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { TITLE } from 'views/IntroducePage/constants/constant';
import {
  wrapper,
  listWrapper,
  dimLayer,
  descriptionVisible,
  valueText,
  image,
  dimLayerActive,
  descriptionBase,
  cardContainer,
  cardWrapper,
  contentLayout,
  imageWrapper,
} from './style.css';
import type { CoreValue as CoreValueData } from 'views/IntroducePage/types';

interface CoreValueProps {
  values?: CoreValueData[];
}

const CoreValue = ({ values }: CoreValueProps) => {
  const {
    recruitingInfo: { season, soptName },
  } = useRecruitingInfo();

  if (!values || values.length === 0) return null;

  return (
    <section className={wrapper}>
      <SectionTitle
        label={TITLE.CORE_VALUE.label}
        title={`${season}기 ${soptName} SOPT가 함께 나아가고 싶은 사람이에요`}
      />
      <CoreValueList values={values} />
    </section>
  );
};

export default CoreValue;

interface ListProps {
  values: CoreValueData[];
}

const CoreValueList = ({ values }: ListProps) => {
  return (
    <ul className={listWrapper}>
      {values.map((value, index) => (
        <CoreValueItem key={index} value={value} />
      ))}
    </ul>
  );
};

interface ItemProps {
  value: CoreValueData;
}

const CoreValueItem = ({ value }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className={cardWrapper} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={cardContainer}>
        <div className={contentLayout}>
          <p className={valueText}>{value.value}</p>
          <div className={imageWrapper}>
            <img src={value.image} alt={value.value} className={image} />
            <div className={`${dimLayer} ${isHovered ? dimLayerActive : ''}`} />
            <p className={`${descriptionBase} ${isHovered ? descriptionVisible : ''}`}>{value.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
