import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { Button } from '../../UI/Button';
import { queryClient } from '../../api/queryClient';
import { logout } from '../../api/userApi';

import './LogoutButton.css';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.setQueryData(['profile'], null);
      localStorage.removeItem('isAuth');
      navigate('/');
    },
  });

  const hundleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div>
      {logoutMutation.error && <span>{logoutMutation.error.message}</span>}
      <Button className="logout-button" onClick={hundleLogout}>
        Выйти из аккаунта
      </Button>
    </div>
  );
};
