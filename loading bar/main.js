const loadingBarEl = document.querySelector('.loading-bar')
const numberEl = document.querySelector('.value')

let number = 0

updateNumber()

function updateNumber() {
  numberEl.textContent = `${number}%`
  loadingBarEl.style.width = `${number}%`
  number++
  if (number < 101) {
    // recursion : function calling itself from within its body
    setTimeout(updateNumber, 20)
  }
}
