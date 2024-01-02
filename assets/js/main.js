

// dark mode setup
let moonIcon = document.getElementById('moonIcon');
let body = document.getElementById('body');
moonIcon.onclick = ()=>{
    moonIcon.classList.toggle('bx-sun');
    // moonIcon.classList.toggle('bx-spin');
    body.classList.toggle('darkMode');
    if(body.className==='darkMode'){
        moonIcon.style.color = 'yellow';
    }
    else{
        moonIcon.style.color ='black';
    }
}

// dark mode setup end

// image animation start
let img = document.getElementById('heroPhoto');
let animated = document.getElementById('animatedIconsContainer');
let cardBack = document.getElementById('cardBack');

window.addEventListener('scroll',()=>{
    let val = window.scrollY;
    img.style.marginTop = val*-0.11 + 'px';
})

// image animation end

let time = document.getElementById('time');

// scoll
AOS.init();
