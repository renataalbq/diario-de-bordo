import { useState } from 'react';
import { IUsuario } from '../../model/IUsuario';

function useAtualizarUsuario() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const atualizarUsuario = async (id: number, usuarioData: IUsuario) => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://26.27.1.67:8081/usuario/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar atividade');
      }

      setIsLoading(false);
    } catch (error) {
      setError('Erro ao atualizar atividade');
      setIsLoading(false);
    }
  };

  return { atualizarUsuario, isLoading, error };
}

export default useAtualizarUsuario;