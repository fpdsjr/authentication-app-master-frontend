import React, { useState, useEffect } from 'react';
import { Api } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';

// import { Container } from './styles';

export const Home: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmitRegister = async () => {
    try {
      const response = await Api.post('/user/register', {
        email: email,
        password: password,
      });

      await auth.authenticate(email, password);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginGithub = () => {
    const sighInUrl =
      'https://github.com/login/oauth/authorize?scope=user&client_id=514dc495b6859911bdd8';

    auth.email = 'authenticated';
    window.location.href = sighInUrl;
  };

  const signIn = async (githubCode: string) => {
    await auth.authenticateWithGithub(githubCode);
  };

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      signIn(githubCode);
      navigate('/profile');
    }
  }, []);

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmitRegister}>Start coding now</button>
      <button onClick={handleLoginGithub}>Login With Github</button>
    </>
  );
};
