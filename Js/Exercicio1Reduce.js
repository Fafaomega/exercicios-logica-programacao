let vendas = [100, 250, 80, 300, 150];
let soma = somaDasVendas(vendas);

function somaDasVendas(vendas){
    return vendas.reduce(function(acumulador, venda){
        return acumulador + venda;
    }, 0)
}

console.log(soma);
