import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children || <Outlet />}</main>
    </>
  );
};

export default Layout;
