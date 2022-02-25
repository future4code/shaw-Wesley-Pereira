/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
	const cartaUsuario1 = comprarCarta(); 
   const cartaUsuario2 = comprarCarta();
   const resultadoJogador = cartaUsuario1.valor + cartaUsuario2.valor;
   
   console.log(`Usuario - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${resultadoJogador}`) 

   const cartaPc1 = comprarCarta();
   const cartaPc2 = comprarCarta();
   const resultadoPc = cartaPc1.valor + cartaPc2.valor;

   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${resultadoPc}`)

   if ((resultadoJogador > resultadoPc) && (resultadoJogador <= 21)) {
      console.log("O Jogador ganhou!")

}else if ((resultadoPc > resultadoJogador) && (resultadoPc <= 21)){
            console.log("O computador ganhou!")

}     else {
            console.log("Empate")

}

}    else {
            console.log("Ojogo acabou!")
} 



