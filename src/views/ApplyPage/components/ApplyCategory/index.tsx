import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CATEGORY } from './constant';
import { activeLinkStyle, categoryLinkStyle, categoryList, container } from './style.css';

interface ApplyCategoryProps {
  activeHash: string;
  setActiveHash: React.Dispatch<React.SetStateAction<string>>;
}
const ApplyCategory = ({ activeHash, setActiveHash }: ApplyCategoryProps) => {
  const location = useLocation();

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location.hash, setActiveHash]);

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
