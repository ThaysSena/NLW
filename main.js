// char - string -> caracteres que formam um grupo, um conjunto, um sequencia chamada de string. Sempre estarão entre aspas simples ou duplas
// number são para numeros
// o dado logico boolean diz se é true ou false
// para estruturar dados como objetos usa-se {}
// as funcionalidades são por function()
// sinal de = significa recebe
// const é invariavel
// DOM é Document Object Model
// log signifaica registrar

// abre e fecha quando clicar no icone - menu hamburguer
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// quando clicar em item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function (){
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scroll
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight) {
// scroll é maior do que a altura do header
header.classList.add('scroll')
  }else {
    // menor do que a altura do header
    header.classList.remove('scroll')
  }
})

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
 slidesPerView:1,
  pagination: {
    el:'.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando  der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true 
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
    {interval:100}
    )
