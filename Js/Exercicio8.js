let produtos = [
    {nome: "Teclado", preco: 150, estoque: 8, vendidos: 5},
    {nome: "Mouse", preco: 80, estoque: 15, vendidos: 12},
    {nome: "Monitor", preco: 900, estoque: 4, vendidos: 3},
    {nome: "Headset", preco: 250, 
        estoque: 6, vendidos: 8},
    {nome: "Webcam", preco: 300, estoque: 2, vendidos: 10}
]

let faturamento = calcularFaturamento(produtos);
let maisVendido = descobrirMaisVendido(produtos);
let estoqueBaixo = verificarEstoque(produtos);
let produtoAtualizado = atualizarEstoque(produtos);
let situacaoEstoque = statusEstoque(produtoAtualizado);
let nome = "Monitor";
let acharProduto = buscarProduto(nome, produtos);
let percentualVendido = calcularPercentual(produtos[0]);

function calcularFaturamento(produtos){
    let totalPorItem = 0;
    for (let i = 0; i < produtos.length; i++) {
        totalPorItem += produtos[i].preco * produtos[i].vendidos;
    }
    return totalPorItem
}

function descobrirMaisVendido(produtos) {
    let maior = produtos[0].vendidos;
    let retornarMaior;
    for (let i = 0; i < produtos.length; i++) {
        if(maior < produtos[i].vendidos) {
            maior = produtos[i].vendidos;
            retornarMaior = produtos[i];
        }
    }
    return retornarMaior
}

function verificarEstoque(produtos) {
    let maisBaixos = [];
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].estoque < 5) {
            maisBaixos.push(produtos[i])
        }
    }
    return maisBaixos
}

function atualizarEstoque(produtos) {
    let estoqueAtual = [];
    for(let i = 0; i < produtos.length; i++) {
        estoqueAtual.push({
            nome: produtos[i].nome,
            preco: produtos[i].preco,
            estoque: produtos[i].estoque - produtos[i].vendidos,
            vendidos: produtos[i].vendidos
        })
    }
    return estoqueAtual
}

function statusEstoque(produtoAtualizado) {
    let situacao = [];
    for (let i = 0; i < produtoAtualizado.length; i++){
        if (produtoAtualizado[i].estoque < 3) {
            situacao.push({
                nome: produtoAtualizado[i].nome,
                estoque: produtoAtualizado[i].estoque,
                nivelEstoque: "Estoque Crítico"
            })
        } else if (produtoAtualizado[i].estoque >= 3 && produtoAtualizado[i].estoque < 5) {
            situacao.push({
                nome: produtoAtualizado[i].nome,
                estoque: produtoAtualizado[i].estoque,
                nivelEstoque: "Estoque Baixo"
            })
        } else (
            situacao.push ({
                nome: produtoAtualizado[i].nome,
                estoque: produtoAtualizado[i].estoque,
                nivelEstoque: "Estoque Normal"
            })
            )
    }
    return situacao
}

function buscarProduto(nome, produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if(nome === produtos[i].nome) {
            return produtos[i]
        }
    }
    return null
}

function calcularPercentual(produtos) {
    return produtos.vendidos/(produtos.vendidos + produtos.estoque) * 100
}

console.log(faturamento);
console.log(maisVendido);
console.log(estoqueBaixo);
console.log(produtoAtualizado);
console.log(situacaoEstoque);
console.log(acharProduto);
console.log(percentualVendido);
