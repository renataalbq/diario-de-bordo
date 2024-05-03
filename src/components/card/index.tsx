import { FaCampground } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";

interface CardProps {
 tipo: 'campo' | 'evento' | 'palestra'
 titulo: string
 conteudo: string
 detalheAtividade: () => void;
}

export const Card = (props: CardProps) => {

    const icon = () => {
        if (props.tipo === 'campo') {
            return <FaCampground className="size-6 text-blue-500" />
        } else if (props.tipo === 'evento') {
            return <MdOutlineEventAvailable className="size-6 text-blue-500" /> 
        } else {
            return <GiTalk className="size-6 text-blue-500" /> 
        }
    }

    return (
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            {icon()}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{props.tipo}</h6>
            <p className="text-sm text-gray-900">{props.conteudo}</p>
        </div>
    );
  };