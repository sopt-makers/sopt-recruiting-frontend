import SectionTitle from '@components/SectionTitle';
import { RECRUITMENT_TARGET, TITLE } from 'views/IntroducePage/components/RecruitmentTarget/constants/constant';
import { wrapperVar, container, containerWrapperVar, descriptionVar, icon } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const RecruitmentTarget = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
      <SectionTitle label={TITLE.label} title={TITLE.title} />

      <div className={containerWrapperVar[deviceType]}>
        {RECRUITMENT_TARGET.map((target) => (
          <div key={target.id} className={container}>
            <p className={icon}>{target.icon}</p>
            <p className={descriptionVar[deviceType]}>{target.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentTarget;
