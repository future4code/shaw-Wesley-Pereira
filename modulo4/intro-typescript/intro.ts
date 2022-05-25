//Exercicio 1
function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return 'Escaleno'
  } else if (a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

console.log(checaTriangulo(2, 3, 1))

//Exercicio 2
function imprimeTresCoresFavoritas() {
  const cor1 = 'Azul'
  const cor2 = 'Amarelo'
  const cor3 = 'Vermelho'
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

//Exercicio 3
function checaAnoBissexto(ano: number): boolean {
  const cond1 = ano % 400 === 0
  const cond2 = ano % 4 === 0 && ano % 100 !== 0
  return cond1 || cond2
}

console.log(checaAnoBissexto(2020))

//Exercicio 4
function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

    console.log(comparaDoisNumeros(10, 5))


//Exercicio 5
function checaRenovacaoRG() {
    const anoAtual = new Date().getFullYear()
    const anoNascimento = new Date(1996, 11, 24).getFullYear()
    const anoEmissao = new Date(2020, 11, 24).getFullYear()
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 
    console.log(checaRenovacaoRG())


//         Desafio        //

//Exercicio 6 
function calculaEcompara(num1: number, num2: number): any {
    let maiorNumero
    let menorNumero

    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
        console.log(`Maior número: ${maiorNumero}`)
    } else {
        maiorNumero = num2
        menorNumero = num1
        console.log(`Maior número: ${maiorNumero}`)
    } 
        
    return [soma, subtracao, multiplicacao]
}

    console.log(calculaEcompara(10, 5))


//Exercicio 7


//Exercicio 8

function inverteString(str: string): string {
    return str.split('').reverse().join('')
}

    console.log(inverteString('abcd'))