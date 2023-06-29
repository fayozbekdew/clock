const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minutes')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const scale = ( num, in_min, in_max, out_min, out_max ) => { return (num - in_min) * (out_max - out_min ) / (in_max - in_min ) + out_min; }

toggleEl.addEventListener('click', () => {
    document.body.classList.toggle('darkMode')
    if(toggleEl.textContent.includes('Dark')){
        toggleEl.textContent = 'Light mode'
    }else{
        toggleEl.textContent = 'Dark mode'
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    let datess = time.getDate()
    const minutes = time.getMinutes()
    const second = time.getSeconds()

    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${datess}<span/>`
}

setTime()


setInterval(setTime, 1000)