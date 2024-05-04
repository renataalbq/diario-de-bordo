import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = (authToken: string) => {
    localStorage.setItem('authToken', authToken);
  };

  const handleLogin = async (loginData: unknown) => {
    setError('');
    try {
      const response = await fetch('http://26.27.1.67:8081/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const authToken = responseData.token;
        login(authToken);

        navigate("/home");
      } else {
        setError('Falha no login. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return {
    handleLogin,
    error,
  };
};

export default useLogin;
