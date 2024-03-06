// App.tsx

import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

enum FormType {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

const App: React.FC = () => {
  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);

  const handleSignUpClick = () => {
    setFormType(FormType.SIGNUP);
  };

  const handleLoginClick = () => {
    setFormType(FormType.LOGIN);
  };

  return (
    <div className="container">
      <div className="card-container">
        {formType === FormType.LOGIN ? (
          <div className="card">
            <Login onSignUpClick={handleSignUpClick} />
          </div>
        ) : (
          <div className="card">
            <SignUp onLoginClick={handleLoginClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
