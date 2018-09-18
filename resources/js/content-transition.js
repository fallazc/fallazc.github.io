let executeAll = function(animations) {
	if(animations !== null) {
		animations.forEach(function(animation){
			animation();
		});
	}
}

let showTextDescription = function(name) {
	console.log('showTextDescription');
	
	var base = document.getElementById("main-nav-buttons");
	var target = base.querySelector('a[rel="'+name+'"]');
	
	var rect = target.getBoundingClientRect();
	console.log(rect.top, rect.right, rect.bottom, rect.left);
	
	var halfWidth = (rect.right - rect.left) / 2;
	var halfHeight = (rect.bottom - rect.top) / 2;
	
	var offX = 20;
	
	if (name == 'contact')
		offX = 25;
	else if (name == 'my-work')
		offX = 27;
	else if (name == 'home')
		offX = 14;
	
	var centerX = rect.left + halfWidth - offX;
	var centerY = rect.top + halfHeight - 15;
	
	var description = document.getElementById('main-nav-buttons-text');
	description.style.left = centerX+'px';
	description.style.top = centerY+'px';
	description.style.opacity=1;
	
	description.innerHTML = name.replace('-', ' ').toUpperCase();
	
	target.childNodes[0].style.opacity=0;
}

let hideTextDescription = function(name) {
	console.log('hideTextDescription');
	var description = document.getElementById('main-nav-buttons-text');
	description.style.opacity=0;
	
	var base = document.getElementById("main-nav-buttons");
	var doc = base.querySelector('a[rel="'+name+'"]');
	doc.childNodes[0].style.opacity=1;
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
		console.log('Page transitioner');
	};
}

//linear interpolation
let lerp = function(min, max, alpha){
	if (alpha > 1)
		alpha = 1;
	else if (alpha < 0)
		alpha = 0;
	return (1 - alpha) * min + alpha * max;
}

//Return elapsed time in seconds
let getElapsedTime = function(now, start){
	let h = (now.getHours() - start.getHours()) * 3600;
	let m = (now.getMinutes() - start.getMinutes()) * 60;
	let s = (now.getSeconds() - start.getSeconds());
	let ms = (now.getMilliseconds() - start.getMilliseconds()) / 1000;
	return h + m + s + ms;
}

let onTransitionStart = function(callback){
	transitionIsRunning = true;
	
	let container = document.getElementById("contentContainer");
	let loadingScreen = document.getElementById('loadingScreen');
	loadingScreen.style.display = 'block';
	
	let slideAnimation = slideAnimationFactory(loadingScreen, -100, 0, 0.5, [callback, onTransitionEnd]);
	
	let opacityAnimation = opacityAnimationFactory(container, 1, 0.25, 0.25, null);
	let scaleAnimation = scaleAnimationFactory(container, 1, 0.8, 0.25, [slideAnimation]);
	
	opacityAnimation();
	scaleAnimation();
	//playAnimation('slideInLoadingScreen', slideAnimation);
}

let onTransitionEnd = function(){
	let container = document.getElementById("contentContainer");
	let loadingScreen = document.getElementById('loadingScreen');
	
	var onFinishCallback = function(){transitionIsRunning = false;};
	
	let opacityAnimation = opacityAnimationFactory(container, 0.25, 1, 0.2, null);
	let scaleAnimation = scaleAnimationFactory(container, 0.8, 1, 0.2, [onFinishCallback]);
	
	let callbacks = [opacityAnimation, scaleAnimation];
	let slideAnimation = slideAnimationFactory(loadingScreen, 0, 100, 0.35, callbacks);
	slideAnimation();
}

let playAnimation = function(label, animation){
	console.log('====> ' + label);
	animation();
}

let opacityAnimationFactory = function(target, start, limit, duration, onFinishCallbacks){
	return function() {
		const delay = (duration / (duration * 60));
	
		var startTime = new Date();
		
		let elpasedTime = 0;
		var stepFunction = function(){
			const alpha = elpasedTime / duration;
			target.style.opacity = lerp(start, limit, alpha);
			
			
			if ( elpasedTime <= duration){
				var now = new Date(); // for now
				elpasedTime = getElapsedTime(now, startTime);
				setTimeout(stepFunction, delay);
			}
			else{
				console.log('Opacity animation done');
				executeAll(onFinishCallbacks);
			}
		};
		
		stepFunction();
	}
}

let scaleAnimationFactory = function(target, start, limit, duration, onFinishCallbacks){
	return function() {
		const delay = (duration / (duration * 60));
	
		var startTime = new Date();
		
		let elpasedTime = 0;
		var stepFunction = function(){
			const alpha = elpasedTime / duration;
			const tranform = 'scale(' + lerp(start, limit, alpha) + ')';
			target.style.transform = tranform;
			
			if ( elpasedTime <= duration){
				var now = new Date(); // for now
				elpasedTime = getElapsedTime(now, startTime);
				setTimeout(stepFunction, delay);
			}
			else{
				console.log('Scale animation done');
				executeAll(onFinishCallbacks);
				//target.style.display = 'none';
			}
		};
		
		stepFunction();
	}
}

let slideAnimationFactory = function(target, start, limit, duration, onFinishCallbacks){
	return function() {
		const delay = (duration / (duration * 60));
	
		var startTime = new Date();
		
		let elpasedTime = 0;
		var stepFunction = function(){
			const alpha = elpasedTime / duration;
			const tranform = 'translate(' + lerp(start, limit, alpha) + '%, 0%)';
			target.style.transform = tranform;
			
			if ( elpasedTime <= duration){
				var now = new Date(); // for now
				elpasedTime = getElapsedTime(now, startTime);
				setTimeout(stepFunction, delay);
			}
			else{
				console.log('Slide animation done');
				executeAll(onFinishCallbacks);
				//target.style.display = 'none';
			}
		};
		
		stepFunction();
	}
}

let transitionIsRunning = false;

let transitionToPage = function(pageName){
	if (transitionIsRunning)
		return;
	
	let container = document.getElementById("contentContainer");
	
	onTransitionStart(pageTransitioner(container, pageName));
	
	//$(container).removeClass(c);
	console.log('Transitioned to page ' + pageName);
}

