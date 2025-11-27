const media = [
    { nome: 'Bruno', nota1: 7, nota2: 8},
    { nome: 'Ana', nota1: 6, nota2: 9},
    { nome: 'Gabriel', nota1: 3, nota2: 2}
]

function calcularMedia(media){
    // Faz o mapeamento do array para calcular a média dos alunos //
    return media.map(aluno => {
        // Realiza a soma das notas e calcula a média //
        let notaFinal = (aluno.nota1 + aluno.nota2) / 2
        return `A média do aluno ${aluno.nome} é ${notaFinal}`
    })
}

console.log(calcularMedia(media))