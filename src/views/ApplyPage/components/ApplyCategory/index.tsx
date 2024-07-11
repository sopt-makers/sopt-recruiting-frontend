import { Link } from 'react-router-dom';

import { CATEGORY } from './constant';
import { activeLinkStyle, categoryLinkStyle, categoryList, container } from './style.css';

interface ApplyCategoryProps {
  activeHash: string;
}
const ApplyCategory = ({ activeHash }: ApplyCategoryProps) => {
  return (
    <nav className={container}>
      <ul className={categoryList}>
        {CATEGORY.map(({ text, path }) => (
          <li key={path}>
            <Link to={path} className={`#${activeHash}` === path ? activeLinkStyle : categoryLinkStyle}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApplyCategory;
