let footer = document.querySelector("footer");
let i = 0;
let viewToggle = [];
let navbarHeader = document.querySelector('#navbarHeader');
let navbarToggler = document.querySelectorAll(".navbar-toggler")[0];
let viewButtonIndexZero = document.querySelectorAll(".btn-success")[0];
let editButtonIndexZero = document.querySelectorAll(".btn-outline-secondary")[0];
let textCardIndexZero = document.querySelectorAll(".card-text")[0];
let imgCardIndexZero = document.querySelectorAll(".card-img-top")[0];
let editButtonIndexOne = document.querySelectorAll(".btn-outline-secondary")[1];
let textCardIndexOne = document.querySelectorAll(".card-text")[1];
let allCards = document.querySelectorAll('.col-md-4');
let greenToggler = false;
console.log(document.querySelector('.navbar'));
let navbar = document.querySelector('.navbar');
let linkBootstrap = document.querySelector('link[rel=stylesheet]');
console.log(document.querySelectorAll('.col-md-4'));
console.log(document.querySelector('.navbar-brand'));
let navbarBrand = document.querySelector('.navbar-brand');


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

for (let k = 0; k < allCards.length; k++){
	viewToggle.push(false);
	document.querySelectorAll(".btn-success")[k].addEventListener('mouseover', function(){
		if (viewToggle[k] === false){
			document.querySelectorAll(".card-text")[k].style.display = "none";
			document.querySelectorAll(".card-img-top")[k].style.width = '20%';
			viewToggle[k] = true;
		}
		else {
			document.querySelectorAll(".card-text")[k].style.display = "block";
			document.querySelectorAll(".card-img-top")[k].style.width = '100%';
			viewToggle[k] = false;
		};
	});
}

navbarBrand.addEventListener('keypress', (event) => {
  switch (event.key) {
  case "a":
  	document.querySelector('body').classList.remove('offset-md-4');
  	document.querySelector('body').classList.remove('offset-md-8');
    document.querySelector('body').classList.add('col-4');
    break;
  case "y":
  	document.querySelector('body').classList.remove('offset-md-8');
    document.querySelector('body').classList.add('col-4');
    document.querySelector('body').classList.add('offset-md-4');
    break;
  case "p":
  	document.querySelector('body').classList.remove('offset-md-4');
    document.querySelector('body').classList.add('col-4');
    document.querySelector('body').classList.add('offset-md-8');
    break;
  case "b":
    document.querySelector('body').classList.remove('col-4');
    document.querySelector('body').classList.remove('offset-md-4');
    document.querySelector('body').classList.remove('offset-md-8');
    break;
  };
});