import SectionTitle from '@components/SectionTitle';
import { RECRUITMENT_TARGET, TITLE } from 'views/IntroducePage/constants/constant';
import { wrapper, container, containerWrapper, description, icon } from './style.css';

const RecruitmentTarget = () => {
  return (
    <section className={wrapper}>
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
  return (
    <ul className={containerWrapper}>
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
  return (
    <li className={container}>
      <p className={icon}>{target.icon}</p>
      <p className={description}>{target.description}</p>
    </li>
  );
};
