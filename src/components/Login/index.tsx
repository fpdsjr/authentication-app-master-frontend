import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';

// import { Container } from './styles';

const LoginInputs: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      await auth.authenticate(email, password);
      navigate('/profile');
    } catch (error) {
      console.log('Invalid email or password');
    }
  }

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};

export default LoginInputs;
