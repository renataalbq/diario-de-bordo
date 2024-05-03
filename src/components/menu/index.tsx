import { useState } from "react";
import logo from '../../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
    <div className="px-4 py-5 mx-auto bg-blue-100 sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/home"
                aria-label="Início"
                title="Início"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/cadastro-atividade"
                aria-label="Cadastro de Atividades"
                title="Cadastro de Atividades"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Cadastro de Atividades
              </a>
            </li>
            
          </ul>
          <a
            href="/home"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-auto"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Diário de Bordo
            </span>
            
            <img src={logo} width={70} className='ml-4' />
          </a>
          <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Sair"
                title="Sair"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Sair
              </a>
            </li>
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
             <IoMdMenu />

            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Diário de Bordo"
                        title="Diário de Bordo"
                        className="inline-flex items-center"
                      >
                       
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Diário de Bordo
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/home"
                          aria-label="Início"
                          title="Início"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Início
                        </a>
                      </li>
                      <li>
                        <a
                          href="/cadastro-atividade"
                          aria-label="Cadastro de Atividades"
                          title="Cadastro de Atividades"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Cadastro de Atividades
                        </a>
                      </li>
                      
                      <li>
                        <a
                          href="/"
                          aria-label="Sair"
                          title="Sair"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sair
                        </a>
                      </li>
                     
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    );
};