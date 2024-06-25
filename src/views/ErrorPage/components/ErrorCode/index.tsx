import Icon404Back from 'views/ErrorPage/icons/Icon404Back';
import Icon404Front from 'views/ErrorPage/icons/Icon404Front';
import Icon500Back from 'views/ErrorPage/icons/Icon500Back';
import Icon500Front from 'views/ErrorPage/icons/Icon500Front';
import IconCone from 'views/ErrorPage/icons/IconCone';
import IconGhost from 'views/ErrorPage/icons/IconGhost';

import { backText, frontText, iconWrapper, showIcon } from './style.css';

export default function ErrorCode({ code }: { code: 404 | 500 }) {
  return (
    <div className={iconWrapper}>
      {code === 404 ? (
        <>
          <i className={frontText}>
            <Icon404Front />
          </i>
          <i className={showIcon}>
            <IconGhost />
          </i>
          <i className={backText}>
            <Icon404Back />
          </i>
        </>
      ) : (
        <>
          <i className={frontText}>
            <Icon500Front />
          </i>
          <i className={showIcon}>
            <IconCone />
          </i>
          <i className={backText}>
            <Icon500Back />
          </i>
        </>
      )}
    </div>
  );
}
