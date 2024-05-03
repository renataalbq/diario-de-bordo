import { Menu } from "../../components/menu";

interface DetalheAtividadeProps {
    id?: string
}

const DetalheAtividade = (props: DetalheAtividadeProps) => {
    return (
        <>
        <Menu />
        <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mt-10">
          <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
            <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
              <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                Relatorio de atividade de campo
                
              </h2>
              <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>

            </div>
          </div>
          <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
        </>
      );
}

export default DetalheAtividade;