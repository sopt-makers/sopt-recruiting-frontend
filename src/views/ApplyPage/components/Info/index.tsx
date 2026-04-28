import { containerVar, infoVar } from './style.css';

const Info = ({ value }: { value: string }) => {
  return (
    <article>
      <ol className={containerVar}>
        {value?.split('\n').map((text, idx) => (
          <li className={infoVar} key={`${idx},${text}`}>
            {text}
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Info;
