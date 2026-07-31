import { PRIVACY_POLICY_NOTION_URL } from '@constants/links';

import { container, privacyPolicyLink } from './style.css';

import type { HTMLAttributes } from 'react';

interface ContentboxProps extends HTMLAttributes<HTMLElement> {
  children?: string | number;
}

const Contentbox = ({ children, ...contentboxElementProps }: ContentboxProps) => {
  return (
    <article className={container} {...contentboxElementProps}>
      <a
        className={privacyPolicyLink}
        href={PRIVACY_POLICY_NOTION_URL}
        target="_blank"
        rel="noreferrer noopener">
        개인정보처리방침 &gt;
      </a>
      {children}
    </article>
  );
};

export default Contentbox;
