//Exercício de Interpretação de Código
//1.Matheus Nachtergaele
//  Virginia Cavendish
//  canal: "Globo", horario: "14h"

//2.a)Objeto {nome: "Juca", idade: 3, raca: "SRD"}
//    Objeto {nome: "Juba", idade: 3, raca: "SRD"}
//    Objeto {nome: "Jobo", idade: 3, raca: "SRD"}
//  b)Ela adiciona elementos dentro de um objeto matriz.
//3.a)false, undefined
//  b)É impresso false pois a função faz o elemento do objeto ser impresso
//    Já o undefined é impresso porque o objeto nao contém o elemento altura.

//Exercício de Escrita de Código
//1.a)
// const objetoParaImprimir = {
//     nome: "Jon",
//     apelidos: ["Jony", "Joninha", "Jota"]
// }

// function imprimirObjetoMensagem(){
//     console.log(`Eu sou ${objetoParaImprimir.nome}, mas pode me chamar de: ${objetoParaImprimir.apelidos[0]}, ${objetoParaImprimir.apelidos[1]} ou ${objetoParaImprimir.apelidos[2]}`)
// }

// imprimirObjetoMensagem()

// //b)
// function novoObjetoParaImprimir(imprimirOutro) {
//     const outrosApelidos = {
//         ...imprimirOutro,
//     apelidos: ["Jaum", "Jaunzinho", "jon"]
// }

//     console.log(`Eu sou ${outrosApelidos.nome}, mas pode me chmar de: ${outrosApelidos.apelidos[0]}, ${outrosApelidos.apelidos[1]} ou ${outrosApelidos.apelidos[2]}`)
// }

// novoObjetoParaImprimir(objetoParaImprimir)

// //2.a)
// const pessoa1 = {
//     nome: "José",
//     idade: 25,
//     profissao: "Programador"
// }

// const pessoa2 = {
//     nome: "Maria",
//     idade: 20,
//     profissao: "Médica"
// }

// function identificar1(){
//     const identificacao1 = [typeof(pessoa1.nome) ,pessoa1.nome.length, typeof(pessoa1.idade), typeof(pessoa1.profissao), pessoa1.profissao.length]

//     // const identificacao2 = [typeof(pessoa2.nome) ,pessoa2.nome.length, typeof(pessoa2.idade), typeof(pessoa2.profissao), pessoa2.profissao.length]
//  //uma constante que identifica elementos do objeto
//     return identificacao1 //, identificacao2
    
 
// }

// console.log(identificar1())

//3.a)
// const carrinho = []
//  b)
// const fruta1 = {
//     nome: "Banana",
//     disponibilidade: true
// }    
// const fruta2 = {
//     nome: "Abacaxi",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome:"Mamão",
//     disponibilidade: true
// }
//  c)
// function colocarNoCarrinho(frutas){
//     carrinho.push(fruta1, fruta2, fruta3) 
//     console.log(carrinho)
// }
//  d)
// colocarNoCarrinho()