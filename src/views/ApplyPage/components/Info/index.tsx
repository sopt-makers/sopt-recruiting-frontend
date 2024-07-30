import { container, info } from './style.css';

const Info = ({ value }: { value: string }) => {
  return (
    <article className={container}>
      {value.split('\n').map((text, idx) => (
        <p className={info} key={`${text}+${idx}`}>
          {text && <>&#183;</>} {text}
        </p>
      ))}
    </article>
  );
};

export default Info;
