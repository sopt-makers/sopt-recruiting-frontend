import { menuItemVar } from './style.css';

interface MenuItemProps {
  text: string;
  type: 'default' | 'selected';
}
const MenuItem = ({ text, type }: MenuItemProps) => {
  return (
    <li>
      <button type="button" className={menuItemVar[type]}>
        {text}
      </button>
    </li>
  );
};

export default MenuItem;
