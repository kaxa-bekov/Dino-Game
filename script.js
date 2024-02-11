const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const counter = document.getElementById('counter');
const hiScore = document.getElementById('hiScore');
let count = 0;
let hiscore = 0;

let jumpSound = new Audio('audio/jump.mp3');
let won = new Audio('audio/won.mp3')

document.addEventListener('keydown', () => {
    jump();

    jumpSound.play();

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft <= 120){
        count += 100;
        counter.innerText = count;
    }

    setTimeout(() => {
        if(count === 20000){
        won.play();
        alert('You Won! Score: ' + count)
        cactus.style.left = '580px';
    }
},500)
    
})


function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout( () => {
        dino.classList.remove('jump');
    },400)
}


setInterval( () => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        if(hiscore < count){
            hiscore = count;
            hiScore.innerText = hiscore;
        }
        count = 0;
        counter.innerText = count;
        alert('GAME OVER!');
        cactus.style.left = '580px';
    }
},10)