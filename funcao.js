import entradaDeDados from 'readline-sync';

//atividade 01
function maiuscula (string){
    let strMaiuscula = string.toUpperCase()
    return strMaiuscula
}

let str = entradaDeDados.question("Digite qualquer coisa: ");

console.log(maiuscula(str))

