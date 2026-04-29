import SectionTitle from 'views/PartDetailPage/components/SectionTitle';
import { PART_DETAIL_TITLE } from 'views/PartDetailPage/constants/constant';
import { wrapper, listContainer, item, itemIndex, itemText } from './style.css';

interface Props {
  partName: string;
  partCurriculum: string[];
}

const LearningList = ({ partName, partCurriculum }: Props) => {
  return (
    <section className={wrapper}>
      <SectionTitle
        label={PART_DETAIL_TITLE.LEARNING.label}
        title={PART_DETAIL_TITLE.LEARNING.title(partName)}
      />
      <ol className={listContainer}>
        {partCurriculum.map((text, index) => (
          <li key={index} className={item}>
            <span className={itemIndex}>{String(index + 1).padStart(2, '0')}</span>
            <p className={itemText}>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default LearningList;
