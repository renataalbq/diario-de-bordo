import { useEffect, useState } from 'react';
import { IAtividade } from '../../model/IAtividade';

function useBuscarAtividadePorId(id: string) {
    const [atividade, setAtividade] = useState<IAtividade | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setIsLoading(true);
  
      fetch(`http://localhost:8081/atividade/get/${id}`, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Requisição falhou');
          }
        })
        .then((data) => {
          setAtividade(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError('Ocorreu um erro ao buscar a atividade');
          setIsLoading(false);
          console.log(err)
        });
    }, [id]);
  
    return { atividade, isLoading, error };
  }
  
  export default useBuscarAtividadePorId;