console.log('Exercicio 1 : Funções e Escopo');

console.log('Parte 1: ');

let texto = prompt('Digite um texto: ');
function converterParaMaiusculas(texto){
    return texto.toUpperCase();
    let mensagem = 'Olá, mundo!';
} 
console.log(converterParaMaiusculas(texto));


console.log("Parte 2: ");
let texto2 = prompt('Digite um texto: ');
const converterParaMaiusculasArrow = (texto2) => texto.toUpperCase();
console.log(converterParaMaiusculasArrow(texto2));

console.log("Parte 3: ");
console.log("Ira gerar um erro, pois a variavel mensagem não esta declarada no escopo global");