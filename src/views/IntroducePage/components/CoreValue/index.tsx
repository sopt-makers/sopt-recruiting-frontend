import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { CORE_VALUE, TITLE } from 'views/IntroducePage/constants/constant';
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

const CoreValue = () => {
  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.CORE_VALUE.label} title={TITLE.CORE_VALUE.title} />
      <CoreValueList values={CORE_VALUE} />
    </section>
  );
};

export default CoreValue;

type CoreValueData = (typeof CORE_VALUE)[number];
interface ListProps {
  values: CoreValueData[];
}

const CoreValueList = ({ values }: ListProps) => {
  return (
    <ul className={listWrapper}>
      {values.map((value) => (
        <CoreValueItem key={value.id} value={value} />
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
