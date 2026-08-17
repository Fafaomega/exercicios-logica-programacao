let produtos = [
    {nome: "Teclado", preco: 150, estoque: 6}, //1200
    {nome: "Mouse", preco: 80, estoque: 15}, //1200
    {nome: "Monitor", preco: 900, estoque: 4}, //3600
    {nome: "Headset", preco: 250, estoque: 2}  //1500
];
let valorEstoque = calcularValorEstoque(produtos);
let maiorEstoque = verificarMaior(produtos);
let media = calcularMedia(produtos);
let statusEstoque = verificarEstoque(valorEstoque);
let desconto = aplicarDesconto(produtos);
let produtoComDesconto = produtoMaisDesconto(desconto);

function calcularValorEstoque(produtos) {
    let valorQuantidade = 0;
    for (let i = 0; i < produtos.length; i++)  {
        valorQuantidade += produtos[i].preco * produtos[i].estoque;
    }
    return valorQuantidade
}

function verificarMaior(produtos) {
    let guardarMaior = produtos[0];
    for (let i = 0; i < produtos.length; i++) {
        if (guardarMaior.estoque < produtos[i].estoque) {
            guardarMaior = produtos[i];
        }
    }
    return guardarMaior
}

function calcularMedia(produtos){
    let soma = 0
    let contadorItens = 0
    for(let i = 0; i < produtos.length; i++){
        soma += produtos[i].preco
        contadorItens++
    }
    return soma / contadorItens
}

function verificarEstoque(valorEstoque){
    if (valorEstoque < 1000) {
        return "Estoque Baixo"
    } else if (valorEstoque >= 1000 && valorEstoque < 3000) {
        return "Estoque Médio"
    } else {return "Estoque alto"}
}

function aplicarDesconto(produtos) {
    let produtoDesconto = [];
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].estoque < 5) {   
            produtoDesconto.push(produtos[i]);
        }
    }
    return produtoDesconto;
}

function produtoMaisDesconto(descontos) {
   let produtoDescontoAplicado = [];
    for(let i = 0; i < descontos.length;i++) {
        let guardarDesconto = descontos[i].preco * 10/100;
        produtoDescontoAplicado.push(
            {
            nome: descontos[i].nome,
            preco: descontos[i].preco - guardarDesconto,
            estoque: descontos[i].estoque
        }
        )
    }
    return produtoDescontoAplicado
}

console.log("Valor total em estoque", valorEstoque);
console.log("O maior em estoque é", maiorEstoque);
console.log("A media dos produtos é de", media);
console.log("O status do estoque é", statusEstoque);
console.log("O produto com Desconto é", produtoComDesconto);
