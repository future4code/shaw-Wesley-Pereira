
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//    return ` Nocomparador igualdade ${a} === ${b} é ${a === b}` 
// }

// console.log(checarDesigualdade(5, 5))

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior(a, b) {
//     return ` No comparador maior ${a} > ${b} é ${a > b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
            
// const cadastro = () => {
//     const usuario = []

//     //  Sua lógica aqui
//     const nomeDoUsuario = prompt("Qual o seu nome?")
//     let anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
//     let senhaDousuario = prompt("Qual a sua senha?")
//     const nacionalidade = prompt("Qual a sua nacionalidade?")
//     let idade =  2022 - anoDeNascimento 
//     let novoUsuario = {
//         nome: nomeDoUsuario,
//         ano: anoDeNascimento,
//         senha: senhaDousuario,
//         nacionalidade: nacionalidade,
//         idade: idade,
//     }


//     if(idade >= 18 &&  senhaDousuario.length >= 6 && nacionalidade === "brasileiro"){
//        console.log(usuario.push(novoUsuario))
        
//     }else {
//         return "Não cumpre com os requisitos"
        
//     }
//     return usuario
// }
// console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senha = prompt("Digite uma senha:")
//     if(senha === senha){
//         console.log("Usuario logado")
//     }else {
//         console.log("Senha invalida")
//     }

// }

// console.log(login());

// DESAFIO------------------------------------------------------------------------------------------

// const nome = prompt("Qual o seu nome?")
   
// const senha = prompt("Digite sua senha:")

// const loginDesafio = () => {
//     //  Sua lógica aqui

//     for(let i = 0; i < usuarios.length; i++) {
//         if(usuarios[i].nome === nome && usuarios[i].senha === senha) {
//             console.log(`Usuario cadastrado`);
//         }else {
//             console.log("Cadastrado não Encontrado");
//         }
        
//     }
    

// }


// Exercício 5----------------------------------------------------------------------------------------------------             

// const primeiraDose = () => {
    
//     //  Sua lógica aqui
//     let nome = prompt("Qual o seu nome?")
//     let vacina = prompt("Qual vacina tomou?")
//     let tempo
//     let data

//     if(vacina === "Coronavac"){
//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "28 dias"} dias. Compareça no posto na data ${data = "Dia 10 de Abril"}.`
// }   else if(vacina === "Astrazenica"){
//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça no posto na data ${data = "Dia 11 de Junho" }.`
// }   else{
//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça no posto na data ${data = "Dia 11 de Junho"}.`
// }
// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
//     return  {...usuarios, nomeDoUsuario, imunizacao: "completa"}

// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------



// const avisoAosAtrasados = () => {

//     const usuarios = [ 
//         { nome: "Artur", imunizacao: "incompleta" }, 
//         { nome: "Barbara", imunizacao: "completa" }, 
//         { nome: "Carlos", imunizacao: "incompleta"} 
//     ] 
//     for(let i = 0; i < usuarios.length; i++){ 
        
//     if (usuarios[i].imunizacao == "incompleta"){ 
//         console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`) 
//     } 
// } 



// DESAFIO------------------------------------------------------------------------------------------





const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]


   

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
//     const nome = prompt("Qual o seu nome?")
//     const ano = Number(prompt("Em que ano você nasceu?"))
//     const nacionalidade = prompt("Qual o sua nacionalidade?")
//     const senha = prompt("Digite sua senha:")
//     const vacina = prompt("Que vacina você tomou?")
//     const imunizacao = prompt("Imunização completa ou incompleta?")
//     let idade =  2022 - ano
//     const cadastro = {
//         nome: nome,
//         ano: ano,
//         nacionalidade: nacionalidade,
//         senha: senha,
//         vacina: vacina,
//         imunizacao: imunizacao,
        
//     }

//     if(idade >= 18 &&  senha.length >= 6 && nacionalidade === "brasileiro"){
//                 usuarios.push(cadastro)
//                 console.log(cadastro)
        
                
//             }else {
//                 return "Não cumpre com os requisitos"
                
//             }
//             return usuarios
//         }
        




// console.log(cadastroDesafio());

const loginDesafio = () => {
    
}
 

(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());
