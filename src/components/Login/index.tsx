import React, { useState } from 'react';

// import { Container } from './styles';

const LoginInputs: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </>
  );
};

export default LoginInputs;
