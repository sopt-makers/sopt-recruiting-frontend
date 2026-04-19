import SectionTitle from '@components/SectionTitle';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { contactMap, TITLE } from 'views/IntroducePage/constants/constant';
import {
  contactContentVar,
  contactSubVar,
  contactTitleVar,
  descriptionVar,
  gridWrapperVar,
  imageVar,
  itemWrapperVar,
  titleSectionVar,
  wrapperVar,
} from './style.css';
import { contactInDisplayOrder } from 'views/IntroducePage/types';

const Inquiry = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
      <div className={titleSectionVar[deviceType]}>
        <SectionTitle label={TITLE.INQUIRY.label} title={TITLE.INQUIRY.title} />
        <p className={descriptionVar[deviceType]}>SOPT 지원에 대해 궁금한 것이 더 있나요?</p>
      </div>
      <InquiryBox />
    </section>
  );
};

export default Inquiry;

const InquiryBox = () => {
  const { deviceType } = useDeviceType();

  return (
    <div className={gridWrapperVar[deviceType]}>
      {contactInDisplayOrder.map((contact) => {
        const { thumbnail, label, desc, link } = contactMap[contact];

        return (
          <div key={contact} className={itemWrapperVar[deviceType]}>
            <img src={thumbnail.src} alt={label} className={imageVar[deviceType]} />
            <div className={contactContentVar[deviceType]}>
              <p className={contactTitleVar[deviceType]}>{label}</p>
              <a
                className={contactSubVar[deviceType]}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}>
                {desc}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
