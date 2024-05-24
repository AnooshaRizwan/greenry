let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector(".scroll-top")


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
    if(window.scrollY > 250){
        scrollTop.style.display = "initial";
    }else{
        scrollTop.style.display = "none";
    }


}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});



let countDate = new Date('december 15, 2024 00:00:00').getTime();
let countDatee = new Date('sep 7, 2024 00:00:00').getTime();


function countDown(){
    


    let now = new Date().getTime();
    let now1 = new Date().getTime();

    gap = countDate - now;
    gap1 = countDatee - now1;


    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));
  
    let d1 = Math.floor(gap1 / (day));
    let h1 = Math.floor((gap1 % (day)) / (hour));
    let m1 = Math.floor((gap1 % (hour)) / (minute));
    let s1 = Math.floor((gap1 % (minute)) / (second));
  


    document.getElementById('day').innerText = d 
    document.getElementById('hour').innerText = h
    document.getElementById('minute').innerText = m
    document.getElementById('second').innerText = s

    document.getElementById('day1').innerText = d1
    document.getElementById('hour1').innerText = h1
    document.getElementById('minute1').innerText = m1
    document.getElementById('second1').innerText = s1


    
}
setInterval(function(){
    countDown();
},1000)
//i can also copy paste the whole function