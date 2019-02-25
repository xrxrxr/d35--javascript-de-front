let footer = document.querySelector("footer");
let i = 0;
let navbarHeader = document.querySelector('#navbarHeader');
let navbarToggler = document.querySelectorAll(".navbar-toggler")[0];
let editButtonIndexZero = document.querySelectorAll(".btn-outline-secondary")[0];
let textCardIndexZero = document.querySelectorAll(".card-text")[0];
let editButtonIndexOne = document.querySelectorAll(".btn-outline-secondary")[1];
let textCardIndexOne = document.querySelectorAll(".card-text")[1];
let greenToggler = false;
console.log(document.querySelector('.navbar'));
let navbar = document.querySelector('.navbar');
let linkBootstrap = document.querySelector('link[rel=stylesheet]');


footer.addEventListener('click', function(){
	console.log("click : ceci est la fonctionnalité n°1")
});

footer.addEventListener('click', function(){
	i++;
	console.log(`click n° ${i} : ceci est la fonctionnalité n°1 bis`)
});

navbarToggler.addEventListener('click', function(){
	navbarHeader.classList.toggle("collapse");
});

editButtonIndexZero.addEventListener('click', function(){
	textCardIndexZero.style.color = 'red';
});

editButtonIndexOne.addEventListener('click', function(){
	if (greenToggler === false){
		textCardIndexOne.style.color = 'green';
		greenToggler = true;
	}
	else {
		textCardIndexOne.style.color = '';
		greenToggler = false;
	};
});

navbar.addEventListener('dblclick', function(){
	if (linkBootstrap.disabled === false){
		linkBootstrap.disabled = true;
	}
	else {
		linkBootstrap.disabled = false;
	};
});