// 光线的总数
let num = 40;
for (let i = 0; i < num; i++) {
    // 创建i元素
    const eleI = document.createElement('i');
    // 设置样式
    eleI.style.height = `${rand(30, 100)}px`
    eleI.style.left = `${rand(1, 99)}vw`
    // 随机动画时间
    eleI.style.animationDuration = `${rand(5, 30) / 10}s`
    // 将i插入container元素中
    document.querySelector('.container').appendChild(eleI);
}

function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}