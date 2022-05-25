//Exercicio 1
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return 'Escaleno';
    }
    else if (a === b && b === c) {
        return 'Equilátero';
    }
    else {
        return 'Isósceles';
    }
}
console.log(checaTriangulo(2, 3, 1));
//Exercicio 2
function imprimeTresCoresFavoritas() {
    var cor1 = 'Azul';
    var cor2 = 'Amarelo';
    var cor3 = 'Vermelho';
    console.log([cor1, cor2, cor3]);
}
imprimeTresCoresFavoritas();
//Exercicio 3
function checaAnoBissexto(ano) {
    var cond1 = ano % 400 === 0;
    var cond2 = ano % 4 === 0 && ano % 100 !== 0;
    return cond1 || cond2;
}
console.log(checaAnoBissexto(2020));
//Exercicio 4
function comparaDoisNumeros(num1, num2) {
    var maiorNumero;
    var menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    var diferenca = maiorNumero - menorNumero;
    return diferenca;
}
console.log(comparaDoisNumeros(10, 5));
//Exercicio 5
function checaRenovacaoRG() {
    var anoAtual = new Date().getFullYear();
    var anoNascimento = new Date(1996, 11, 24).getFullYear();
    var anoEmissao = new Date(2020, 11, 24).getFullYear();
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
console.log(checaRenovacaoRG());
//         Desafio        //
//Exercicio 6 
function calculaEcompara(num1, num2) {
    var maiorNumero;
    var menorNumero;
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
        console.log("Maior n\u00FAmero: ".concat(maiorNumero));
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
        console.log("Maior n\u00FAmero: ".concat(maiorNumero));
    }
    return [soma, subtracao, multiplicacao];
}
console.log(calculaEcompara(10, 5));
//Exercicio 7
//Exercicio 8
function inverteString(str) {
    return str.split('').reverse().join('');
}
console.log(inverteString('abcd'));
