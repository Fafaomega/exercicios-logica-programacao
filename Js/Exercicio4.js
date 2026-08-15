let preco = 250;
let quantidade = 3;
let desconto = 10;
let subtotal = calcularSobtotal(preco,quantidade);
let valorDesconto = calcularDesconto(subtotal, desconto);
let precoFinal = calcularPrecoFinal(subtotal, valorDesconto);
let grandezaCompra = verificarCompra(precoFinal);
let quantidadeParcelas = 2;
let juros = quantidadeJuros(quantidadeParcelas, precoFinal)
let valorComJuros = valorParcelas(precoFinal, quantidadeParcelas, juros)


function calcularSobtotal(preco, quantidade) {return preco * quantidade;}

function calcularDesconto(subtotal, desconto) {
    return desconto/100 * subtotal;
}

function calcularPrecoFinal(subtotal, desconto) {
    return subtotal - desconto;
}

function verificarCompra(precoFinal) {
    if (precoFinal < 100) {
        return "Compra Pequena"
    } else if (precoFinal >= 100 && precoFinal < 500) {
        return "Compra Média"
    } else {
        return "Compra Grande"
    }
}

function quantidadeJuros(quantidadeParcelas, precoFinal) {
    if (quantidadeParcelas <= 2) {
        return 0;
    } else if (quantidadeParcelas >= 3 && quantidadeParcelas <= 5) {
        return precoFinal * 5 / 100
    } else {
        return precoFinal * 10 / 100
    }
}
function valorParcelas(precoFinal, parcelas, juros){
    if(parcelas <= 2) {
        return precoFinal/parcelas;
    } else {
        return (precoFinal + juros) / parcelas
    }
}

console.log("O subtotal é de R$", subtotal, "Reais");
console.log("O desconto em dinheiro é de R$",valorDesconto, "Reais")
console.log("O valor total da sua compra com o desconto é de R$", precoFinal, "Reais");
console.log("A sua compra foi uma", grandezaCompra);
console.log("O valor de cada parcela com juros fica R$", valorComJuros);
