let produtos = [
    {nome: "Teclado", preco: 150, estoque: 8, categoria: "Periférico"},
    {nome: "Mouse", preco: 80, estoque: 15, categoria: "Periférico"},
    {nome: "Monitor", preco: 900, estoque: 2, categoria: "Hardware"},
    {nome: "Headset", preco: 250, estoque: 6, categoria: "Periférico"},
    {nome: "Webcam", preco: 300, estoque: 1, categoria: "Acessório"}
];
let resumoDeEstoque = resumirEstoque(produtos);

function resumirEstoque(produtos) {
   
   
  let resumo = produtos.reduce(function(acumulador, produto) {
        if (acumulador.produtoMaisCaro.preco < produto.preco) {
            acumulador.produtoMaisCaro = produto;
        }
        return {
            valorTotal: produto.preco * produto.estoque + acumulador.valorTotal,
            quantidadeTotal: produto.estoque + acumulador.quantidadeTotal,
            produtoMaisCaro: acumulador.produtoMaisCaro
        }
    }, {
        valorTotal: 0,
        quantidadeTotal: 0,
        produtoMaisCaro: produtos[0]
    });
    return {
        valorTotal: resumo.valorTotal,
        quantidadeTotal: resumo.quantidadeTotal,
        produtoMaisCaro: resumo.produtoMaisCaro.nome
    }
}

console.log(resumoDeEstoque);
