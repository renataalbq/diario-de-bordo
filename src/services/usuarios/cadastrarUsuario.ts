import { useState } from 'react';
import { IUsuario } from '../../model/IUsuario';

function useCadastrarUsuario() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cadastrarUsuario = async (usuario: IUsuario) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://26.27.1.67:8081/usuario/save', {
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

  return { cadastrarUsuario, isLoading, error };
}

export default useCadastrarUsuario;