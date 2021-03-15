var timer;
var per = 0;
timer = setInterval(() => {
    const bar = document.querySelector('.bar')
    bar.style.width = `${per}%`
    per += 1
    if (per > 100) {
        const pageloading = document.querySelector('.pageloading')
        pageloading.setAttribute('class', 'pageloading complete')
        clearInterval(timer)
    }
}, 30)