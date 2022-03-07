import React, { ReactNode } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

// import { Container } from './styles';

export const ShowInfos = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You dont have access</h1>;
  }

  return children;
};
