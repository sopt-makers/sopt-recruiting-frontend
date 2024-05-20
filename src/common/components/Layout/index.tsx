import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>header입니다.</header>
      <main>{children || <Outlet />}</main>
      <footer>footer입니다.</footer>
    </>
  );
};

export default Layout;
