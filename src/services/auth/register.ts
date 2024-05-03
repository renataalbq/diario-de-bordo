import { useState } from 'react';
import { IUsuario } from '../../model/IUsuario';

function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (usuario: IUsuario) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://26.27.1.67:8081/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error(response.type);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setError('Erro ao criar usuario');
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
}

export default useRegister;