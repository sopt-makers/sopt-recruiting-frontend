import Callout from '@components/Callout';
import '../../common/components/Callout/style.css';
import {
  browserButton,
  browsersWrapper,
  contactButtonVar,
  container,
  heading,
  infoText,
  infoTitle,
  instructionVar,
  updateInfoTitle,
  updateInfoWrapper,
} from './style.css';
import imgChrome from './assets/imgChrome.png';
import imgEdge from './assets/imgEdge.png';
import imgFirefox from './assets/imgFirefox.png';
import imgSafari from './assets/imgSafari.png';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const UnsupportedPage = () => {
  const { deviceType } = useDeviceType();
  const isMakers = import.meta.env.MODE === 'makers';

  return (
    <section className={container}>
      <h1 className={heading}>지원되지 않는 브라우저예요</h1>
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
      <article className={updateInfoWrapper}>
        <p className={updateInfoTitle}>브라우저 업데이트 하기</p>
        <div className={browsersWrapper}>
          <a
            className={browserButton}
            href="https://www.google.com/chrome/update/"
            target="_blank"
            rel="noreferrer noopener">
            <img src={imgChrome} />
            Chrome
          </a>
          <a
            className={browserButton}
            href="https://support.apple.com/en-us/102665"
            target="_blank"
            rel="noreferrer noopener">
            <img src={imgSafari} />
            Safari
          </a>
          <a
            className={browserButton}
            href="https://support.microsoft.com/en-au/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1"
            target="_blank"
            rel="noreferrer noopener">
            <img src={imgEdge} />
            Edge
          </a>
          <a
            className={browserButton}
            href="https://support.mozilla.org/en-US/kb/update-firefox-latest-release"
            target="_blank"
            rel="noreferrer noopener">
            <img src={imgFirefox} />
            Firefox
          </a>
        </div>
      </article>
      <p
        className={
          instructionVar[deviceType]
        }>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a
        id="chat-channel-button"
        href={isMakers ? 'https://makers.sopt.org/' : 'https://www.sopt.org/'}
        target="_blank"
        rel="noreferrer noopener"
        className={contactButtonVar[deviceType]}>
        문의하기
      </a>
    </section>
  );
};

export default UnsupportedPage;
