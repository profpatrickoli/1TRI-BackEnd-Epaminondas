// CONDIÇÕES

/* 
SE (CONDIÇÃO) {
    CÓDIGO PARA VERDADEIRO
} SENÃO {
    CÓDIGO PARA FALSO
}
*/
let idade = 27
let possuiCNH = false // ou false
if (idade >= 18){
    if (possuiCNH == true) {
        console.log("Você pode dirigir!")
    } else {
        console.log("Você pode tirar CNH")
    }
} else {
    console.log("Não pode")
}