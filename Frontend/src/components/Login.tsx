// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {
  onSignUpClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log('Login successful:', response.data);
      // Redirecionar o usuário ou fazer qualquer outra ação necessária após o login bem-sucedido
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta?{' '}
        <button type="button" onClick={onSignUpClick}>
          Cadastre-se
        </button>
      </p>
    </div>
  );
};

export default Login;
