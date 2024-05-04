import { useState } from 'react';
import { authorizedFetch } from '../auth/interceptor';

function useDeletarAtividade() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deletarAtividade = async (id: number) => {
    setIsLoading(true);

    try {
      const response = await authorizedFetch(`http://26.27.1.67:8081/atividade/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar atividade');
      }

      setIsLoading(false);
    } catch (error) {
      setError('Erro ao deletar atividade');
      setIsLoading(false);
    }
  };

  return { deletarAtividade, isLoading, error };
}

export default useDeletarAtividade;