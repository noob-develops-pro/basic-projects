const xEl = document.querySelector('.client-x')
const yEl = document.querySelector('.client-y')
window.addEventListener('mousemove', (e) => {
  // console.log(e.clientX, e.clientY)
  xEl.textContent = e.clientX
  yEl.textContent = e.clientY
  //increasing font size
  xEl.classList.add('value')
  yEl.classList.add('value')
})
