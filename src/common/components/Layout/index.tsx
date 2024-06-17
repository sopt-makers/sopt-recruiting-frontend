import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>header입니다.</header>
      <main>{children || <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
