import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
    return (
      <div className="relative mt-16 bg-blue-100">

        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-600 uppercase">
                  Diário de Bordo
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <p className="mt-4 text-sm text-deep-purple-50">
                  Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Informações
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Av. Emília Mendonça Gomes, 1777 – Valentina I, João Pessoa, Paraíba, Brasil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      (83) 98754-6511 ou 83 9361-6024 (Whatsapp)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      getenentelucena@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2024 Lorem Inc. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://www.facebook.com/88gemarTenenteLucena?locale=pt_BR"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="https://www.instagram.com/8pb.tenentelucena"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <AiFillInstagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };