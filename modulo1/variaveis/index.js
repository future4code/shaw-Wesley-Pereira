//Exercício de Variáveis em JavaScript

//1.
//a) b) c)
let nome
console.log(typeof nome)
let idade
console.log(typeof idade)

//d)
/*Foi impresso, typof de nome = undefined e de idade = undefined, essa foi a resposta, 
pois, o comando typeof mostra que tipo de variável está contida em cada elemento*/

//e)
const nomePergunta = prompt("Qual é o seu nome? ")
console.log(nomePergunta)
const idadePergunta = prompt("Qual é a sua idade? ")
console.log(idadePergunta)

//f)
console.log(typeof nomePergunta)
console.log(typeof idadePergunta)
//Dessa vez foi impresso typeof = string para as 2 variáveis.

//g)

const saudacao = ("Olá " + nomePergunta + ",")
const idadeResposta = ("você tem " + idadePergunta + " anos!")

console.log(saudacao, idadeResposta)
