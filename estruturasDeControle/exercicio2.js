console.log("Exercício 2: Estruturas de Controle ");

let interação = prompt("Digite uma letra: ");
while (interação !== "S") {
    switch (interação) {
        case "A":
            console.log("Opção A Selecionada.");
            break;
        case "B":
            console.log("Opção B Selecionada.");
            break;
        case "S":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção Inválida.");
            break;
    }
    interação = prompt("Digite uma letra: ");
}
console.log("Programa encerrado.");