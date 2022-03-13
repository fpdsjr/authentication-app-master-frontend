import React, { ReactNode } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const ShowInfos = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <h1>You dont have access</h1>;
  }

  return children;
};
