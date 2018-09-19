// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

const regex = /\S+@\S+\.\S+/;
let validateForm = function(name, email, subject, message) {
	var success = true;
	if (!regex.test(email.value)) {
		email.style.borderBottomColor='red';
		success = false;
	}
	else{
		email.style.borderBottomColor='';
	}
	
	if (name.value == '') {
		name.style.borderBottomColor='red';
		success = false;
	}
	else{
		name.style.borderBottomColor='';
	}
	
	if (subject.value == '') {
		subject.style.borderBottomColor='red';
		success = false;
	}
	else{
		subject.style.borderBottomColor='';
	}
	
	if (message.value == '') {
		message.style.borderBottomColor='red';
		success = false;
	}
	else{
		message.style.borderBottomColor='';
	}
	return success;
}

let sendEmail = function() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  
  if(validateForm(name, email, subject, message)) {
	  // This is a sample server that supports CORS.
	  //var url = 'http://localhost:80?name='+name.value+'&email='+email.value+'&subject='+subject.value+'&message='+message.value;
	  var url= 'http://mailsender.openode.io?name='+name.value+'&email='+email.value+'&subject='+subject.value+'&message='+message.value;
	  
	  window.location.replace(url);
	  console.log(true);
  }
  /*var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  
  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function() {
    //console.log('Woops, there was an error making the request.');
  };

  xhr.send();*/
}