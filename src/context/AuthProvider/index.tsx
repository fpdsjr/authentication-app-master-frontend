import React, { createContext, useEffect, useState } from 'react';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
  LoginWithGithub,
} from './utils';

interface IUser {
  email?: string;
  token?: string;
}

interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  authenticateWithGithub: (githubCode: string) => Promise<void>;
  githubCode?: string | null;
}

interface IAuthProvider {
  children: JSX.Element;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
  const [githubCode, setGitHubCode] = useState<string | null>(null);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function authenticateWithGithub(githubCode: string) {
    const response = await LoginWithGithub(githubCode);
    setGitHubCode(githubCode);
    const payload = { token: response.token, email: '' };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  function handleGithubCode(githubCode: string) {
    setGitHubCode(githubCode);
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        logout,
        authenticateWithGithub,
        githubCode,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
