import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { CORE_VALUE, TITLE } from 'views/IntroducePage/constants/constant';
import {
  wrapperVar,
  listWrapperVar,
  cardVar,
  backgroundBlur,
  backgroundBlurVisible,
  content,
  front,
  iconWrapper,
  descriptionVisible,
  descriptionVar,
  valueText,
  image,
} from './style.css';

const CoreValue = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
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
  const { deviceType } = useDeviceType();

  return (
    <ul className={listWrapperVar[deviceType]}>
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

  const { deviceType } = useDeviceType();

  return (
    <li
      className={cardVar[deviceType]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={content}>
        <div className={front}>
          <p className={valueText[deviceType]}>{value.value}</p>
          <div className={iconWrapper}>
            <img src={value.image} alt={value.value} className={`${image[deviceType]}`} />
            <div className={`${backgroundBlur} ${isHovered ? backgroundBlurVisible : ''}`} />
            <p className={`${descriptionVar[deviceType]} ${isHovered ? descriptionVisible : ''}`}>
              {value.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
