import { useState } from 'react';
import SectionTitle from '@components/SectionTitle';
import { FAQ_DATA, TITLE } from 'views/IntroducePage/constants/constant';
import { FAQItemType, PartDataType } from 'views/IntroducePage/types';
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

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<PartDataType>('ALL');
  const { items, toggle, reset } = useToggleSet();

  const { deviceType } = useDeviceType();

  const handleTabChange = (tab: PartDataType) => {
    setSelectedTab(tab);
    reset();
  };

  return (
    <section className={wrapper[deviceType]}>
      <SectionTitle label={TITLE.FAQ.label} title={TITLE.FAQ.title} />
      <TabBar selectedTab={selectedTab} onChange={handleTabChange} />
      <FAQList selectedTab={selectedTab} openedItems={items} toggle={toggle} />
    </section>
  );
};

export default FAQ;

interface FAQListProps {
  selectedTab: PartDataType;
  openedItems: Set<number>;
  toggle: (index: number) => void;
}

const FAQList = ({ selectedTab, openedItems, toggle }: FAQListProps) => {
  const { deviceType } = useDeviceType();

  return (
    <ul className={listWrapperVar[deviceType]}>
      {FAQ_DATA[selectedTab].map((faq, index) => {
        const isOpened = openedItems.has(index);
        return <FAQItem key={`${selectedTab}-${index}`} faq={faq} isOpened={isOpened} onClick={() => toggle(index)} />;
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
