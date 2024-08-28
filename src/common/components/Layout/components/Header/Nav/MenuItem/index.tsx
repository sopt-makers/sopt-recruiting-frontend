import { track } from '@amplitude/analytics-browser';
import { NavLink } from 'react-router-dom';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { menuItemVar, menuLinkVar } from './style.css';

interface MenuItemProps {
  text: string;
  path?: string;
  target?: '_blank' | '_self';
  amplitudeId?: string;
  className?: string;
  onClick?: () => void;
}

const MenuItem = ({ text, path, target, amplitudeId, className, onClick }: MenuItemProps) => {
  const { deviceType } = useDeviceType();

  return (
    <li className={`${className} ${menuItemVar[deviceType]}`}>
      {path ? (
        <NavLink
          to={path}
          className={menuLinkVar[deviceType]}
          onClick={() => (amplitudeId ? track(amplitudeId) : null)}
          target={target}>
          {text}
        </NavLink>
      ) : (
        <p className={`${onClick ? menuLinkVar[deviceType] : null}`} onClick={onClick}>
          {text}
        </p>
      )}
    </li>
  );
};

export default MenuItem;
