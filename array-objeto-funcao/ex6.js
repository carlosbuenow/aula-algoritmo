const livros = [
    {titulo: 'O Código Da Vinci', ano: 2003, autor: 'Dan Brown'},
    {titulo: 'A Menina que Roubava Livros', ano: 2005, autor: 'Markus Zusak'},
    {titulo: 'A Culpa é das Estrelas', ano: 2012, autor: 'John Green'},
    {titulo: 'Cinquenta Tons de Cinza', ano: 2011, autor: 'E. L. James'}
]

//Filtra os que estão acima do valor requerido e retorna//
function apos2010(livros){
        return livros.filter(livros => livros.ano > 2010)
}
console.log(apos2010(livros))