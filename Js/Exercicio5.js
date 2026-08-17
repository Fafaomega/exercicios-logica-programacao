let nota1 = 7;
let nota2 = 8;
let nota3 = 6;
let media = calcularMedia(nota1, nota2, nota3,);
let situacaoAluno = verificarSituacao(media);
let aulas = 80;
let faltas = 12;
let frequenciaAluno = verificarFrequencia(aulas, faltas);
let aprovacaoFinal = verificarAprovacao(media, frequenciaAluno);
let bonus = calcularBonus(media, frequenciaAluno);

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
};

function verificarSituacao(media){
    if (media < 5) {
        return "Reprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    };
};

function verificarFrequencia(aulas, faltas) {
    return (aulas - faltas) / aulas * 100;
};

function verificarAprovacao(media, frequencia) {
    if (media >= 7 && frequencia >= 75) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function calcularBonus(media, frequencia){
    if (media >= 9 && frequencia >= 90) {
        return 20;
    } else if (media >=8 && frequencia >= 85) {
        return 10;
    } else {return 0;}
}

console.log("A média do aluno foi de", media);
console.log("Em questão de media ele foi", situacaoAluno);
console.log("A frequencia de aula dele foi de", frequenciaAluno,"%");
console.log("A aprovação final dele é ", aprovacaoFinal);
console.log("E ele recebeu um bonus de", bonus);
