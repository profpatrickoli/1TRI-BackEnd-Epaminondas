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


const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
const precos = [12, 15, 15, 20, 12];

function imprimeCardapio(lanches, precos){
    const tamanho = lanches.length;
    let contador = 0;
    // Imprimam o cardápio usando o laço While
    while(contador < tamanho){
        console.log(lanches[contador] + " - R$ " + precos[contador]);
        contador = contador + 1;
    }
}

function calculaDesconto(){
    let precosDesconto = [];
    const tamanho = precos.length;
    contador = 0;
    while(contador < tamanho){
        precosDesconto[contador] = precos[contador] - (precos[contador] * 10/100);
        contador = contador + 1;
    }
    return precosDesconto;
}

let precosComDesconto = calculaDesconto();

imprimeCardapio(lanches, precos);
calculaDesconto();
imprimeCardapio(lanches, precosComDesconto);