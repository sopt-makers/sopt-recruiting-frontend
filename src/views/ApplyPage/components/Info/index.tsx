import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { containerVar, infoVar } from './style.css';

const Info = ({ value }: { value: string }) => {
  const { deviceType } = useDeviceType();
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
