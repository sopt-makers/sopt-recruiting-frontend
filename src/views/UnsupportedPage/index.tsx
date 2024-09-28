import Callout from '@components/Callout';
import '../../common/components/Callout/style.css';
import {
  browserButtonVar,
  browserIconVar,
  browsersWrapper,
  contactButtonVar,
  container,
  headingVar,
  infoText,
  infoTitle,
  instructionVar,
  updateInfoTitle,
  updateInfoWrapperVar,
} from './style.css';
import ChromeIcon from './assets/ChromeIcon';
import EdgeIcon from './assets/EdgeIcon';
import FirefoxIcon from './assets/FirefoxIcon';
import SafariIcon from './assets/SafariIcon';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const UnsupportedPage = () => {
  const { deviceType } = useDeviceType();
  const isMakers = import.meta.env.MODE === 'makers';

  return (
    <section className={container}>
      <h1 className={headingVar[deviceType]}>지원되지 않는 브라우저예요</h1>
      <Callout>
        <div>
          <p className={infoTitle}>지원하지 않는 브라우저 목록이에요.</p>
          <ol className={infoText}>
            <li>1. 서비스가 종료된 브라우저</li>
            <li>2. 업데이트 후 2.5년이 지난 브라우저</li>
            <li>3. 전 세계 0.3% 미만의 점유율을 보유한 브라우저</li>
          </ol>
        </div>
      </Callout>
      <article className={updateInfoWrapperVar[deviceType]}>
        <p className={updateInfoTitle}>브라우저 업데이트 하기</p>
        <div className={browsersWrapper}>
          <a
            className={browserButtonVar[deviceType]}
            href="https://www.google.com/chrome/update/"
            target="_blank"
            rel="noreferrer noopener">
            <ChromeIcon className={browserIconVar[deviceType]} />
            <span>Chrome</span>
          </a>
          <a
            className={browserButtonVar[deviceType]}
            href="https://support.apple.com/en-us/102665"
            target="_blank"
            rel="noreferrer noopener">
            <SafariIcon className={browserIconVar[deviceType]} />
            <span>Safari</span>
          </a>
          <a
            className={browserButtonVar[deviceType]}
            href="https://support.microsoft.com/en-au/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1"
            target="_blank"
            rel="noreferrer noopener">
            <EdgeIcon className={browserIconVar[deviceType]} />
            <span>Edge</span>
          </a>
          <a
            className={browserButtonVar[deviceType]}
            href="https://support.mozilla.org/en-US/kb/update-firefox-latest-release"
            target="_blank"
            rel="noreferrer noopener">
            <FirefoxIcon className={browserIconVar[deviceType]} />
            <span>Firefox</span>
          </a>
        </div>
      </article>
      <p
        className={
          instructionVar[deviceType]
        }>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a
        id="chat-channel-button"
        href={isMakers ? 'https://pf.kakao.com/_sxaIWG' : 'https://pf.kakao.com/_JdTKd'}
        target="_blank"
        rel="noreferrer noopener"
        className={contactButtonVar[deviceType]}>
        문의하기
      </a>
    </section>
  );
};

export default UnsupportedPage;
