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

      <div className={containerVar[deviceType]}>
        {POSITION.map((position) => (
          <div key={position.id} className={cardVar[deviceType]}>
            <Tag variant="secondary">{position.id}</Tag>
            <p className={nameVar[deviceType]}>{position.name}</p>
            <p className={descriptionVar[deviceType]}>{position.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Position;
