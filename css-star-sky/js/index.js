const starsCount = 800; // 星星数量
const distance = 800; // 间距

const stars = document.querySelector('.stars');

for (var i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.setAttribute('class', 'star');
    let speed = 0.2 + (Math.random() * 1);
    let thisDistance = distance + (Math.random() * 300);
    star.style.transformOrigin = `0 0 ${thisDistance}px`;
    star.style.transform = `translate3d(0, 0, -${thisDistance}px) 
                            rotateY(${Math.random() * 360}deg) 
                            rotateX(${Math.random() * -50}deg) 
                            scale(${speed}, ${speed})`;
    stars.appendChild(star);
}