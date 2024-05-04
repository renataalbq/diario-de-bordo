import { useState } from 'react';

function useDeletarUsuario() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deletarUsuario = async (id: number) => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://26.27.1.67:8081/usuario/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar usuario');
      }

      setIsLoading(false);
    } catch (error) {
      setError('Erro ao deletar usuario');
      setIsLoading(false);
    }
  };

  return { deletarUsuario, isLoading, error };
}

export default useDeletarUsuario;