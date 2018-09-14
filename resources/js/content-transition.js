let addTransitionEndListener = function(container, handler){
	container.addEventListener("webkitTransitionEnd ", handler, false);
	container.addEventListener("MSTransitionEnd", handler, false);
	container.addEventListener("oTransitionEnd", handler, false);
	container.addEventListener("transitionend", handler, false);
}

let removeTransitionEndListener = function(container, handler){
	container.removeEventListener("webkitTransitionEnd ", handler, false);
	container.removeEventListener("MSTransitionEnd", handler, false);
	container.removeEventListener("oTransitionEnd", handler, false);
	container.removeEventListener("transitionend", handler, false);
}

let startTransition = function() {
	let container = document.getElementById("contentContainer");
	let loadingScreen = document.getElementById('loadingScreen');
	
	loadingScreen.style.transition= 'left 1.5s';
	loadingScreen.style.left = '0%';
	
	container.style.opacity = '0.4';
	container.style.transform = 'scale(0.8)';
	//document.body.style.overflow='hidden';
	
	addTransitionEndListener(container, onScaleDownTransitionEnd);
}

let pageTransitioner = function(container, pageName) {
	return function() {
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
	};
}

let transitionIsRunning = false;

let transitionToPage = function(pageName){
	if (transitionIsRunning)
		return;
	
	transitionIsRunning = true;
	
	let container = document.getElementById("contentContainer") ;
	
	addTransitionEndListener(container, pageTransitioner(container, pageName));
	
	startTransition();
	//$(container).removeClass(c);
	console.log('Transitioned to page ' + pageName);
}

let onScaleUpTransitionEnd = function(event){
	console.log('onScaleUpTransitionEnd');
	//console.log(event);
	
	let container = document.getElementById("contentContainer");
	let loadingScreen = document.getElementById('loadingScreen');
	
	loadingScreen.style.transition= '';
	loadingScreen.style.left = '-1000%';
	
	removeTransitionEndListener(container, onScaleUpTransitionEnd);
	
	transitionIsRunning = false;
}

let counter = 0;

let onScaleDownTransitionEnd = function(event){
	++counter;
	
	if (counter == 2){
		console.log('onScaleDownTransitionEnd');
		//console.log(event);
		
		let container = document.getElementById("contentContainer");
		let loadingScreen = document.getElementById('loadingScreen');
		
		loadingScreen.style.transition= 'left 0.5s';
		loadingScreen.style.left = '100%';
		
		container.style.opacity = '1';
		container.style.transform = 'scale(1)';
		//document.body.style.overflow='visible';
		
		removeTransitionEndListener(container, onScaleDownTransitionEnd);
		
		addTransitionEndListener(container, onScaleUpTransitionEnd);
		
		counter = 0;
	}
}