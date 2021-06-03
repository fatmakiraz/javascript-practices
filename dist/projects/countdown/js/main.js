const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const giveaway = document.querySelector('.js-giveaway')
const timer = document.querySelector('.js-timer')
const timerValues = document.querySelectorAll('.js-timerValue')

//calculating after ten days temporarily 
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 14, 19, 0)

//let futureDate = new Date(2021, 8, 14, 23, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate()

let month = futureDate.getMonth()
month = months[month]

const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`

const futureTime = futureDate.getTime()

function getRemainingTime() {
    const now = new Date().getTime()
    const diff = futureTime - now
    // 1s = 1000ms, 1m = 60s, 1hr = 60min, 1d= 24hr
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = diff / oneDay
    days = Math.floor(days)

    let hours = Math.floor((diff % oneDay) / oneHour)
    let minutes = Math.floor((diff % oneHour) / oneMinute)
    let seconds = Math.floor((diff % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function format(value) {
        if (value < 10) {
            return value = `0${value}`
        }
        return value
    }

    timerValues.forEach((value, index) => {
        value.innerHTML = format(values[index])
    })
    if (diff < 0) {
        clearInterval(countdown)
        timer.innerHTML = `<p class="hero__content__subtitle" >Sorry, this giveaway has expired</p>`
    }
}

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()