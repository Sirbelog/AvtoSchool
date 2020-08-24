"use strict";

//       СЛАЙДЕР        

let nextButton = document.querySelector('#next__button')
let prevButton = document.querySelector('#prev__button')

let images = document.querySelectorAll(".gallery__list img")

let i = 0;

nextButton.addEventListener("click", function(){
	images[i].className = "";
	i++;

	if(i>=images.length){
		i=0;
	};

	images[i].className = "gallery__main"
	
})

prevButton.addEventListener("click", function(){
	images[i].className = "";
	i--;

	if(i<0){
		i=images.length-1;
	};

	images[i].className = "gallery__main"
	
})