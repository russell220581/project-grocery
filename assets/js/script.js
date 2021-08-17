const menubar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header__bottom');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150){
        header.classList.add('sticky');
    } else{
        header.classList.remove('sticky');
    }
}

/* Deal CountDown Timer */
let countDate = new Date('July 1, 2022 00:00:00').getTime();

function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)