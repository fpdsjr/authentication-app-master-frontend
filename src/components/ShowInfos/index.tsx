import React, { ReactNode } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

// import { Container } from './styles';

interface IChildren {
  children: ReactNode;
}

export const ShowInfos = ({ children }: IChildren) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You dont have access</h1>;
  }

  return children;
};
