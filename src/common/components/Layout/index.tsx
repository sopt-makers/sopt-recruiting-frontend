import { PropsWithChildren, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import Header from './components/Header';
import { container, mainWrapper } from './style.css';

const Head = () => {
  const {
    recruitingInfo: { season, isMakers },
  } = useContext(RecruitingInfoContext);

  const TOUCH_ICON = isMakers ? '/makers-touch-icon.png' : '/apple-touch-icon.png';
  const ICON = isMakers ? '/makersIcon.svg' : '/icon.svg';
  const FAVICON = isMakers ? '/makersFavicon.ico' : '/favicon.ico';
  const SITE_NAME = isMakers === undefined ? 'SOPT 리크루팅' : `SOPT ${isMakers ? 'makers ' : ''}리크루팅`;
  const TITLE =
    season === undefined ? 'SOPT 모집 지원하기' : `SOPT ${isMakers ? 'makers ' : ''}${season}기 모집 지원하기`;
  const IMAGE = isMakers ? '/makersOg.png' : '/imgOg.png';
  const DESCRIPTION =
    isMakers === undefined
      ? `SOPT의 신입 기수 모집페이지입니다.`
      : `SOPT${isMakers ? ' makers' : ''}의 신입 기수 모집페이지입니다.`;
  const URL = isMakers ? 'https://recruiting.sopt.org' : 'https://recruit.sopt.org';

  return (
    <Helmet>
      <link rel="manifest" href={isMakers ? '/makersManifest.webmanifest' : '/manifest.webmanifest'} />

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
      <meta property="twitter:site" content={URL} />

      <title>{TITLE}</title>
      <meta name="author" content="sopt makers team official 4th" />
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={container}>
      <Head />
      <Header />
      <main className={mainWrapper}>{children || <Outlet />}</main>
    </div>
  );
};

export default Layout;
