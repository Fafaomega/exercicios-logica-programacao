let media = somarNota(3, 3, 7);
let resultado = aprovacao(media);
let maiorNota = descobrirMaiorNota(3, 3, 7);

function somarNota(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
};

function aprovacao(media){
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7){
        return "Recuperação";
    } else if (media < 5) {
        return "reprovado";
    }
}

function descobrirMaiorNota(nota1, nota2, nota3){
    if (nota1 > nota2 && nota1 > nota3) {
        return nota1;
    } else if (nota2 > nota3) {
        return nota2;
    } else {return nota3;}
}

console.log("A media de nota foi de",media);
console.log("O status do aluno é", resultado);
console.log("A nota mais alta foi", maiorNota);
