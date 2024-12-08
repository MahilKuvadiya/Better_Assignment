import React, { useState } from 'react';
import SignUpForm from './components/AuthForms/SignUpForm';
import LoginForm from './components/AuthForms/LoginForm';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between forms

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>React Auth Forms, by Mahil!</h1>
      {isLogin ? (
        <>
          <LoginForm />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={toggleForm}
              style={{
                border: 'none',
                background: 'none',
                color: '#007bff',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={toggleForm}
              style={{
                border: 'none',
                background: 'none',
                color: '#007bff',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
