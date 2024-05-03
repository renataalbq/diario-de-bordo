import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "../../services/auth/register";

export default function CadastroUsuario() {
    const navigate = useNavigate();

    const [registerForm, setRegisterForm] = useState({
      login: "",
      password: "",
    });
    const { register } = useRegister();
  
    const handleInputChange = (e: {
      target: { name: string; value: string };
    }) => {
      const { name, value } = e.target;
      setRegisterForm({ ...registerForm, [name]: value });
    };
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      register(registerForm);
      navigate("/");
    };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cadastro</h2>
       
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="nome" className="block text-sm font-semibold leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nome"
                id="nome"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="login" className="block text-sm font-semibold leading-6 text-gray-900">
              Login
            </label>
            <div className="mt-2.5">
              <input
                id="login"
                name="login"
                type="text"
                autoComplete="login"
                value={registerForm.login}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="senha" className="block text-sm font-semibold leading-6 text-gray-900">
              Senha
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={registerForm.password}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}
