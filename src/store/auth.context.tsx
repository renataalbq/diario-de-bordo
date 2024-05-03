import React, { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

interface IPayload {
  role: number;
  login: string;
  id: string;
}

interface AuthContextType {
  token: string | null;
  login: string;
  id: string;
  entrar: (token: string) => void;
  sair: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initializeAuthState = (): AuthContextType => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: IPayload = jwtDecode(token);
        console.log(decoded, 'decoded')
        return {
          token,
          login: decoded.login,
          id: decoded.id,
          entrar: () => {},
          sair: () => {},
        };
      } catch (error) {
        localStorage.clear();
      }
    }
    return {
      token: null,
      login: '',
      id: '',
      entrar: () => {},
      sair: () => {},
    };
  };

  const [authState, setAuthState] = useState<AuthContextType>(initializeAuthState());

  const entrar = (newToken: string) => {
    const decoded: IPayload = jwtDecode(newToken);
    localStorage.setItem('token', newToken);
    setAuthState({
      token: newToken,
      login: decoded.login,
      id: decoded.id,
      entrar,
      sair,
    });
  };

  const sair = () => {
    localStorage.clear();
    setAuthState({
      token: null,
      login: '',
      id: '',
      entrar,
      sair,
    });
  };

  useEffect(() => {
    setAuthState((prevState) => ({
      ...prevState,
      sair,
      entrar,
    }));
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};