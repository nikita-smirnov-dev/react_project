import type { FC } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useAuthModal } from '../hooks/useAuthModal';
import { Modal } from '../components/Modal';
import { Auth } from '../components/Auth';

const MainLayout: FC = () => {
  const { isModalOpen, openModal } = useAuthModal();

  return (
    <>
      <Header onLoginClick={openModal} />
      <Outlet />
      <Footer />
      <Modal isOpen={isModalOpen}>
        <Auth />
      </Modal>
    </>
  );
};

export default MainLayout;
