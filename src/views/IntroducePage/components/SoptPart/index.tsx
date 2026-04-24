import SectionTitle from '@components/SectionTitle';
import { SOPT_PART, TITLE } from 'views/IntroducePage/constants/constant';
import { wrapper, container, name, description, card } from './style.css';
import { Tag } from '@sopt-makers/ui';

const SoptPart = () => {
  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.POSITION.label} title={TITLE.POSITION.title} />
      <PartList parts={SOPT_PART} />
    </section>
  );
};

export default SoptPart;

type SoptPosition = (typeof SOPT_PART)[number];
interface ListProps {
  parts: SoptPosition[];
}

const PartList = ({ parts }: ListProps) => {
  return (
    <ul className={container}>
      {parts.map((part) => (
        <PartItem key={part.id} part={part} />
      ))}
    </ul>
  );
};

interface ItemProps {
  part: SoptPosition;
}

const PartItem = ({ part }: ItemProps) => {
  return (
    <li className={card}>
      <Tag variant="secondary">{part.id}</Tag>
      <p className={name}>{part.name}</p>
      <p className={description}>{part.description}</p>
    </li>
  );
};
