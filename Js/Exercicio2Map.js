let funcionarios = [
    {nome: "Carlos", salario: 2500},
    {nome: "Marina", salario: 4000},
    {nome: "João", salario: 1800},
    {nome: "Beatriz", salario: 5000}
];
let salarioAumentado = calcularAumentoSalario(funcionarios);

function calcularAumentoSalario(funcionarios) {
    return funcionarios.map(function(funcionario) {
        let aumento = 0;
        if (funcionario.salario < 2500) {
            aumento = funcionario.salario * 15 /100 ;
        } else if (funcionario.salario >= 2500 && funcionario.salario < 4000) {
            aumento = funcionario.salario * 10/100
        } else {
            aumento = funcionario.salario * 5/100
        }
        return {
            nome: funcionario.nome,
            salario: funcionario.salario + aumento
        }
    })
}

console.log(salarioAumentado);
