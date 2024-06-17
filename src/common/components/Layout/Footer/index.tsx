import { CHANNELS } from './constants';
import IconArrowRight from './icons/IconArrowRight';
import {
  channelText,
  channelWrapper,
  container,
  copyRightText,
  leftWrapper,
  rightWrapper,
  ruleButton,
  ruleText,
} from './style.css';

const Footer = () => {
  return (
    <footer className={container}>
      <div className={leftWrapper}>
        <a className={ruleButton} href="https://www.sopt.org/rules" target="_blank" rel="noreferrer noopener">
          <span className={ruleText}>SOPT 회칙</span>
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
          {CHANNELS.map(({ channel, link, icon }) => (
            <li key={channel}>
              <a href={link} target="_blank" rel="noreferrer noopener">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
