import { useEffect, useState } from 'react';

function useListarAtividades() {
  const [atividades, setAtividades ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://26.27.1.67:8080/atividade/getAllPage', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setAtividades(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Ocorreu um erro ao listar atividades');
        setIsLoading(false);
      });
  }, []);

  return { atividades, isLoading, error };
}

export default useListarAtividades;