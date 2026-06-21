import { NavLink } from 'react-router-dom';

import { menuItemVar, menuLinkVar } from './style.css';
import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';

interface MenuItemProps {
  text: string;
  path?: string;
  target?: '_blank' | '_self';
  amplitudeId?: string;
  className?: string;
  onClick?: () => void;
}

const MenuItem = ({ text, path, target, amplitudeId, className, onClick }: MenuItemProps) => {
  return (
    <li className={`${className} ${menuItemVar}`}>
      {path ? (
        <AmplitudeEventTrack eventName={amplitudeId ? amplitudeId : undefined}>
          <NavLink to={path} className={menuLinkVar} target={target}>
            {text}
          </NavLink>
        </AmplitudeEventTrack>
      ) : (
        <p className={`${onClick ? menuLinkVar : null}`} onClick={onClick}>
          {text}
        </p>
      )}
    </li>
  );
};

export default MenuItem;
