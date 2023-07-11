const tamanhodeTela = innerWidth
console.log(tamanhodeTela)


if(tamanhodeTela <= 500) {
    for(let i = 1; i <= 250; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('.sec').appendChild(box)
    }
} else {
    for(let i = 1; i <= 800; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        document.querySelector('.sec').appendChild(box)
    }
}

function animatedBx() {
    let boxes = document.querySelectorAll('.box');
    let num = Math.floor(Math.random()*boxes.length);
    boxes[num].classList.toggle('animate')
}

setInterval(animatedBx)