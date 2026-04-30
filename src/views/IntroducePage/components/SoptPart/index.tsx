import SectionTitle from '@components/SectionTitle';
import { TITLE } from 'views/IntroducePage/constants/constant';
import { wrapper, container, name, description, itemWrapper } from './style.css';
import { Tag } from '@sopt-makers/ui';
import { PART_ORDER, type SoptPartIntroduction } from 'views/IntroducePage/types';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

interface SoptPartProps {
  parts?: SoptPartIntroduction[];
}

const SoptPart = ({ parts }: SoptPartProps) => {
  if (!parts || parts.length === 0) return null;

  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.POSITION.label} title={TITLE.POSITION.title} />
      <PartList parts={parts} />
    </section>
  );
};

export default SoptPart;

interface ListProps {
  parts: SoptPartIntroduction[];
}

const PartList = ({ parts }: ListProps) => {
  return (
    <ul className={container}>
      {PART_ORDER.map((partName) => {
        const part = parts.find((p) => p.part === partName);
        return part && <PartItem key={part.part} part={part} />;
      })}
    </ul>
  );
};

interface ItemProps {
  part: SoptPartIntroduction;
}

const PartItem = ({ part }: ItemProps) => {
  const { deviceType } = useDeviceType();

  return (
    <li className={itemWrapper}>
      <Tag variant="secondary" size={deviceType === 'DESK' ? 'lg' : 'sm'}>
        {part.part}
      </Tag>
      <p className={name}>{part.part} 파트</p>
      <p className={description}>{part.description}</p>
    </li>
  );
};
