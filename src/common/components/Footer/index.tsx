import IconArrowRight from './icons/IconArrowRight';
import { channelText, container, copyRightText, leftWrapper, rightWrapper, titleButton } from './style.css';

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
        {/* <Channels isFooter={true} /> */}
      </div>
    </footer>
  );
};

export default Footer;
