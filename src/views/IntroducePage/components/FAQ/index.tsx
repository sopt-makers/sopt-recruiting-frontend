import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { ExtraPartType, FAQ_DATA, FAQItemType, TITLE } from 'views/IntroducePage/constants/constant';
import {
  wrapper,
  itemVar,
  questionWrapperVar,
  iconWrapperVar,
  answerWrapper,
  answerLabelVar,
  answerTextVar,
  questionTextVar,
  listWrapperVar,
} from './style.css';
import TabBar from 'views/IntroducePage/components/FAQ/TabBar';
import { IconChevronDown } from '@sopt-makers/icons';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPartType>('ALL');
  const [expandedItems, setExpandedItems] = useState(new Set<number>());

  const { deviceType } = useDeviceType();

  const handleTabChange = (tab: ExtraPartType) => {
    setSelectedTab(tab);
    setExpandedItems(new Set());
  };

  const toggleItem = (index: number) => {
    const next = new Set(expandedItems);
    next.has(index) ? next.delete(index) : next.add(index);
    setExpandedItems(next);
  };

  return (
    <section className={wrapper[deviceType]}>
      <SectionTitle label={TITLE.FAQ.label} title={TITLE.FAQ.title} />
      <TabBar selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      <FAQList selectedTab={selectedTab} expandedItems={expandedItems} toggleItem={toggleItem} />
    </section>
  );
};

export default FAQ;

interface FAQListProps {
  selectedTab: ExtraPartType;
  expandedItems: Set<number>;
  toggleItem: (index: number) => void;
}

const FAQList = ({ selectedTab, expandedItems, toggleItem }: FAQListProps) => {
  const { deviceType } = useDeviceType();

  return (
    <ul className={listWrapperVar[deviceType]}>
      {FAQ_DATA[selectedTab].map((faq, index) => {
        const isOpened = expandedItems.has(index);
        return (
          <FAQItem key={`${selectedTab}-${index}`} faq={faq} isOpened={isOpened} onClick={() => toggleItem(index)} />
        );
      })}
    </ul>
  );
};

interface FAQItemProps {
  faq: FAQItemType;
  isOpened: boolean;
  onClick: () => void;
}

const FAQItem = ({ faq, isOpened, onClick }: FAQItemProps) => {
  const { deviceType } = useDeviceType();

  return (
    <li className={itemVar({ state: isOpened ? 'opened' : 'closed', viewport: deviceType })} onClick={onClick}>
      <div className={questionWrapperVar[isOpened ? 'opened' : 'closed']}>
        <h3 className={questionTextVar[deviceType]}>{faq.question}</h3>
        <span className={iconWrapperVar({ state: isOpened ? 'opened' : 'closed', viewport: deviceType })}>
          <IconChevronDown />
        </span>
      </div>
      {isOpened && (
        <div className={answerWrapper}>
          <span className={answerLabelVar[deviceType]}>A.</span>
          <p className={answerTextVar[deviceType]}>{faq.answer}</p>
        </div>
      )}
    </li>
  );
};
