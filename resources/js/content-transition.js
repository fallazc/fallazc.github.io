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
	console.log('Transitioned to page ' + pageName);
}