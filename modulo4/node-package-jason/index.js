//Exercicio 1
//a) node index.js 
//b) 
function imprimir(nome, idade){
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}
 
imprimir("João", 20);

//c)
function imprimirFuturo(nome, idade){
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`);
}

imprimirFuturo("João", 20);

//Exercicio 2
const valorTerminal = Number(process.argv[2]);

console.log(`O valor da soma é: ${valorTerminal + 2}`);
console.log(`O valor da subtração é: ${valorTerminal - 2}`);
console.log(`O valor multiplicação é: ${valorTerminal * 2}`);
console.log(`O valor da divisão é: ${valorTerminal / 2}`);

// if(valorTerminal == soma){
//     console.log(`A soma dos valores é ${valorTerminal}`);
// }else if(valorTerminal == sub){
//     console.log(`A subtração dos valores é ${valorTerminal}`);
// }else if(valorTerminal == mult){
//     console.log(`A multiplicação dos valores é ${valorTerminal}`);
// }else if(valorTerminal == div){
//     console.log(`A divisão dos valores é ${valorTerminal}`);
// }else{
//     console.log(`Operação inválida`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// switch (valorTerminal) {
//     case "soma":
//         console.log(`A soma é ${valorTerminal + Number(process.argv[2])}`);
//         break;
//     case "sub":
//         console.log(`A subtração é ${valorTerminal - Number(process.argv[2])}`);
//         break;
//     case "mult":
//         console.log(`A multiplicação é ${valorTerminal * Number(process.argv[2])}`);
//         break;
//     case "div":
//         console.log(`A divisão é ${valorTerminal / parseInt(process.argv[2])}`);
//         break;
//     default:
//         console.log("Valor inválido");
//         break;
// }


        


//Exercicio 3


//Exercicio 4