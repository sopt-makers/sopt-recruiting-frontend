import { Link, useLocation } from 'react-router-dom';

import { CATEGORY } from './constant';
import { activeLink, categoryLink, categoryList, container } from './style.css';

const ApplyCategory = () => {
  const location = useLocation();
  return (
    <nav className={container}>
      <ul className={categoryList}>
        {CATEGORY.map(({ text, path }) => (
          <li key={path}>
            <Link to={path} className={location.hash === path ? activeLink : categoryLink}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApplyCategory;
