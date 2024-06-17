import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children || <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
