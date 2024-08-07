import { container, info } from './style.css';

const Info = ({ value }: { value: string }) => {
  return (
    <article>
      <ol className={container}>
        {value?.split('\n').map((text, idx) => (
          <li className={info} key={`${idx},${text}`}>
            {text}
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Info;
