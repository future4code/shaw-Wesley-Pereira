// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordem = array.sort((a, b) => a - b);
  return ordem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numeroPar = function(numero){
  return numero % 2 == 0
  }
  let pares = (array.filter(numeroPar));
  
  
}
console.log(pares)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numeroPar = numero => {
    if(numero % 2 === 0)
    return numero *= numero
  }
  // let numerosPares = [];
  // for (let i = 0; numerosPares.length < n; i++) {
  //     numerosPares.push(i);
  // }
  // return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(Math, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const resultadoMaior = Math.max(num1, num2)
const resultadoDividir = Math.max(num1, num2) % Math.min(num1, num2) === 0
const diferenca = Math.max(num1, num2) - Math.min(num1, num2)
const objeto = {
    maiorNumero: resultadoMaior,
    maiorDivisivelPorMenor: resultadoDividir,
    diferenca: diferenca

}
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; array.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    return equilatero
  } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    return escaleno
  }else {
    return equilatero
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a,b) => a - b)
  const segundoMenor = array[1]
  const segundoMaior = array[array.length - 2]
    return[segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   filme
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const permissao = pessoas.filter((pessoa) => {
     return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade <= 60
   })
   return permissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}