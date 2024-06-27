function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
  img.setAttribute('src', './assets/avatar.png')
   }

    

    // pegar imagem 
    // substituir a imagem  
    // se tiver light mode adicionar imagem light
    // se tiver sem light, manter a imagem normal
}

