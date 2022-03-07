import React, { useState } from 'react';
import { Api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
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

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmitRegister}>Start coding now</button>
    </>
  );
};
