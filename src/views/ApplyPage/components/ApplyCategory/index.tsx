import { memo } from 'react';
import { Link } from 'react-router-dom';

import useScrollPosition from '@hooks/useScrollPosition';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { CATEGORY } from './constant';
import { activeLinkStyleVar, categoryLinkStyleVar, categoryList, container, containerVar } from './style.css';

interface ApplyCategoryProps {
  isReview?: boolean;
  minIndex: number;
}
const ApplyCategory = memo(({ minIndex, isReview = false }: ApplyCategoryProps) => {
  const { deviceType } = useDeviceType();
  const { isScrollingDown, isScrollTop } = useScrollPosition(isReview ? 380 : 950);

  return (
    <nav
      className={`${container[isScrollingDown && !isScrollTop ? 'scrollDown' : 'scrollUp']} ${containerVar[isReview && deviceType === 'TAB' ? 'REVIEW_TAB' : deviceType]}`}>
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
