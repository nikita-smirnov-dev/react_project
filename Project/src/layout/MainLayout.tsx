import type { FC } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
