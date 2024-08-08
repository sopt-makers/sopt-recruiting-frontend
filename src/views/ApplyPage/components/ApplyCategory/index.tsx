import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useScrollPosition from '@hooks/useScrollPosition';

import { CATEGORY } from './constant';
import { activeLinkStyle, categoryLinkStyle, categoryList, container } from './style.css';

interface ApplyCategoryProps {
  minIndex: number;
}
const ApplyCategory = memo(({ minIndex }: ApplyCategoryProps) => {
  const { pathname } = useLocation();

  const { isScrollingDown, isScrollTop } = useScrollPosition(pathname === '/review' ? 380 : 950);

  return (
    <nav className={container[isScrollingDown && !isScrollTop ? 'scrollDown' : 'scrollUp']}>
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
});

ApplyCategory.displayName = 'ApplyCategory';

export default ApplyCategory;
