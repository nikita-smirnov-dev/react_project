import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuthModal } from '../hooks/useAuthModal';
import { Modal } from '../components/Modal';
import { Auth } from '../components/Auth';
import { fetchMe } from '../api/userApi';
import { MenuElement } from '../UI/MenuElement';

const MainLayout: FC = () => {
  const { isModalOpen, openModal, closeModal } = useAuthModal();
  const navigate = useNavigate();

  const meQuery = useQuery({
    queryFn: () => fetchMe(),
    queryKey: ['profile'],
    retry: 0,
  });

  const handleClose = () => {
    closeModal();
  };

  const handleOprnAccount = () => {
    navigate('/account');
  };

  return (
    <>
      <Header
        userName={
          meQuery.data?.name && localStorage.getItem('isAuth') ? (
            <MenuElement title={meQuery.data.name} path="/account" />
          ) : null
        }
        onLoginClick={meQuery.data?.name ? handleOprnAccount : openModal}
      />
      <Outlet />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Auth closeModal={handleClose} />
      </Modal>
    </>
  );
};

export default MainLayout;
