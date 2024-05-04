import { FaCampground } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";

import { IAtividade } from "../../model/IAtividade";
interface CardProps {
 tipo: string
 titulo: string
 conteudo: string
 navigateDetalhe: (atividade: IAtividade) => void;
 atividade: IAtividade
}

export const Card = (props: CardProps) => {

    const iconTipo = () => {
        let icon;
        let nome = '' 
        if (props.tipo === "CAMPO") {
            icon = <FaCampground className="size-6 text-blue-500" />
            nome = "Atividade de Campo"
        } else if (props.tipo === "EVENTO") {
            icon = <MdOutlineEventAvailable className="size-6 text-blue-500" /> 
            nome = "Evento"
        } else {
            icon = <GiTalk className="size-6 text-blue-500" />
            nome = "Palestra"
        }

        return {icon, nome}
    }

    return (
        <div onClick={() => props.navigateDetalhe(props.atividade)} className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            {iconTipo().icon}
            </div>
            <h6 className="mb-2 font-semibold leading-5">{iconTipo().nome}</h6>
            <p className="text-sm text-gray-900">{props.conteudo}</p>
        </div>
    );
  };