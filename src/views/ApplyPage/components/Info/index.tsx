import { useContext } from 'react';

import { DeviceTypeContext } from '@store/deviceTypeContext';

import { containerVar, infoVar } from './style.css';

const Info = ({ value }: { value: string }) => {
  const { deviceType } = useContext(DeviceTypeContext);
  return (
    <article>
      <ol className={containerVar[deviceType]}>
        {value?.split('\n').map((text, idx) => (
          <li className={infoVar[deviceType]} key={`${idx},${text}`}>
            {text}
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Info;
