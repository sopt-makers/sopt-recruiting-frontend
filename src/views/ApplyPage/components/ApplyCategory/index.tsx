import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CATEGORY } from './constant';
import { activeLinkStyle, categoryLinkStyle, categoryList, container } from './style.css';

interface ApplyCategoryProps {
  activeHash: string;
  onSetActiveHash: (hash: string) => void;
}
const ApplyCategory = ({ activeHash, onSetActiveHash }: ApplyCategoryProps) => {
  const location = useLocation();

  useEffect(() => {
    onSetActiveHash(location.hash);
  }, [location.hash, onSetActiveHash]);

  return (
    <nav className={container}>
      <ul className={categoryList}>
        {CATEGORY.map(({ text, path }) => (
          <li key={path}>
            <Link to={path} className={activeHash === path ? activeLinkStyle : categoryLinkStyle}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApplyCategory;
