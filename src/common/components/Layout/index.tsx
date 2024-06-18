import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Layout/Footer';

import Header from './Header';
import { container } from './style.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={container}>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
