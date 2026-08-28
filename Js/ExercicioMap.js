let produtos = [
    {nome: "Teclado", preco: 150},
    {nome: "Mouse", preco: 80},
    {nome: "Monitor", preco: 900},
    {nome: "Headset", preco: 250}
];
let listaValor = criarListaProdutos(produtos);
let produtosComDesconto = criarListaComDesconto(produtos);

function criarListaProdutos(produtos) {
    return produtos.map(function(produto) {
       return  produto.preco
    });
}

function criarListaComDesconto(produtos) {
    return produtos.map(function(produto) {
        let desconto = produto.preco * 10/100
        return {
            nome: produto.nome,
            preco: produto.preco - desconto
        }
    });
}

console.log(listaValor);
console.log(produtosComDesconto);
