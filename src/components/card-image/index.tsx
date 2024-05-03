interface CardImageProps {
    imagem?: string;
    data: string;
    titulo: string;
    conteudo: string;
    onClickCard: () => void;
}

export const CardImage = (props: CardImageProps) => {
    return (
        <>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" onClick={props.onClickCard}>
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                {props.data}
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">{props.titulo}</p>
              </a>
              <p className="mb-4 text-gray-700">
                {props.conteudo}
              </p>
             
            </div>
          </div>
        </>
    );
  };