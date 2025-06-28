import type { FC } from 'react';
import './NotFound.css';
import { Button } from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <main>
      <section>
        <div className="not-found__content">
          <h1 className="not-found__title section-title">404</h1>
          <h2 className="not-found__subtitle">Страница не найдена</h2>
          <p className="not-found__text text">
            К сожалению, запрашиваемая страница не существует или была удалена.
          </p>
          <Button className="not-found__btn" onClick={handleGoBack}>
            {' '}
            Назад
          </Button>
        </div>
      </section>
    </main>
  );
};
