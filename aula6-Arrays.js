// LISTAS
// Lista de Strings:
// Índices:         0        1         2        3           4
const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
// Lista de Numbers:
let precos = [12, 15, 15, 20, 12];
console.log(lanches);
console.log(precos);
// Acessar um item específico da lista:
console.log("Lanche - Preço")
console.log(lanches[0] + " - R$ " + precos[0]);
console.log(lanches[1] + " - R$ " + precos[1]);

// Encontrar o tamanho da lista:
const tamanho = lanches.length;
console.log(tamanho);

// Adicionar um novo lanche
// lanches[5] = "misto quente"
lanches.push("misto quente")
precos[5] = 7
console.log(lanches[5] + " - R$ " + precos[5]);

// ALterando um item da lista
lanches[0] = "x-calabresa"
console.log(lanches[0] + " - R$ " + precos[0]);

// remover item da lista
lanches.pop() // -> remove o ultimo item da lista
lanches.pop()
console.log(lanches) 

// Outra forma de remover da lista:
// lista.splice(indice, quantidade)
lanches.splice(1,2)
console.log(lanches)

// Outras funções de lista
lanches.forEach((lanche) => {
    console.log(lanche);
})

// Mapear a lista (substituir os valores)
let precosDesconto = precos.map((preco) => preco - preco * 0.1);
console.log(precosDesconto)

