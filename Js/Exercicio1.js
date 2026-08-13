const nomeGasto = ["mercado","uber", "jogo", "lanche", "remédio"];
const valoresGasto = [150, 35, 120, 50, 80];
let valorMaior = 0;
let valorMenor = 0;
let nomeMaior;
let nomeMenor;
let mediadorMaior = 0;
let mediadorMenor = 0;
let contadorDinheiro = 0;
let total = 0;
let media = 0;

function somar() {
    for (var i = nomeGasto.length; i--; ) {
        total += valoresGasto[i];
    };
    media = total/nomeGasto.length;
};

function pegarMaior() {
    for (var i = nomeGasto.length; i--; ) {
        mediadorMaior = valoresGasto[i];
        if (mediadorMaior > valorMaior) {
            valorMaior = mediadorMaior;
            nomeMaior = nomeGasto[i];
        };
    };
};

function pegarMenor() {
    valorMenor = valoresGasto[0];
    for (var i = nomeGasto.length; i--; ) {
        mediadorMenor = valoresGasto[i];
        if (mediadorMenor < valorMenor) {
            valorMenor = mediadorMenor;
            nomeMenor = nomeGasto[i];
        };
    };
};

function compraContador(){
    for (var i = valoresGasto.length; i--; ) {
        if (valoresGasto[i] > 100) {
            contadorDinheiro += 1;
        }
    }
}

somar();
pegarMaior();
pegarMenor();
compraContador();
console.log("Total gasto = ", total);
console.log("A media de gasto foi de ", media);
console.log("Maior valor gasto = ", valorMaior, "e foi o", nomeMaior);
console.log("Menor valor gasto = ", valorMenor, "e foi o", nomeMenor);
console.log(contadorDinheiro, " compras foram mais que 100 reais");
