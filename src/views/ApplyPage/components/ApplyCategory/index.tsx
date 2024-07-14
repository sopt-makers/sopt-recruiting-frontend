import { Link } from 'react-router-dom';

import { CATEGORY } from './constant';
import { activeLinkStyle, categoryLinkStyle, categoryList, container } from './style.css';

interface ApplyCategoryProps {
  minIndex: number;
}
const ApplyCategory = ({ minIndex }: ApplyCategoryProps) => {
  return (
    <nav className={container}>
      <ul className={categoryList}>
        {CATEGORY.map(({ index, text, path }) => (
          <li key={path}>
            <Link to={path} className={minIndex === index ? activeLinkStyle : categoryLinkStyle}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApplyCategory;
