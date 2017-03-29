// HOVER MENU  - WTF?!
var menu = document.querySelector('header a:first-child');
var innerList = document.querySelector('.nav-inner-list');

menu.addEventListener('mouseover', function(){
    innerList.classList.add('list-show');
})

innerList.addEventListener('mouseover', function(){
    this.classList.remove('list-show');
    console.log(this);
})


// SLIDER
var btn = document.querySelectorAll('.slider .slider-btn');
var slide = document.querySelectorAll('.slider li');
var circleSlide = document.querySelectorAll('.circle-nav')
var numberOfSlide = 0;
var timer1 = 0;

slide[0].classList.add('visible');
slide[0].addEventListener('load', time());

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', changeSlide);
}

//DO MOBILEK - kólka i te sprawy
for (var i = 0; i < circleSlide.length; i++) {
    circleSlide[i].addEventListener('click', function(){
        circleSlide[0].classList.remove('active-slide');
        circleSlide[1].classList.remove('active-slide');
        circleSlide[2].classList.remove('active-slide');
        this.classList.add('active-slide');

        if (this === circleSlide[0]){
            changeSlideByCircle(0)
        } else if (this === circleSlide[1]) {
            changeSlideByCircle(1)
        } else if (this === circleSlide[2]) {
            changeSlideByCircle(2)
        }

        function changeSlideByCircle(number){
            switch (number) {
                case 0:
                    slide[0].classList.remove('visible');
                    slide[0].classList.add('visible');
                    slide[1].classList.remove('visible');
                    slide[2].classList.remove('visible');
                    break;

                case 1:
                    slide[1].classList.remove('visible');
                    slide[1].classList.add('visible');
                    slide[0].classList.remove('visible');
                    slide[2].classList.remove('visible');
                    break;

                case 2:
                    slide[2].classList.remove('visible');
                    slide[2].classList.add('visible');
                    slide[1].classList.remove('visible');
                    slide[0].classList.remove('visible');
                    break;
            }
            clearTimeout(timer1);
        }
    })
}

//WYWOŁANIE FUNKCJI PO 10 sek
function time(){
    clearTimeout(timer1);
    setTimeout('changeSlideByTime()', 10000)
}

//ZMIANA CO 10sek
function changeSlideByTime(){
    var prevNumber = numberOfSlide;
    numberOfSlide++;
    if (numberOfSlide < 0) numberOfSlide = slide.length-1;
    else if (numberOfSlide > slide.length-1) numberOfSlide = 0;
    slide[prevNumber].classList.remove('visible');
    slide[numberOfSlide].classList.add('visible');
    circleSlide[prevNumber].classList.remove('active-slide');
    circleSlide[numberOfSlide].classList.add('active-slide');
    timer1 = setTimeout(changeSlideByTime, 10000);
}

function changeSlide(){
    var prevNumber = numberOfSlide;
    this.id === "next" ? numberOfSlide++ : numberOfSlide--;
    if (numberOfSlide < 0) numberOfSlide = slide.length-1;
    else if (numberOfSlide > slide.length-1) numberOfSlide = 0;
    slide[prevNumber].classList.remove('visible');
    slide[numberOfSlide].classList.add('visible');
    circleSlide[prevNumber].classList.remove('active-slide');
    circleSlide[numberOfSlide].classList.add('active-slide');
    clearTimeout(timer1);
}

//GALLERY
var smallBox = document.querySelectorAll('.small-box');
var stripe = document.querySelectorAll('.small-box .stripe');

smallBox[0].addEventListener('mouseover', function(){
    stripe[0].style.display = 'none'
})

smallBox[0].addEventListener('mouseout', function(){
    stripe[0].style.display = 'block'
})

smallBox[1].addEventListener('mouseover', function(){
    stripe[1].style.display = 'none'
})

smallBox[1].addEventListener('mouseout', function(){
    stripe[1].style.display = 'block'
})


//FORM CHECK
var checkbox = document.querySelector('.checkbox-img');

checkbox.addEventListener('click', function(){
    this.classList.toggle('check')
})
