import { useMemo, useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { FAQ_전체, TITLE } from 'views/IntroducePage/constants/constant';
import { PartDataType, RecruitQuestion, RecruitQuestionItem } from 'views/IntroducePage/types';
import {
  wrapper,
  itemVar,
  questionWrapper,
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
import useToggleSet from 'views/IntroducePage/components/FAQ/hooks/useToggleSet';

interface FAQProps {
  faqData?: RecruitQuestion[];
}

const FAQ = ({ faqData }: FAQProps) => {
  const [selectedTab, setSelectedTab] = useState<PartDataType>('전체');

  const { items, toggle, reset } = useToggleSet();
  const { deviceType } = useDeviceType();

  const handleTabChange = (tab: PartDataType) => {
    setSelectedTab(tab);
    reset();
  };

  const faqByPart = useMemo(() => {
    if (!faqData) return {};

    return Object.fromEntries(faqData.filter((p) => p.part !== '전체').map((p) => [p.part, p.questions]));
  }, [faqData]);

  const selectedFaqItems = selectedTab === '전체' ? FAQ_전체 : faqByPart[selectedTab] || [];

  if (!faqData || faqData.length === 0) return null;

  return (
    <section className={wrapper[deviceType]}>
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
  const { deviceType } = useDeviceType();

  return (
    <ul className={listWrapperVar[deviceType]}>
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
  const { deviceType } = useDeviceType();
  const state = isOpened ? 'opened' : 'closed';

  return (
    <li className={itemVar({ state, viewport: deviceType })} onClick={onClick}>
      <div className={questionWrapper}>
        <p className={questionTextVar[deviceType]}>{faq.question}</p>
        <span className={iconWrapperVar({ state, viewport: deviceType })}>
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
