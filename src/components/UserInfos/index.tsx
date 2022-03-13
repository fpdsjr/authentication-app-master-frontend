import React, { useEffect } from 'react';
import { Api } from '../../services/api';
import { useAuth } from '../../context/AuthProvider/useAuth';

// import { Container } from './styles';

const UserInfos: React.FC = () => {
  const auth = useAuth();

  const fetchUserInfos = async () => {
    const response = await Api.post('/user/userinfos');
  };

  const fetchUserGithub = async () => {
    const response = await Api.post('/github/authenticate', {
      code: auth.githubCode,
    });

    console.log(response);
  };

  useEffect(() => {
    fetchUserGithub();
  }, []);

  return <h1>Hello World</h1>;
};

export default UserInfos;
