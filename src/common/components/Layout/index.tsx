import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Head from './components/Head';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { container, mainWrapper } from './style.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={container}>
      <Head />
      <ScrollToTop />
      <Header />
      <main className={mainWrapper}>{children || <Outlet />}</main>
    </div>
  );
};

export default Layout;
