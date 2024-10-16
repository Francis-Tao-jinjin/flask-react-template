import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  isLoggedIn: boolean;
  loadingUserInfo: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn, loadingUserInfo }) => {

  const navigator = useNavigate();

  if (loadingUserInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isLoggedIn ? (
        'Hello, user!'
      ) : 'You are not logged in.'}
    </div>
  );
};

export default Home;