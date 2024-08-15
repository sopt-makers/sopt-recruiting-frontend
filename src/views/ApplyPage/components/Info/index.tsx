import { useDevice } from '@hooks/useDevice';

import { containerVar, infoVar } from './style.css';

const Info = ({ value }: { value: string }) => {
  const deviceType = useDevice();
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
