import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { ExtraPartType, FAQ_TABS } from 'views/IntroducePage/constants/constant';
import { tabBar, tabRecipe } from './style.css';

interface Props {
  selectedTab: ExtraPartType;
  setSelectedTab: (tab: ExtraPartType) => void;
}

const TabBar = ({ selectedTab, setSelectedTab }: Props) => {
  const { deviceType } = useDeviceType();

  return (
    <nav className={tabBar[deviceType]}>
      {FAQ_TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={tabRecipe({
            state: selectedTab === tab.value ? 'selected' : 'default',
            viewport: deviceType,
          })}
          onClick={() => setSelectedTab(tab.value)}>
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default TabBar;
