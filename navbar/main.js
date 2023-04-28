const navVerticalEl = document.querySelector('.nav-items-vertical')
const barsEl = document.querySelector('.bars')

barsEl.addEventListener('click', () => {
  navVerticalEl.classList.toggle('hidden')
})

window.addEventListener('resize', () => {
  const width = window.innerWidth
  if (width > 700) addClass()
})

function addClass() {
  navVerticalEl.classList.add('hidden')
}
