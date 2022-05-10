window.addEventListener("scroll", onScroll)
onScroll();

function onScroll(){
  showNavOnScrool()
  showBackToTopButtonOnScrool()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){

  const targetLine = scrollY + innerHeight / 2 //Define uma linha imaginária no meio da tela para saber a seção que o user está. (innerHeight (Tamanho da Tela));
  //Verificar se a seção passou da linha
  const sectionTop = section.offsetTop //Pegar a posição do topo (começo)  da seção;
  const sectionHeight = section.offsetHeight //Pegar a altura da seção;
  const sectionEndAt = sectionTop + sectionHeight //Topo mais altura nos dá o final da seção/

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop //A linha passou do topo da seção?
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine //A linha passou do fim da seção?
  
  //Se linha depois do topa mas antes do fim, está na seção;
  //Se linha depois do fim ou antes do top, não está na seção;

  //Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine //Passou do top mas não do fim -> Se true = Está dentro da sessão;
  //pegando o menu pelo document;
  //Pegando o exato id referente a sessão pedida pela função;
  const sectionId = section.getAttribute('id')


  //pegando o elemento do menu que tem esse id de referência;
  const menuElement = document.querySelector(` .menu a[href*=${sectionId}] `)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

}

function showNavOnScrool(){
  if(scrollY > 0){
    navigation.classList.add("scroll")  /*Quando fizer o scroll colocar essa classe no nav*/
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScrool(){
  if(scrollY > 500){
    backToTopButton.classList.add("show")  /*Quando fizer o scroll colocar essa classe no nav*/
  } else {
    backToTopButton.classList.remove("show")
  }  
}

function openMenu(){
  document.body.classList.add("menu-expanded")
}

function closeMenu(){
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({ /** A API recebe um objeto (map) como argumento, podendo configurá-la assim */
  origin: 'top', /*Aniamação origina do top*/
  distance: '30px', /*Distância que ele percorre na animação (top até local)*/ 
  duration: 700, /*Tempo de duração da animação*/
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #service .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`); /*Ordem que aparecem os itens*/
