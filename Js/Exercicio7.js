let funcionarios = [
    {nome: "Bruna", salario: 2500, horas: 40}, 
    {nome: "Carlos", salario: 3200, horas: 44},
    {nome: "Marina", salario: 4100, horas: 36},
    {nome: "João", salario: 1800, horas: 40},
    {nome: "Beatriz", salario: 5000, horas: 44}
];
let media = calcularMedia(funcionarios);
let maiorSalario = descobrirMaior(funcionarios);
let cargaHoraria = verificarCargaHoraria(funcionarios);
let novoSalario = aumentoDeSalario(funcionarios);
let nome = "Marina";
let contemNome = descobrirNome(funcionarios, nome);

function calcularMedia(funcionarios) {
    let somaSalario = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        somaSalario += funcionarios[i].salario;
    }
    return somaSalario / funcionarios.length
}

function descobrirMaior(funcionarios) {
    let guardarMaiorSalario = funcionarios[0].salario
    let guardarObjeto = funcionarios[0];
    for (let i = 0; i<funcionarios.length; i++) {
        if (guardarMaiorSalario < funcionarios[i].salario) {
            guardarMaiorSalario = funcionarios[i].salario;
            guardarObjeto = funcionarios[i];
        }
    }
    return guardarObjeto
}

function verificarCargaHoraria(funcionarios) {
    let maisHoras = [];
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].horas > 40) {
            maisHoras.push(funcionarios[i]);
        }
    }
    return maisHoras;
}

function aumentoDeSalario(funcionarios) {
        let novoObjeto = [];
        let aumento = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < 2500) {
            aumento = funcionarios[i].salario * 15 / 100;
        } else if (funcionarios[i].salario >= 2500 && funcionarios[i].salario < 4000) {
            aumento = funcionarios[i].salario * 10 / 100;
        } else {
            aumento = funcionarios[i].salario * 5 / 100;
        }
         novoObjeto.push( {
            nome: funcionarios[i].nome,
            salario: funcionarios[i].salario + aumento,
            horas: funcionarios[i].horas
            }
        );
    }
    return novoObjeto
}

function descobrirNome(funcionarios, nome) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (nome === funcionarios[i].nome) {
            return funcionarios[i];
        }
    }
    return null
}

console.log(media);
console.log(maiorSalario);
console.log(cargaHoraria);
console.log(novoSalario);
console.log(contemNome);
