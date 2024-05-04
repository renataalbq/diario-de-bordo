export const tipo_format = (tipo: string) => {
    if (tipo === 'CAMPO') {
        return 'Atividade de Campo';
    }
    else if (tipo === 'EVENTO') {
        return 'Evento'
    }
    else {
        return 'Palestra'
    }
}
