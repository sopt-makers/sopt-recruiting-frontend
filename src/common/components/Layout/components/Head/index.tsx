import { Helmet } from 'react-helmet-async';

const Head = () => {
  const TOUCH_ICON = __IS_MAKERS__ ? '/makers-touch-icon.png' : '/apple-touch-icon.png';
  const ICON = __IS_MAKERS__ ? '/makersIcon.svg' : '/icon.svg';
  const FAVICON = __IS_MAKERS__ ? '/makersFavicon.ico' : '/favicon.ico';
  const SITE_NAME = `SOPT ${__IS_MAKERS__ ? 'makers ' : ''}리크루팅`;
  const TITLE = `SOPT ${__IS_MAKERS__ ? 'makers ' : ''}모집 지원하기`;
  const IMAGE = __IS_MAKERS__ ? '/makersOg.png' : '/imgOg.png';
  const DESCRIPTION = `SOPT${__IS_MAKERS__ ? ' makers' : ''}의 신입 기수 모집페이지입니다.`;
  const URL = __IS_MAKERS__ ? 'https://recruiting.sopt.org' : 'https://recruit.sopt.org';

  return (
    <Helmet>
      <link rel="icon" href={FAVICON} sizes="32x32" />
      <link rel="icon" href={ICON} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={TOUCH_ICON} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={URL} />

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
      <meta property="twitter:site" content={URL} />
    </Helmet>
  );
};

export default Head;
