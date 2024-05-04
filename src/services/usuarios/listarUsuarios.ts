import { useEffect, useState } from 'react';
import { authorizedFetch } from '../auth/interceptor';

function useListarUsuarios() {
  const [usuarios, setUsuarios ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    authorizedFetch('http://26.27.1.67:8081/usuario/getAllPage', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Ocorreu um erro ao listar usuarios');
        setIsLoading(false);
      });
  }, []);

  return { usuarios, isLoading, error };
}

export default useListarUsuarios;