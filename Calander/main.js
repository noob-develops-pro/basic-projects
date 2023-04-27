const monthEl = document.querySelector('.month')
const dateEl = document.querySelector('.date')
const daysEl = document.querySelector('.days')

const d = new Date()

function getmonthName() {
  const options = { month: 'long' }
  const monthName = d.toLocaleString('en-US', options)
  return monthName
}
function getWeekDayName() {
  const options = { weekday: 'long' }
  const weekDay = d.toLocaleString('en-US', options)
  return weekDay
}

const year = d.getFullYear()
const monthName = getmonthName()
const date = d.getDate()
const day = getWeekDayName()
const lastDay = new Date(year, new Date().getMonth() + 1, 0).getDate()
let firstDay = new Date(year, new Date().getMonth(), 1).getDay() - 1 //in js days start from sunday with 0 index
// getDay() returns number between 0-6 (week days) and getDate() returns number between 0-31 (month days)

const fullDate = `${day} ${date} ${monthName} ${year}`
monthEl.textContent = `${monthName}`
dateEl.textContent = fullDate

//creating empty divs and appending them.
while (firstDay) {
  daysEl.innerHTML += ` <div class='empty'></div>`
  firstDay--
}

//creating dives with dsys(numbers) and inserting them to dom
for (let i = 1; i <= lastDay; i++) {
  daysEl.innerHTML += ` <div class=${
    i === new Date().getDate() ? 'today' : ''
  }>${i}</div>`
}
