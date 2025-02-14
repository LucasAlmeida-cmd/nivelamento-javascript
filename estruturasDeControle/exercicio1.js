console.log("Exercício 1: Estruturas de Controle  ");

function verificaNumero(numero) {
    if (numero == 0) {
        return "Zero";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Positivo";
    }
}

console.log("Parte 1: ");
let  numero = prompt("Digite um número: ");
console.log(verificaNumero(numero));

console.log("Parte 2: ");
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("Parte 3: ");
let soma = 0; 
let cont = 1; 

while (cont <= 5) { 
    soma += cont; 
    cont++; 
}

console.log("A soma dos números de 1 a 5 é:", soma);