import { track } from '@amplitude/analytics-browser';
import { NavLink } from 'react-router-dom';

import { useDevice } from '@hooks/useDevice';

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
  const DEVICE_TYPE = useDevice();

  return (
    <li className={`${className} ${menuItemVar[DEVICE_TYPE]}`}>
      {path ? (
        <NavLink
          to={path}
          className={menuLinkVar[DEVICE_TYPE]}
          onClick={() => (amplitudeId ? track(amplitudeId) : null)}
          target={target}>
          {text}
        </NavLink>
      ) : (
        <p className={`${onClick ? menuLinkVar[DEVICE_TYPE] : null}`} onClick={onClick}>
          {text}
        </p>
      )}
    </li>
  );
};

export default MenuItem;
