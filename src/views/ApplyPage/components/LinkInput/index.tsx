import { useContext } from 'react';

import { DeviceTypeContext } from '@store/deviceTypeContext';

import { containerVar, label, linkVar } from './style.css';

const LinkInput = ({ urls }: { urls: string[] }) => {
  const { deviceType } = useContext(DeviceTypeContext);
  return (
    <>
      {urls.length === 1 && (
        <div className={containerVar[deviceType]}>
          <span className={label}>링크</span>
          <a className={linkVar[deviceType]} href={urls[0]} target="_blank" rel="noreferrer noopener">
            {urls[0]}
          </a>
        </div>
      )}
      {urls.length > 1 &&
        urls.map((url, idx) => (
          <div key={url} className={containerVar[deviceType]}>
            <span className={label}>링크 {idx + 1}</span>
            <a className={linkVar[deviceType]} href={url} target="_blank" rel="noreferrer noopener">
              {url}
            </a>
          </div>
        ))}
    </>
  );
};

export default LinkInput;
