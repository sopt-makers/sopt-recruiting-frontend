import SectionTitle from 'views/PartDetailPage/components/SectionTitle';
import { PART_DETAIL_TITLE } from 'views/PartDetailPage/constants/constant';
import { wrapper, descriptionBox, descriptionText } from './style.css';

interface Props {
  partName: string;
  introduction: string;
}

const PartIntroduction = ({ partName, introduction }: Props) => {
  return (
    <section className={wrapper}>
      <SectionTitle
        label={PART_DETAIL_TITLE.INTRODUCTION.label}
        title={PART_DETAIL_TITLE.INTRODUCTION.title(partName)}
      />
      <div className={descriptionBox}>
        <p className={descriptionText}>{introduction}</p>
      </div>
    </section>
  );
};

export default PartIntroduction;
