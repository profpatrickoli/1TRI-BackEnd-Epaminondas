function soma(valor1, valor2) {
    return valor1 + valor2;
}
let variavel = soma(5, 10)
console.log(variavel);

function verificarCNH(idade, possuiCNH){
    if (idade >= 18){
        if (possuiCNH == true) {
            console.log("Você pode dirigir!")
        } else {
            console.log("Você pode tirar CNH")
        }
    } else {
        console.log("Não pode")
    }
}

verificarCNH(27, true);