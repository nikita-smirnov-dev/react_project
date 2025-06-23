import { useQuery } from '@tanstack/react-query';

import { fetchMe } from '../../api/userApi';
import { Account } from './Account';
import { DataLoader } from '../../UI/DataLoader';

export const FetchAccount = () => {
  const meQuery = useQuery({
    queryFn: () => fetchMe(),
    queryKey: ['profile'],
    retry: 0,
  });

  switch (meQuery.status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );

    case 'success':
      return <Account userData={meQuery.data} />;

    case 'error':
      return (
        <div>
          <span>Произошла ошибка!</span>
          <button onClick={() => meQuery.refetch()}>Повторить запрос</button>
        </div>
      );
  }
};

export default FetchAccount;
