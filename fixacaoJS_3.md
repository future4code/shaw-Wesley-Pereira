ˋˋˋfunction calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notas = ((ex * 1) + (p1 * 2) + (p2 * 3))/ 6
  if(notas >= 9){
    return "A"
  }else if(notas < 9 && notas >= 7.5){
    return "B"
  }else if(notas < 7.5 && notas >= 6){
    return "C"
  }else {
    return "D"
  }
}ˋˋˋ