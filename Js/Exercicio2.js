let produtos = [
    {
        nome: "arroz",
        preco: 25,
        quantidade : 2
    },
    {
        nome: "feijão",
        preco: 15,
        quantidade: 10
    },
    {
        nome: "chocolate",
        preco: 7,
        quantidade: 2
    },
    {
        nome: "leite",
        preco: 5,
        quantidade: 3
    },
    {
        nome: "farinha",
        preco: 8,
        quantidade:9
    }
];

let totalEstoque = 0;
let totalProdutos = 0;
let valorMaior = 0;
let mediadorMaior = 0;
let guardarNomeProduto;
let contadorProduto = 0;

function somarEstoque () {
    for (let i = 0; i < produtos.length; i++) {
        totalEstoque = produtos[i].preco * produtos[i].quantidade;
        console.log("O valor total de ", produtos[i].nome, "é de R$", totalEstoque, "Reais");
        mediadorMaior = totalEstoque;
        if (mediadorMaior > valorMaior) {
            valorMaior = mediadorMaior;
            guardarNomeProduto = produtos[i].nome;
        };
        totalProdutos += totalEstoque;
    };
    console.log("O item com maior estoque em dinheiro é o", guardarNomeProduto, "e no valor de", valorMaior);
    console.log("O total em Reais do estoque é de R$", totalProdutos);
};

function contarProduto (){
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].quantidade < 5) {
            contadorProduto += 1
            console.log(contadorProduto);
        }
    }
}

contarProduto();
somarEstoque();

console.log("tem", contadorProduto, "produtos com menos de 5 unidade no estoque");
