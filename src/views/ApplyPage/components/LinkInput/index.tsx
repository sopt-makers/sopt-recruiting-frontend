import { container, label, link } from './style.css';

const LinkInput = ({ urls }: { urls: string[] }) => {
  return (
    <>
      {urls.length === 1 && (
        <div className={container}>
          <span className={label}>링크</span>
          <a className={link} href={urls[0]} target="_blank" rel="noreferrer">
            {urls[0]}
          </a>
        </div>
      )}
      {urls.length > 1 &&
        urls.map((url, idx) => (
          <div key={url} className={container}>
            <span className={label}>링크 {idx + 1}</span>
            <a className={link} href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        ))}
    </>
  );
};

export default LinkInput;
