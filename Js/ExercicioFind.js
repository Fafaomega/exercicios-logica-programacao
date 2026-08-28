let produtos = [
    {nome: "Teclado", preco: 150, estoque: 8},
    {nome: "Mouse", preco: 80, estoque: 15},
    {nome: "Monitor", preco: 900, estoque: 2},
    {nome: "Headset", preco: 250, estoque: 6},
    {nome: "Webcam", preco: 300, estoque: 1}
];

let acharNome = procurarProduto(produtos, "Monitor");
let acharValor = procurarPreco(produtos, 300);
let estoqueCritico = verificarEstoque(produtos);
let produtoProblematico = verificarProblema(produtos);
let estoqueSeguro = verificarIntegridadeEstoque(produtos);
let somaEstoque = somarEstoqueTotal(produtos);
let maisCaro = descobrirMaisCaro (produtos);
let maisValioso = descobrirValioso(produtos);

function procurarProduto(produtos, nome) {
    return produtos.find(function(produto){
        return produto.nome === nome
    })
}

function procurarPreco(produtos, valor) {
    return produtos.find(function(produto) {
        return produto.preco === valor
    })
}

function verificarEstoque(produtos) {
    return produtos.some(function(produto) {
        return produto.estoque < 3
    })
}

function verificarProblema(produtos) {
    return produtos.some(function(produto) {
        return produto.estoque < 3 && produto.preco > 500
    })
}

function verificarIntegridadeEstoque(produtos) {
    return produtos.every(function(produto){
        return produto.estoque >= 2
    })
}

function somarEstoqueTotal(produtos) {
    return produtos.reduce(function(acumulador, produto){
        return acumulador + produto.preco * produto.estoque
    }, 0)
}

function descobrirMaisCaro(produtos) {
    return produtos.reduce(function(acumulador, produto){
        if (acumulador.preco < produto.preco) { 
            return produto;
        }
        return acumulador;
    })
}

function descobrirValioso(produtos) {
    return produtos.reduce(function(acumulador, produto) {
        if (acumulador.preco * acumulador.estoque < produto.preco * produto.estoque){
            return produto;
        }
        return acumulador
    })
}

console.log(acharNome);
console.log(acharValor);
console.log(estoqueCritico);
console.log(produtoProblematico);
console.log(estoqueSeguro);
console.log(somaEstoque);
console.log(maisCaro);
console.log(maisValioso);
