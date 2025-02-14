console.log('Exercicio 2 : Funções e Escopo');


console.log("Parte 1: ");
function processarDados(callback) {
    console.log("Processando dados...");
    callback();
}
processarDados(() => {
    console.log("Processo concluído");
});


console.log("Parte 2: ");
async function buscarUsuario() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Lucas", idade: 22 }); 
        }, 1000); 
    });
}   

buscarUsuario()
    .then((usuario) => {
        console.log("Usuário encontrado:", usuario);
    });



