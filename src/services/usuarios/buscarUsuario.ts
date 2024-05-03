import { useEffect, useState } from 'react';
import { IUsuario } from '../../model/IUsuario';

function useBuscarUsuarioPorId(id: string) {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setIsLoading(true);
  
      fetch(`http://localhost:8081/usuario/get/${id}`, {
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
          setUsuario(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError('Ocorreu um erro ao buscar o usuario');
          setIsLoading(false);
          console.log(err)
        });
    }, [id]);
  
    return { usuario, isLoading, error };
  }
  
  export default useBuscarUsuarioPorId;