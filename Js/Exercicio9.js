let produtos = [
    {nome: "Teclado", preco: 150, estoque: 8, categoria: "Periférico"},
    {nome: "Mouse", preco: 80, estoque: 15, categoria: "Periférico"},
    {nome: "Monitor", preco: 900, estoque: 4, categoria: "Hardware"},
    {nome: "Headset", preco: 250, estoque: 6, categoria: "Periférico"},
    {nome: "Webcam", preco: 300, estoque: 1, categoria: "Acessório"}
];
let carrinho = [
    {nome: "Teclado", quantidade: 2},
    {nome: "Monitor", quantidade: 1},
    {nome: "Webcam", quantidade: 2}
];
let valorCompra = calcularCompra(produtos, carrinho);
let valorSubTotal = calcularSubTotal(valorCompra);
let valorDesconto = calcularDesconto(valorSubTotal);
let descontoAplicado = usarDesconto(valorDesconto, valorSubTotal);
let temEstoque = verificarEstoque(produtos, carrinho);
let resumoCompra = resumirCompra(carrinho, produtos, valorCompra);

function calcularCompra(produtos, carrinho) {
    
    let valorDoProduto = [];
    
    for (let i = 0; i < produtos.length; i++) {
        for(let x = 0; x < carrinho.length; x++) {
            if(produtos[i].nome === carrinho[x].nome) {
            valorDoProduto.push({
                nome: carrinho[x].nome,
                valor: carrinho[x].quantidade * produtos[i].preco
            })
        }
        }
    }
    return valorDoProduto
}

function calcularSubTotal(valorCompra){
    let subTotal = 0; 
    for(let i = 0; i < valorCompra.length; i++) {
        subTotal += valorCompra[i].valor;
    }
    return subTotal
}

function calcularDesconto(subTotal){
    let valorDeDesconto;
    if (subTotal < 500) {
        valorDeDesconto = 0;
    } else if (subTotal >= 500 && subTotal < 1000) {
        valorDeDesconto = subTotal * 5 / 100
    } else {
        valorDeDesconto = subTotal *10 / 100
    }
    return valorDeDesconto
}

function usarDesconto(desconto, subTotal) {return subTotal - desconto}

function verificarEstoque(produtos, carrinho) {
    let foraEstoque = [];
    for (let i = 0; i < produtos.length; i++) {
        for(let x = 0; x < carrinho.length; x++) {
            if (carrinho[x].quantidade > produtos[i].estoque){
                let jaExiste = false;
                for (let z = 0; z < foraEstoque.length; z++) {
                    if(foraEstoque[z].nome === produtos[i].nome) {
                        jaExiste = true;
                    }
                }
                if(!jaExiste) {
                    foraEstoque.push(produtos[i]);
                }
            }
        }
    }
    return foraEstoque
}

function resumirCompra(carrinho, produtos, valorSubTotal) {
    let dentroResumo = [];
    for (let i = 0;i < produtos.length; i++) {
        for(let x = 0;x < carrinho.length; x++){
                let jaExiste = false;
                for(let z = 0; z < dentroResumo.length;z++) {
                    if(dentroResumo[z].nome === carrinho[x].nome) {
                        jaExiste = true;
                    }
                }
                if(!jaExiste) {
                    dentroResumo.push({
                        nome: carrinho[x].nome,
                        quantidade: carrinho[x].quantidade,
                        precoUnitario: produtos[i].preco,
                        subTotal: valorSubTotal[x].valor
                    });
                }
        }
    }
    return dentroResumo
}

console.log(valorCompra);
console.log(valorSubTotal);
console.log(valorDesconto);
console.log(descontoAplicado);
console.log(temEstoque);
console.log(resumoCompra);
