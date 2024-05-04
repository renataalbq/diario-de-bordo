import React, { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
interface IPayload {
  id: string
  role: number | null;
  login: string;
}
interface AuthContextType {
  token: string | null;
  role: number | null;
  id: string
  login: string;
  entrar: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!); // Usando 'null!' para simplificar a inicialização

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
        return {
          token,
          role: decoded.role,
          login: decoded.login,
          id: decoded.id,
          entrar: () => {},
          logout: () => {},
        };
      } catch (error) {
        localStorage.clear();
      }
    }
    return {
      token: null,
      role: 0,
      login: '',
      id: '',
      entrar: () => {},
      logout: () => {},
    };
  };

  const [authState, setAuthState] = useState<AuthContextType>(initializeAuthState());

  const entrar = (newToken: string) => {
    const decoded: IPayload = jwtDecode(newToken);
    localStorage.setItem('token', newToken);
    setAuthState({
      token: newToken,
      role: decoded.role,
      login: decoded.login,
      id: decoded.id,
      entrar,
      logout,
    });
  };

  const logout = () => {
    localStorage.clear();
    setAuthState({
      token: null,
      role: null,
      login: '',
      id: '',
      entrar,
      logout,
    });
  };

  useEffect(() => {
    setAuthState((prevState) => ({
      ...prevState,
      entrar,
      logout,
    }));
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};