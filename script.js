"use strict";

//       СЛАЙДЕР        

let nextButton = document.querySelector('#next__button')
let prevButton = document.querySelector('#prev__button')

let images = document.querySelectorAll(".gallery__list img")

let i = 0;
let timer
timer = setInterval(nextSlide,4000)



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
})		


function nextSlide(){

	images[i].className = "";
	i++;

	if(i>=images.length){
		i=0;
	};

	images[i].className = "gallery__main"

}




