import { useState } from 'react';
import { IAtividade } from '../../model/IAtividade';

function useCadastrarAtividade() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cadastrarAtividade = async (atividade: IAtividade) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://26.27.1.67:8081/atividade/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atividade),
      });

      if (!response.ok) {
        throw new Error(response.type);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setError('Erro ao criar atividade');
      setIsLoading(false);
    }
  };

  return { cadastrarAtividade, isLoading, error };
}

export default useCadastrarAtividade;