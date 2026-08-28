let produtos = [
    {nome: "Teclado", preco: 150, estoque: 8},
    {nome: "Mouse", preco: 80, estoque: 15},
    {nome: "Monitor", preco: 900, estoque: 2},
    {nome: "Headset", preco: 250, estoque: 6},
    {nome: "Webcam", preco: 300, estoque: 1}
];

let estoqueBaixo = produtosComEstoqueBaixo(produtos);
let precoCaro = verificarPreco(produtos);
let estadoCrítico = verificarEstoqueEPreco(produtos);

function produtosComEstoqueBaixo(produtos) {
    return produtos.filter(function(produto) {
        return produto.estoque < 5
    }) 
}

function verificarPreco(produtos) {
    return produtos.filter(function(produto){
        return produto.preco >= 300
    })
}

function verificarEstoqueEPreco(produtos){
    return produtos.filter(function(produto){
        if(produto.preco >= 300 && produto.estoque < 5){
            return produto
        }
    })
}

console.log(estoqueBaixo);
console.log(precoCaro);
console.log(estadoCrítico);
