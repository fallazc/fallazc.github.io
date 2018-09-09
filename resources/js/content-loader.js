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
	
	console.log(window.location.href);
};

window.onload = onPageLoad;