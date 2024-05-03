export interface IAtividade {
    usuario: {
        id: string
    }
    atividadeTipo: number;
    descricaoAtividade: string;
    titulo: string;
    dataAtividade: string;
    imagemBase64: string;
}
