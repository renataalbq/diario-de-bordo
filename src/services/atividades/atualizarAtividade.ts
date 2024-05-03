import { useState } from 'react';
import { IAtividade } from '../../model/IAtividade';

function useAtualizarAtividade() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const atualizarAtividade = async (id: number, atividadeData: IAtividade) => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://26.27.1.67:8081/atividade/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atividadeData),
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

  return { atualizarAtividade, isLoading, error };
}

export default useAtualizarAtividade;