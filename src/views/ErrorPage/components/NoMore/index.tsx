import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { article, contactButtonVar, container, errorButtonVar, errorTextVar, instructionVar } from '../../style.css';
import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';
import { MENU_ITEMS, MENU_ITEMS_MAKERS } from '@components/Layout/components/Header/contants';

interface NoMoreProps {
  isMakers?: boolean;
  content: string;
}

const NoMore = ({ isMakers, content }: NoMoreProps) => {
  const { deviceType } = useDeviceType();

  return (
    <section className={container}>
      <article className={article}>
        <p className={errorTextVar[deviceType]}>{content}</p>
        <AmplitudeEventTrack eventName={isMakers ? 'click-nomore-official_makers' : 'click-nomore-official'}>
          <a
            href={isMakers ? 'https://makers.sopt.org/' : 'https://www.sopt.org/'}
            className={errorButtonVar[deviceType]}
            target="_blank"
            rel="noreferrer noopener">
            공식 홈페이지 가기
          </a>
        </AmplitudeEventTrack>
      </article>
      <p className={instructionVar[deviceType]}>{`문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <AmplitudeEventTrack eventName={isMakers ? 'click-nomore-ask_makers' : 'click-nomore-ask'}>
        <a
          id="chat-channel-button"
          href={
            isMakers
              ? MENU_ITEMS_MAKERS.find((item) => item.text === '문의하기')?.path
              : MENU_ITEMS.find((item) => item.text === '문의하기')?.path
          }
          target="_blank"
          rel="noreferrer noopener"
          className={contactButtonVar[deviceType]}>
          문의하기
        </a>
      </AmplitudeEventTrack>
    </section>
  );
};

export default NoMore;
