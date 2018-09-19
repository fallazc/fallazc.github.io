let onPageLoad = function(e) {
	const start = window.location.href.indexOf('#');
	if ( start === -1 || start === (window.location.href.length - 1)) {
		transitionToPage('home');
	}
	else {
		const end = window.location.href.length;
		const pageName = window.location.href.substring(start + 1, end);
		transitionToPage(pageName);
	}
};

let navigationButtonOn = false;
let toggleNavButtons = function(){
	console.log('toggleNavButtons');
	let navButtons = document.getElementById("main-nav-buttons");
	if (navigationButtonOn) {
		navButtons.style.display='none';
		navigationButtonOn = false;
	}
	else {
		navButtons.style.display='block';
		navigationButtonOn = true;
	}
}

function resize() { 
	let navButtons = document.getElementById("main-nav-buttons");
	if (window.innerWidth >= 600 && !navigationButtonOn)
	{
		toggleNavButtons();
	}
}

window.onload = onPageLoad;
window.onresize = resize;