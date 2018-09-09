let transitionToPage = function(pageName){
	let container = document.getElementById("contentContainer") ;
	switch(pageName){
		case 'home':
			container.innerHTML = homePageContent;
			break;
		case 'skills':
			container.innerHTML = skillsPageContent;
			break;
		case 'my-work':
			container.innerHTML = myworkPageContent;
			break;
		case 'contact':
			container.innerHTML = contactPageContent;
			break;
		case 'about':
			container.innerHTML = aboutPageContent;
			break;
		default:
			break;
	}
	
	
	//$(container).removeClass(c);
	console.log('Transitioned to page ' + pageName);
}

let callfunction = function(event){
	console.log('transition done');
	console.log(event);
	let loadingScreen = document.getElementById('loadingScreen');
	
	loadingScreen.style.transition= '';
	loadingScreen.style.left = '-100%';
}

var a = true;

let handleclick = function(){
	let container = document.getElementById("contentContainer");
	let loadingScreen = document.getElementById('loadingScreen');
	
	loadingScreen.style.transition= 'left 1.5s';
	
	if (a)
	{
		container.style.opacity = '0.4';
		container.style.transform = 'scale(0.8)';
		//document.body.style.overflow='hidden';
		loadingScreen.style.left = '100%';
	}
	else {
		container.style.opacity = '1';
		container.style.transform = 'scale(1)';
		//document.body.style.overflow='visible';
		loadingScreen.style.left = '200%';
	}
	
	a = !a;
	
	container.addEventListener("webkitTransitionEnd ", callfunction,false);
	container.addEventListener("MSTransitionEnd", callfunction,false);
	container.addEventListener("oTransitionEnd", callfunction,false);
	container.addEventListener("transitionend", callfunction,false);
}