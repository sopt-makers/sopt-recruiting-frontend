import SectionTitle from '@components/SectionTitle';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { contactInDisplayOrder, contactMap, TITLE } from 'views/IntroducePage/constants/constant';
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
        const contactItem = contactMap[contact];
        const { thumbnail, label } = contactItem;

        return (
          <div key={contact} className={itemWrapperVar[deviceType]}>
            <img src={thumbnail.src} alt={label} className={imageVar[deviceType]} />
            <div className={contactContentVar[deviceType]}>
              <p className={contactTitleVar[deviceType]}>{contactItem.label}</p>
              <p
                className={contactSubVar[deviceType]}
                onClick={() => {
                  if (contactItem.link.type === 'open') {
                    window.open(contactItem.link.href);
                  } else {
                    window.location.href = contactItem.link.href;
                  }
                }}>
                {contactItem.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
