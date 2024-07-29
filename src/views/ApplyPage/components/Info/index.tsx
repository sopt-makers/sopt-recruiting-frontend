import { container, info } from './style.css';

const Info = ({ value }: { value: string }) => {
  return (
    <article className={container}>
      {value.split('\n').map((text) => (
        <p className={info} key={text}>
          {text && <>&#183;</>} {text}
        </p>
      ))}
    </article>
  );
};

export default Info;
