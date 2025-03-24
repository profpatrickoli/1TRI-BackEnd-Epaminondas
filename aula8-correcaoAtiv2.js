let custos = [800, 1000, 300, 500, 200];
let ganhos = [800, 2000];

let custoTotal = custos[0] + custos[1] + custos[2] + custos[3] + custos[4];
console.log("Custo = " + custoTotal)

let ganhosTotal = ganhos[0] + ganhos[1];
console.log("Ganhos = " + ganhosTotal);

let saldo = ganhosTotal - custoTotal;
if (saldo > 0) {
    console.log("O saldo final é positivo = R$ " + saldo);
} else if (saldo < 0) {
    console.log("O saldo final é negativo = R$ " + saldo);
} else {
    console.log("O seu saldo ficou zerado!");
}

