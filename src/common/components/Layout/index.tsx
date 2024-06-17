import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Layout/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
