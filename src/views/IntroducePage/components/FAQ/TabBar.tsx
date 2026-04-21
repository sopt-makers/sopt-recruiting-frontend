import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { FAQ_TABS } from 'views/IntroducePage/constants/constant';
import { PartDataType } from 'views/IntroducePage/types';
import { tabBar, tabRecipe } from './style.css';

interface Props {
  selectedTab: PartDataType;
  onChange: (tab: PartDataType) => void;
}

const TabBar = ({ selectedTab, onChange }: Props) => {
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
          onClick={() => onChange(tab.value)}>
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default TabBar;
