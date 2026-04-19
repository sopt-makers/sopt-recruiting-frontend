import SectionTitle from '@components/SectionTitle';
import { contactMap, TITLE } from 'views/IntroducePage/constants/constant';
import {
  contactContent,
  contactSub,
  contactTitle,
  description,
  gridWrapper,
  image,
  itemWrapper,
  titleSection,
  wrapper,
} from './style.css';
import { contactInDisplayOrder } from 'views/IntroducePage/types';

const Inquiry = () => {
  return (
    <section className={wrapper}>
      <div className={titleSection}>
        <SectionTitle label={TITLE.INQUIRY.label} title={TITLE.INQUIRY.title} />
        <p className={description}>SOPT 지원에 대해 궁금한 것이 더 있나요?</p>
      </div>
      <InquiryBox />
    </section>
  );
};

export default Inquiry;

const InquiryBox = () => {
  return (
    <div className={gridWrapper}>
      {contactInDisplayOrder.map((contact) => {
        const { thumbnail, label, desc, link } = contactMap[contact];

        return (
          <div key={contact} className={itemWrapper}>
            <img src={thumbnail.src} alt={label} className={image} />
            <div className={contactContent}>
              <p className={contactTitle}>{label}</p>
              <a
                className={contactSub}
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
