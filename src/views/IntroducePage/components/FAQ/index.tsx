import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { FAQ_전체, TITLE } from 'views/IntroducePage/constants/constant';
import { PartDataType, RecruitQuestion, RecruitQuestionItem } from 'views/IntroducePage/types';
import {
  wrapper,
  itemVar,
  questionWrapper,
  iconWrapperVar,
  answerWrapper,
  answerLabel,
  answerText,
  questionText,
  listWrapper,
} from './style.css';

import { IconChevronDown } from '@sopt-makers/icons';
import useToggleSet from 'views/IntroducePage/components/FAQ/hooks/useToggleSet';
import TabBar from 'views/IntroducePage/components/FAQ/components/TabBar';

interface FAQProps {
  faqData?: RecruitQuestion[];
}

const FAQ = ({ faqData }: FAQProps) => {
  const [selectedTab, setSelectedTab] = useState<PartDataType>('전체');

  const { items, toggle, reset } = useToggleSet();

  const handleTabChange = (tab: PartDataType) => {
    setSelectedTab(tab);
    reset();
  };

  const selectedFaqItems =
    selectedTab === '전체' ? FAQ_전체 : (faqData?.find((p) => p.part === selectedTab)?.questions ?? []);

  if (!faqData || faqData.length === 0) return null;

  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.FAQ.label} title={TITLE.FAQ.title} />
      <TabBar selectedTab={selectedTab} onChange={handleTabChange} />
      <FAQList faqItems={selectedFaqItems} selectedTab={selectedTab} openedItems={items} toggle={toggle} />
    </section>
  );
};

export default FAQ;

interface FAQListProps {
  faqItems: RecruitQuestionItem[];
  selectedTab: PartDataType;
  openedItems: Set<number>;
  toggle: (index: number) => void;
}

const FAQList = ({ faqItems, selectedTab, openedItems, toggle }: FAQListProps) => {
  return (
    <ul className={listWrapper}>
      {faqItems.map((faq, index) => {
        const isOpened = openedItems.has(index);
        return <FAQItem key={`${selectedTab}-${index}`} faq={faq} isOpened={isOpened} onClick={() => toggle(index)} />;
      })}
    </ul>
  );
};

interface FAQItemProps {
  faq: RecruitQuestionItem;
  isOpened: boolean;
  onClick: () => void;
}

const FAQItem = ({ faq, isOpened, onClick }: FAQItemProps) => {
  const state = isOpened ? 'opened' : 'closed';

  return (
    <li className={itemVar({ state })} onClick={onClick}>
      <div className={questionWrapper}>
        <p className={questionText}>{faq.question}</p>
        <span className={iconWrapperVar({ state })}>
          <IconChevronDown />
        </span>
      </div>
      {isOpened && (
        <div className={answerWrapper}>
          <span className={answerLabel}>A.</span>
          <p className={answerText}>{faq.answer}</p>
        </div>
      )}
    </li>
  );
};
