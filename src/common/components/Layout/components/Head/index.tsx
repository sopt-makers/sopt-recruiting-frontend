import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { Helmet } from 'react-helmet-async';

const Head = () => {
  const {
    recruitingInfo: { isMakers },
  } = useRecruitingInfo();

  const TOUCH_ICON = isMakers ? '/makers-touch-icon.png' : '/apple-touch-icon.png';
  const ICON = isMakers ? '/makersIcon.svg' : '/icon.svg';
  const FAVICON = isMakers ? '/makersFavicon.ico' : '/favicon.ico';
  const SITE_NAME = `SOPT ${isMakers ? 'makers ' : ''}리크루팅`;
  const TITLE = `SOPT ${isMakers ? 'makers ' : ''}모집 지원하기`;
  const IMAGE = isMakers ? '/makersOg.png' : '/imgOg.png';
  const DESCRIPTION = `SOPT${isMakers ? ' makers' : ''}의 신입 기수 모집페이지입니다.`;

  return (
    <Helmet>
      <link rel="icon" href={FAVICON} sizes="32x32" />
      <link rel="icon" href={ICON} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={TOUCH_ICON} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta property="og:image" content={IMAGE} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />

      <meta property="twitter:card" content="website" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE} />
      <meta property="twitter:image:alt" content={SITE_NAME} />

      <title>{TITLE}</title>
      <meta name="author" content="sopt makers team official 4th" />
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
  );
};

export default Head;
