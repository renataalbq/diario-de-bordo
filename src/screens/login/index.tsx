import { useNavigate } from "react-router-dom";
import img from "../../assets/img.jpg";
import { useState } from "react";

export default function Login() {
 const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: "",
        senha: "",
    });

    const handleLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/home");
        try {
          const response = await fetch('api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginForm),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData)
            navigate("/home");
          } else {
            alert('Falha no login. Verifique seu e-mail e senha.');
          }
        } catch (error) {
            alert('Erro ao fazer login. Tente novamente mais tarde.');
        }
      };
      
    
      const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
      };
    

  return (
    <div className="bg-blue-400">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="overflow-hidden bg-blue-500 px-6 pt-9 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-44 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bem vindo ao
              <br />
              Diário de Bordo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              8° PB Escoteiros do mar Tenente Lucena
            </p>
            <div className="mt-6 flex flex-col gap-y-4"> 
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={loginForm.email}
                onChange={handleInputChange}
                className="w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
                placeholder="Email"
              />
              <input
                id="senha"
                name="senha"
                type="password"
                autoComplete="password"
                required
                value={loginForm.senha}
                onChange={handleInputChange}
                className="w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm sm:text-sm sm:leading-6"
                placeholder="Senha"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none"
                onClick={handleLogin}
              >
                Entrar
              </button>
            </div>
            <div className="pt-6 text-white">
                <p>Ainda não tem cadastro? {''}
                <a href="/cadastro-usuario" className="underline text-lg">Cadastre-se</a>
            </p>
            </div>
          </div>
          <div className="relative mt-14 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-full max-w-none sm:w-96 sm:h-60 lg:w-[57rem] lg:h-auto rounded-md bg-white/5 ring-1 ring-white/10"
              src={img}
              alt="Escoteiros do Mar"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
