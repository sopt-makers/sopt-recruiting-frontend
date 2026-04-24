import NotificationInput from 'views/IntroducePage/components/ApplyHeader/components/NotificationInput';
import { container, title } from './style.css';

const NotificationHeader = () => {
  return (
    <header className={container}>
      <h1 className={title}>{`지금은 모집 기간이 아니에요.\n모집 기간이 되면 메일로 알려드릴게요.`}</h1>
      <NotificationInput />
    </header>
  );
};

export default NotificationHeader;
