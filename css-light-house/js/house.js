const house = document.querySelector("#house");
const body = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    house.style.transform = `
        perspective(20000px)
        rotateX(${ y * 10  + 75}deg)
        rotateZ(${ -x * 10  + 35}deg)
        translateZ(-9vw)
    `;
}

body.addEventListener("pointermove", base)