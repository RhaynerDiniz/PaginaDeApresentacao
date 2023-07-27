function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //a função toggle faz algo semelhante ao if-else

  //pegar a tag img
  const img = document.querySelector("#profile img")      //quereSelector == pesquisa pelo seletor

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar (2).png")   //função que ajusta um atributo
    img.setAttribute('alt', 'Foto de Mayke Brito, com camisa preta e óculos escuros.')

  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/avatar (2).png')
    img.setAttribute('alt', 'foto de Rhayner Diniz, de barba, usando camisa e terno preto, fundo cinza.')
  }



}
