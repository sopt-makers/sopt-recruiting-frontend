import { CHANNELS } from './constants';
import IconArrowRight from './icons/IconArrowRight';
import IconFacebook from './icons/IconFacebook';
import IconInstagram from './icons/IconInstagram';
import IconKakaotalk from './icons/IconKakaotalk';
import IconMail from './icons/IconMail';
import IconYoutube from './icons/IconYoutube';
import {
  channelText,
  channelWrapper,
  container,
  copyRightText,
  leftWrapper,
  rightWrapper,
  titleButton,
} from './style.css';

const Footer = () => {
  return (
    <footer className={container}>
      <div className={leftWrapper}>
        <a className={titleButton} href="https://www.sopt.org/rules" target="_blank" rel="noreferrer noopener">
          <span>SOPT 회칙</span>
          <IconArrowRight />
        </a>
        <p className={copyRightText}>
          SOPT (솝트, 대학생연합 IT벤처창업 동아리)
          <br />
          Copyrightⓒ2022.SOPT. All rights reserved.
        </p>
      </div>
      <div className={rightWrapper}>
        <p className={channelText}>SOPT 채널 바로가기</p>
        <ul className={channelWrapper}>
          {CHANNELS.map(({ channel, icon }) => (
            <li key={channel}>{icon}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
