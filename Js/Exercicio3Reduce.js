let vendas = [
    {produto: "Teclado", vendedor: "Carlos", valor: 500},
    {produto: "Mouse", vendedor: "Marina", valor: 300},
    {produto: "Monitor", vendedor: "Carloss", valor: 900},
    {produto: "Headset", vendedor: "João ", valor: 400},
    {produto: "Webcam", vendedor: "Marina", valor: 600}
];

let resumoVendasGeral = resumirVendas(vendas);

function resumirVendas(vendas) {
    let resumo = vendas.reduce(function(acumulador, venda) {
        if (venda.valor > acumulador.maiorVenda) {
            acumulador.maiorVenda = venda.valor
            acumulador.produtoMaiorVendido = venda
        }
        
        return {
            faturamentoTotal: venda.valor + acumulador.faturamentoTotal,
            maiorVenda: acumulador.maiorVenda,
            produtoMaiorVendido: acumulador.produtoMaiorVendido
        }
        
    }, {
        faturamentoTotal: 0,
        maiorVenda: 0,
        produtoMaiorVendido: vendas[0]
    });
    return {
        faturamentoTotal: resumo.faturamentoTotal,
        maiorVenda: resumo.maiorVenda,
        produtoMaiorVendido: resumo.produtoMaiorVendido.produto
        
    }
}

console.log(resumoVendasGeral)
