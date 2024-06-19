import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Layout/Footer';

import Header from './Header';
import { container } from './style.css';

interface LayoutProps {
  hasFooter?: boolean;
}

const Layout = ({ hasFooter, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={container}>
      <Header />
      <main>{children || <Outlet />}</main>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
