import SectionTitle from 'views/PartDetailPage/components/SectionTitle';
import { PART_DETAIL_TITLE } from 'views/PartDetailPage/constants/constant';
import { wrapper, listContainer, item, itemText } from './style.css';

interface Props {
  preferences: string[];
}

const GoodForYou = ({ preferences }: Props) => {
  return (
    <section className={wrapper}>
      <SectionTitle label={PART_DETAIL_TITLE.GOOD_FOR_YOU.label} title={PART_DETAIL_TITLE.GOOD_FOR_YOU.title} />
      <ul className={listContainer}>
        {preferences.map((text, index) => (
          <li key={index} className={item}>
            <p className={itemText}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GoodForYou;
