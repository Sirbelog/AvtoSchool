"use strict";

//       СЛАЙДЕР        

let nextButton = document.querySelector('#next__button')
let prevButton = document.querySelector('#prev__button')
let galleryNumber = document.querySelector("#gallery__number")

let images = document.querySelectorAll(".gallery__list img")
let imagesMini = document.querySelectorAll(".gallery__mini-container img")

let i = 0;
let timer
timer = setInterval(nextSlide,4000)
galleryNumber.textContent = (i+1 + " / " + images.length)



nextButton.addEventListener("click", nextSlide)
nextButton.addEventListener("click", function(){
	clearInterval(timer)
	timer = setInterval(nextSlide,4000)
})

prevButton.addEventListener("click", function(){
	images[i].className = "";
	i--;
	if(i<0){
		i=images.length-1;
	};
	images[i].className = "gallery__main"

	galleryNumber.textContent = (i+1 + " / " + images.length)
})		


function nextSlide(){

	images[i].className = "";
	i++;

	if(i>=images.length){
		i=0;
	};

	images[i].className = "gallery__main"

	galleryNumber.textContent = (i+1 + " / " + images.length)

}







//------Анимация--------

let animation = document.querySelectorAll('.animation');  //задаем класс для анимаций


if(animation.length > 0){       //проверка существуют ли такие классы
	window.addEventListener('scroll',scrollAnim);

	function scrollAnim(){			
		for(let i = 0;i < animation.length; i++){
			let anim = animation[i];
			let animHeight = anim.offsetHeight;   //получение высоты объекта
			let animOffset = offset(anim).top;
			let animStart = 4;

			let animPoint = window.innerHeight - animHeight / animStart;

			if(animHeight > window.innerHeight){
				animPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animHeight)){
				anim.classList.add("active");
		
			}else {
				if(!anim.classList.contains('animationoff')){				
				anim.classList.remove("active");
			}
		}
		}
	}

	function offset(el) {
		let rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top:rect.top + scrollTop, left: rect.left + scrollLeft}
	
	}
	setTimeout(() =>{scrollAnim();},700);
	
}

