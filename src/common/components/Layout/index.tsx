import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
