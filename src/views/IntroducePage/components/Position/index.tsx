import SectionTitle from '@components/SectionTitle';
import { POSITION, TITLE } from 'views/IntroducePage/constants/constant';
import { wrapperVar, containerVar, nameVar, descriptionVar, cardVar } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { Tag } from '@sopt-makers/ui';

const Position = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
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
  const { deviceType } = useDeviceType();

  return (
    <ul className={containerVar[deviceType]}>
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
  const { deviceType } = useDeviceType();

  return (
    <li className={cardVar[deviceType]}>
      <Tag variant="secondary">{position.id}</Tag>
      <p className={nameVar[deviceType]}>{position.name}</p>
      <p className={descriptionVar[deviceType]}>{position.description}</p>
    </li>
  );
};
