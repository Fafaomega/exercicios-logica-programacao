let clientes = [
    {nome: "Carlos", saldo: 1500, transacoes: 5},
    {nome: "Marina", saldo: 3200, transacoes: 8},
    {nome: "João", saldo: 800, transacoes: 3},
    {nome: "Beatriz", saldo: 5000, transacoes: 12},
    {nome: "Lucas", saldo: 2200, transacoes: 6}
];

let saldoTotal = calcularSaldoTotal(clientes);
let media = calcularMedia(saldoTotal,clientes);
let maiorSaldo = descobrirMaiorSaldo(clientes);
let classificacaoCliente = descobrirClassificao(clientes);
let nome = "João";
let encontrarCliente = buscarCliente(clientes, nome);
let tarifa = aplicarTarifa(clientes);
let resumoClientes = fazerResumo(clientes, saldoTotal, media, maiorSaldo, tarifa);
let historico = [];


function calcularSaldoTotal(clientes) {
    let somaTotal = 0;
    for(let i = 0; i < clientes.length; i++) {
    somaTotal += clientes[i].saldo
    }
    return somaTotal
}

function calcularMedia(saldoTotal, clientes) {
    return saldoTotal/clientes.length
}

function descobrirMaiorSaldo(clientes){
    let guardarMaior = clientes[0];
    
    for (let i = 0; i < clientes.length; i++) {
        if (guardarMaior.saldo < clientes[i].saldo) {
            guardarMaior = clientes[i];
        }
    }
    return guardarMaior
}

function descobrirClassificao(clientes){
    let adicionarClassificao = [];
    for(let i = 0; i < clientes.length; i++) {
        if (clientes[i].saldo < 1000) {
            adicionarClassificao.push({
                nome: clientes[i].nome,
                saldo: clientes[i].saldo,
                classificacao: "Saldo Baixo"
            });
        } else if (clientes[i].saldo >= 1000 && clientes[i].saldo < 3000) {
            adicionarClassificao.push({
                nome: clientes[i].nome,
                saldo: clientes[i].saldo,
                classificacao: "Saldo Médio"
            });
        } else {
            adicionarClassificao.push({
                nome: clientes[i].nome,
                saldo: clientes[i].saldo,
                classificacao: "Saldo Alto"
            });
        }
    }
    return adicionarClassificao
}

function buscarCliente(clientes, nome) {
    for(let i = 0; i < clientes.length; i++) {
        if(nome === clientes[i].nome) {
            return clientes[i]
        }
    }
    return null
}

function aplicarTarifa(clientes) {
    let tarifaAplicada = [];
    for (let i = 0; i < clientes.length; i++) {
        let valorTarifa = 0;
        if(clientes[i].transacoes < 5) {
            valorTarifa = 10;
        } else if (clientes[i].transacoes >= 5 && clientes[i].transacoes < 10 ) {
            valorTarifa = 20;
        } else {
            valorTarifa = 30;
        }
        tarifaAplicada.push({
            nome: clientes[i].nome,
            tarifa: clientes[i].saldo - valorTarifa,
            transacoes: clientes[i].transacoes
        })
    }
    return tarifaAplicada
}

function fazerResumo (clientes, saldoTotal, media, maiorSaldo, tarifa) {

       for(let i = 0; i < tarifa.length; i++) {
            if(tarifa[i].nome === maiorSaldo.nome) {
                return {
                   totalClientes: clientes.length,
                   saldoTotal: saldoTotal,
                   saldoMedia: media,
                   maiorSaldo: tarifa[i].tarifa,
                   clienteMaiorSaldo: maiorSaldo.nome
                }
            }
       }
}

function registrarTransacao(nomeCliente, tipo, valor){
    historico.push({
        nome: nomeCliente,
        tipo: tipo,
        valor: valor
    });
}


registrarTransacao("Marina", "Depósito", 500);
registrarTransacao("Beatriz", "Saque", 400);
registrarTransacao("João", "Saque", 400);
registrarTransacao("João", "Depósito", 2000);
registrarTransacao("Carlos", "Saque", 1000)
registrarTransacao("Lucas", "Depósito", 350);

let movimentacao = calcularMovimentacao(historico);

function calcularMovimentacao(historico) {
    let salvarMovimentacao = 0;
    for(let i = 0; i < historico.length; i++) {
        salvarMovimentacao += historico[i].valor;
    }
    return salvarMovimentacao
}

console.log(saldoTotal);
console.log(media);
console.log(maiorSaldo);
console.log(classificacaoCliente);
console.log(encontrarCliente);
console.log(tarifa);
console.log(resumoClientes);
console.log(movimentacao);
