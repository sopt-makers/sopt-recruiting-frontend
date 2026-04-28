import SectionTitle from '@components/SectionTitle';
import { TITLE } from 'views/IntroducePage/constants/constant';
import { wrapper, container, name, description, card } from './style.css';
import { Tag } from '@sopt-makers/ui';
import type { SoptPartIntroduction } from 'views/IntroducePage/types';

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
      {parts.map((part) => (
        <PartItem key={part.part} part={part} />
      ))}
    </ul>
  );
};

interface ItemProps {
  part: SoptPartIntroduction;
}

const PartItem = ({ part }: ItemProps) => {
  return (
    <li className={card}>
      <Tag variant="secondary">{part.part}</Tag>
      <p className={name}>{part.part} 파트</p>
      <p className={description}>{part.description}</p>
    </li>
  );
};
