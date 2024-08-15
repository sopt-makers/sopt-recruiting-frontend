import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useDevice } from '@hooks/useDevice';
import useScrollPosition from '@hooks/useScrollPosition';

import { CATEGORY } from './constant';
import { activeLinkStyleVar, categoryLinkStyleVar, categoryList, container, containerVar } from './style.css';

interface ApplyCategoryProps {
  isReview: boolean;
  minIndex: number;
}
const ApplyCategory = memo(({ isReview, minIndex }: ApplyCategoryProps) => {
  const deviceType = useDevice();
  const { isScrollingDown, isScrollTop } = useScrollPosition(isReview ? 380 : 950);

  return (
    <nav
      className={`${container[isScrollingDown && !isScrollTop ? 'scrollDown' : 'scrollUp']} ${containerVar[deviceType]}`}>
      <ul className={categoryList}>
        {CATEGORY.map(({ index, text, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`${activeLinkStyleVar[minIndex === index ? 'active' : 'default']} ${categoryLinkStyleVar[deviceType]}`}>
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
