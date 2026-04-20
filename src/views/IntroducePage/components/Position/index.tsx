import SectionTitle from '@components/SectionTitle';
import { POSITION, TITLE } from 'views/IntroducePage/constants/constant';
import { wrapper, container, name, description, card } from './style.css';
import { Tag } from '@sopt-makers/ui';

const Position = () => {
  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.POSITION.label} title={TITLE.POSITION.title} />
      <PositionList positions={POSITION} />
    </section>
  );
};

export default Position;

type Position = (typeof POSITION)[number];
interface ListProps {
  positions: Position[];
}

const PositionList = ({ positions }: ListProps) => {
  return (
    <ul className={container}>
      {positions.map((position) => (
        <PositionItem key={position.id} position={position} />
      ))}
    </ul>
  );
};

interface ItemProps {
  position: Position;
}

const PositionItem = ({ position }: ItemProps) => {
  return (
    <li className={card}>
      <Tag variant="secondary">{position.id}</Tag>
      <p className={name}>{position.name}</p>
      <p className={description}>{position.description}</p>
    </li>
  );
};
