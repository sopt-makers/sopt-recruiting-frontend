import { PropsWithChildren, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import Header from './components/Header';
import { container, mainWrapper } from './style.css';

const Head = () => {
  const {
    recruitingInfo: { season, group, soptName, isMakers },
  } = useContext(RecruitingInfoContext);

  const SITE_NAME = 'SOPT 리크루팅';
  const TITLE = `SOPT ${season}기 ${group} 모집`;
  const IMAGE = '/imgOg.png';
  const DESCRIPTION = 'SOPT의 신입 기수 모집페이지입니다.';

  return (
    <Helmet>
      <link rel="manifest" href="/manifest.webmanifest" />

      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

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
