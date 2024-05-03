import { useNavigate } from "react-router-dom";
import { CardImage } from "../../components/card-image";
import { Menu } from "../../components/menu";

const ListagemAtividade = () => {
    const navigate = useNavigate()
    return (
        <>
            <Menu />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                <CardImage onClickCard={() => navigate('/detalhe-atividade')} titulo={'Relatório atividade de campo'} data='02 MAIO 2024' conteudo="Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.Vestibulum placerat purus ut nibh aliquam fringilla." />
                </div>
            </div>
        </>
    )
}

export default ListagemAtividade;