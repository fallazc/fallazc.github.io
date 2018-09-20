const homePageContent = 
'<div class="text-zone home"> <h1>Hi,<br>I\'m Falla,<br>software developer</h1>' + 
'<h5>Desktop / Mobile / Web</h5>'	+ 
'<a href="#contact" onclick="transitionToPage(\'contact\')" class="btn-contact">CONTACT ME</a> </div>';

const skillsPageContent = 
'<div class="text-zone skills"> <h1>Skills & Experience</h1>'	+
'<p style="margin: 40px 0px 0px 0px;">Main area of focus is back-end development and everything related with that side of software development.</p>'	+ 
'<p>Experience with Java(Core, Spring, Hibernate, JDBC), C++(Qt5, OpenGL3), Android SDK, building small and medium desktop and android apps, building custom animations, layouts and coding responsive user interfaces. I have a good understanding of REST API and database design with some exposure to MySQL and Oracle databases.</p>'	+ 
'<p>When it comes to web technologies, I am fairly comfortable working with HTML, CSS, Javascript(ES6, JQuery) which I learned through freecodecamp. The end product ended up being the conception of this website, hope you like it so far :).</p>'	+
'<p>You can check my LinkedIn profile or contact me if you want to learn more.</p></div>';

const patternDesc = 'Pattern Breaker(<a href="https://play.google.com/store/apps/details?id=com.badgamesandbadjokes.patternbreaker" class="ext-link" target="_blanck">Play Store</a>)<br>Java - Android SDK';
const manoDesc = 'Mano Computer Simulator(<a href="https://github.com/fallazc/Mano-Computer-Simulator" class="ext-link" target="_blanck">Github</a>)<br>C++ - Qt5';
const fractalDesc = 'Fractal image compressor(<a href="https://github.com/fallazc/Fractal-Image-Compression" class="ext-link" target="_blanck">Github</a>)<br>Python - Tkinter';
const spriterDesc = 'Pattern Breaker(<a href="https://github.com/fallazc/SpriterToolkit" class="ext-link" target="_blanck">Github</a>)<br>Java - JavaFX - CSS - XML - Json';
const stockDesc = 'Stock Broker<br>Java - Swing';

const myworkPageContent = 
'<!-- Images used to open the lightbox -->'			+
'<div class="row"> ' 								+
'<div class="column"> <img src="resources/images/spriter.png" onclick="openModal();currentSlide(1)" class="hover-shadow thumbnail"></div>'							+
'<div class="column"><img src="resources/images/mano.png" onclick="openModal();currentSlide(2)" class="hover-shadow thumbnail"></div>'							+
'<div class="column"><img src="resources/images/fractal.png" onclick="openModal();currentSlide(3)" class="hover-shadow thumbnail"></div>'							+
'<div class="column"><img src="resources/images/patternbreaker.png" onclick="openModal();currentSlide(4)" class="hover-shadow thumbnail"></div>'							+
'<div class="column"><img src="resources/images/stockmarket.png" onclick="openModal();currentSlide(5)" class="hover-shadow thumbnail"></div></div>'						+
'<!-- The Modal/Lightbox -->'														+
'<div id="myModal" class="modal">'													+
'<span class="close cursor" onclick="closeModal()">&times;</span>'					+
'<div class="modal-content">'														+
'<div class="mySlides">'															+
'<div class="numbertext">1 / 5</div>'												+
'<img src="resources/images/spriter.png" style="padding:2.5em 0.2em 0 0.2em;">'				+
'</div>'																			+
'<div class="mySlides">'															+
'<div class="numbertext">2 / 5</div>'												+
'<img src="resources/images/mano.png" style="padding:2.5em 0.2em 0 0.2em;">'				+
'</div>'																			+
'<div class="mySlides">'															+
'<div class="numbertext">3 / 5</div>'												+
'<img src="resources/images/fractal.png" style="padding:2.5em 0.2em 0 0.2em;">'				+
'</div>'																			+
'<div class="mySlides">'															+
'<div class="numbertext">4 / 5</div>'												+
'<img src="resources/images/patternbreaker.png" style="padding:2.5em 0.2em 0 0.2em;">'				+
'</div>'																			+
'<div class="mySlides">'															+
'<div class="numbertext">5 / 5</div>'												+
'<img src="resources/images/stockmarket.png" style="padding:2.5em 0.2em 0 0.2em;">'				+
'</div>'																			+
'<!-- Next/previous controls -->'													+
'<a class="prev" onclick="plusSlides(-1)">&#10094;</a>'								+
'<a class="next" onclick="plusSlides(1)">&#10095;</a>'								+
'<!-- Caption text -->'																+
'<div class="caption-container">'													+
'<p id="caption"></p>'																+
'</div>'																			+	
'<!-- Thumbnail image controls -->'													+	
'<div class="column mini">'																+
'<img class="demo thumbnail" src="resources/images/spriter.png" onclick="currentSlide(1)" data-desc=\'' + spriterDesc + '\'>'+
'</div>'																			+
'<div class="column mini">'																+
'<img class="demo thumbnail" src="resources/images/mano.png" onclick="currentSlide(2)" data-desc=\'' + manoDesc + '\'>'+
'</div>'																			+
'<div class="column mini">'																+
'<img class="demo thumbnail" src="resources/images/fractal.png" onclick="currentSlide(3)" data-desc=\'' + fractalDesc + '\'>'+
'</div>'																			+
'<div class="column mini">'																+
'<img class="demo thumbnail" src="resources/images/patternbreaker.png" onclick="currentSlide(4)" data-desc=\'' + patternDesc + '\'>'+
'</div>'																			+
'<div class="column mini">'																+
'<img class="demo thumbnail" src="resources/images/stockmarket.png" onclick="currentSlide(5)" data-desc=\'' + stockDesc + '\'>'+
'</div>'																			+
'</div>'																			+
'</div>'																			+
'</div>';

const contactPageContent = 
'<div class="text-zone contact"><h1>Contact me</h1>'						+
'<form id="fr1"><input type="text" id="name"  placeholder="Name"/>'			+
'<input type="text" id="email" placeholder="Email"/>'						+
'<input type="text" id="subject" placeholder="Subject"/>'					+
'<textarea id="message" placeholder="Message"></textarea>'					+
'<input onclick="sendEmail()" type="button" id="bt1" value="SEND" class="btn-contact"/></form>';

const messageSentPageContent=
'<div class="text-zone messageSent">'+
'<h5>I will get back to you within 24 hours, thanks!</h5></div>';

const aboutPageContent = 
'<div class="text-zone about"> <h1>About me</h1>'	+
'<p style="margin: 40px 0px 0px 0px;">I am a recent computer science graduate who attended the University of Central Arkansas. Throughout my academic career, I have been consistently praised as being detail oriented and self-driven by my professors and peers. While working on academic and extracurricular projects, I have developed an ability to effectively articulate technical challenges and solutions</p>'						+
'<p>When I’m not working on projects or applying for jobs, I love making 3D arts, answering questions as well as participating in discussion on Stack Overflow.'					+
'</p><p>If you have a project I can help with, contact me.</p></div>';