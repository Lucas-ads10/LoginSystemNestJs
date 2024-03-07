// SignUp.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface SignUpProps {
  onLoginClick: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onLoginClick }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', { name, email, password });
      console.log('Signup successful:', response.data);
      // Redirecionar o usuário ou fazer qualquer outra ação necessária após o cadastro bem-sucedido
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta?{' '}
        <button type="button" onClick={onLoginClick}>
          Faça login
        </button>
      </p>
    </div>
  );
};

export default SignUp;
