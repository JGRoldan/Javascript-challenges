const day = document.querySelector('.day h4'),
    hours = document.querySelector('.hours h4'),
    minutes = document.querySelector('.minutes h4'),
    second = document.querySelector('.second h4'),
    dateInput = document.querySelector('.date');

let set;
   
const countDown = ()=>{
    const dateTomorrowLand= new Date(`${dateInput.value}` ).getTime()
    const todayDate = new Date().getTime()
    const gap = dateTomorrowLand - todayDate
    
    const s = 1000,
        m = s * 60,
        h = m * 60,
        d = h * 24;

    const textDay = Math.floor(gap / d)
    const textHour = Math.floor((gap % d) / h)
    const textMin = Math.floor((gap % h) / m)
    const textSec = Math.floor((gap % m) / s)

    day.innerHTML = textDay
    hours.innerHTML =  textHour < 10 ? `0${textHour}` : `${textHour}`
    minutes.innerHTML = textMin < 10 ? `0${textMin}` : `${textMin}`
    second.innerHTML = textSec

    if(gap <= 1000){
        clearInterval(set)
    }
}

dateInput.addEventListener('change', e => {
    set = setInterval(countDown, 1000)
})