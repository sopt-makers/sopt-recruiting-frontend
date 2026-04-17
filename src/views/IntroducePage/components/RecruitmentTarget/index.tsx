import SectionTitle from '@components/SectionTitle';
import { RECRUITMENT_TARGET, TITLE } from 'views/IntroducePage/constants/constant';
import { wrapperVar, container, containerWrapperVar, descriptionVar, icon } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const RecruitmentTarget = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
      <SectionTitle label={TITLE.RECRUITMENT_TARGET.label} title={TITLE.RECRUITMENT_TARGET.title} />
      <RecruitmentTargetList targets={RECRUITMENT_TARGET} />
    </section>
  );
};

export default RecruitmentTarget;

type Target = (typeof RECRUITMENT_TARGET)[number];
interface ListProps {
  targets: Target[];
}

const RecruitmentTargetList = ({ targets }: ListProps) => {
  const { deviceType } = useDeviceType();

  return (
    <ul className={containerWrapperVar[deviceType]}>
      {targets.map((target) => (
        <RecruitmentTargetItem key={target.id} target={target} />
      ))}
    </ul>
  );
};

interface ItemProps {
  target: Target;
}

const RecruitmentTargetItem = ({ target }: ItemProps) => {
  const { deviceType } = useDeviceType();

  return (
    <li className={container}>
      <p className={icon}>{target.icon}</p>
      <p className={descriptionVar[deviceType]}>{target.description}</p>
    </li>
  );
};
