import { FAQ_TABS } from 'views/IntroducePage/constants/constant';
import { PartDataType } from 'views/IntroducePage/types';
import { tabBar, tabRecipe } from './style.css';

interface Props {
  selectedTab: PartDataType;
  onChange: (tab: PartDataType) => void;
}

const TabBar = ({ selectedTab, onChange }: Props) => {
  return (
    <nav className={tabBar}>
      {FAQ_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          className={tabRecipe({ state: selectedTab === tab ? 'selected' : 'default' })}
          onClick={() => onChange(tab)}>
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default TabBar;
