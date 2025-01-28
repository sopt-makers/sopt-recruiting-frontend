import { useDeviceType } from 'contexts/DeviceTypeProvider';
import Icon404Back from 'views/ErrorPage/icons/Icon404Back';
import Icon404Front from 'views/ErrorPage/icons/Icon404Front';
import Icon500Back from 'views/ErrorPage/icons/Icon500Back';
import Icon500Front from 'views/ErrorPage/icons/Icon500Front';
import IconCone from 'views/ErrorPage/icons/IconCone';
import IconGhost from 'views/ErrorPage/icons/IconGhost';

import { backText, frontText, iconWrapperVar, showIconVar } from './style.css';

export default function ErrorCode({ code }: { code: 404 | 500 }) {
  const { deviceType } = useDeviceType();
  const isMobile = deviceType === 'MOB';

  return (
    <div className={iconWrapperVar[deviceType]}>
      {code === 404 ? (
        <>
          {!isMobile && (
            <i className={frontText}>
              <Icon404Front />
            </i>
          )}
          <i className={showIconVar[deviceType]}>
            <IconGhost />
          </i>
          {!isMobile && (
            <i className={backText}>
              <Icon404Back />
            </i>
          )}
        </>
      ) : (
        <>
          {!isMobile && (
            <i className={frontText}>
              <Icon500Front />
            </i>
          )}
          <i className={showIconVar[deviceType]}>
            <IconCone />
          </i>
          {!isMobile && (
            <i className={backText}>
              <Icon500Back />
            </i>
          )}
        </>
      )}
    </div>
  );
}
