import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { CORE_VALUE, TITLE } from 'views/IntroducePage/constants/constant';
import {
  wrapper,
  listWrapper,
  card,
  backgroundBlur,
  backgroundBlurVisible,
  content,
  front,
  iconWrapper,
  descriptionVisible,
  description,
  valueText,
  image,
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

type Value = (typeof CORE_VALUE)[number];
interface ListProps {
  values: Value[];
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
  value: Value;
}

const CoreValueItem = ({ value }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={content}>
        <div className={front}>
          <p className={valueText}>{value.value}</p>
          <div className={iconWrapper}>
            <img src={value.image} alt={value.value} className={image} />
            <div className={`${backgroundBlur} ${isHovered ? backgroundBlurVisible : ''}`} />
            <p className={`${description} ${isHovered ? descriptionVisible : ''}`}>
              {value.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
