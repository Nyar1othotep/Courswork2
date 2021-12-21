function timer() {

    let start = new Date()
    let end = new Date('Oct 30 2022 00:00:00')
    let diff = end - start

    let days = Math.floor(diff / 1000 / 60 / 60 / 24)
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24
    let minutes = Math.floor(diff / 1000 / 60) % 60
    let seconds = Math.floor(diff / 1000) % 60

    start__days.textContent = days
    start__hours.textContent = hours
    start__minutes.textContent = minutes
    start__seconds.textContent = seconds

    if (days < 10) {
        start__days.textContent = '0' + days
    }
    if (hours < 10) {
        start__hours.textContent = '0' + hours
    }
    if (minutes < 10) {
        start__minutes.textContent = '0' + minutes
    }
    if (seconds < 10) {
        start__seconds.textContent = '0' + seconds
    }

}

timer()
setInterval(timer, 1000)