export { onScroll, onToTopBtn }

const toTopBtn = document.querySelector('.btn-on-top')

window.addEventListener('scroll', onScroll)
toTopBtn.addEventListener('click', onToTopBtn)

function onScroll() {
  const scrolled = window.pageYOffset
  const coords = document.documentElement.clientHeight

  if (scrolled > coords) {
    toTopBtn.classList.add('btn-on-top--visible')
  }
  if (scrolled < coords) {
    toTopBtn.classList.remove('btn-on-top--visible')
  }
}

function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}