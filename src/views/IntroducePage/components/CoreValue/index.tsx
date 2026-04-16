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
      <ul className={listWrapperVar[deviceType]}>
        {CORE_VALUE.map((value) => (
          <CoreValueItem key={value.id} value={value} deviceType={deviceType} />
        ))}
      </ul>
    </section>
  );
};

export default CoreValue;

interface ItemProps {
  value: (typeof CORE_VALUE)[number];
  deviceType: 'DESK' | 'TAB' | 'MOB';
}

const CoreValueItem = ({ value, deviceType }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
