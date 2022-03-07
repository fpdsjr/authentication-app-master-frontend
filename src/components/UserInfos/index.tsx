import React, { useEffect } from 'react';
import { Api } from '../../services/api';

// import { Container } from './styles';

const UserInfos: React.FC = () => {
  const fetchUserInfos = async () => {
    const response = await Api.post('/user/userinfos');
    console.log(response.data);
  };

  useEffect(() => {
    fetchUserInfos();
  }, []);

  return <h1>Hello World</h1>;
};

export default UserInfos;
