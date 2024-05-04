export function authorizedFetch(url: string, options: any) {
  const token = localStorage.getItem('authToken');

  if (token){
    options.headers = {
        ...options.headers,
        'Authorization': token ? `Bearer ${token}` : '',
    };
  }

  return fetch(url, options).catch(error => {
      console.error("Erro capturado pelo interceptor:", error);
      throw error;
  });
}
