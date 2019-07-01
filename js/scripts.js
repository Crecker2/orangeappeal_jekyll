var guys;

window.sr = ScrollReveal();
// sr.reveal('.cell', {origin: 'right', distance: '200px',});
sr.reveal('.boldred',{origin: 'bottom', distance: '50px', scale: 1, duration: 1000, easing: 'cubic-bezier(0.49,-0.02, 0.36, 0.95)'},500);
sr.reveal('.thinwhite',{origin: 'bottom', distance: '50px', scale: 1, duration: 1000, delay: 100, easing: 'cubic-bezier(0.49,-0.02, 0.36, 0.95)'},50);
sr.reveal('.tagline',{origin: 'bottom', distance: '50px', scale: 1, duration: 1000, delay: 200, easing: 'cubic-bezier(0.49,-0.02, 0.36, 0.95)'},50);
sr.reveal('#scrolldown', {delay: 800});

function togglenav(){
	if(!$('nav .hamburger').hasClass('is-active')){
		$('nav ul').css('transform','scale(1)');
		$('nav .hamburger').addClass('is-active');
	} else {
		$('nav ul').css('transform','scale(0)');
		$('nav .hamburger').removeClass('is-active');
	}
}

window.setTimeout(function(){
	$('nav ul').css('transform','scale(1)');
	$('nav .hamburger').addClass('is-active');
},1500);

$('nav .hamburger').click(togglenav);



// second section

sr.reveal('.albums li:nth-of-type(odd)',{origin: 'left', distance: '300px', scale: 1, duration: 1000});
sr.reveal('.albums li:nth-of-type(even)',{origin: 'right', distance: '300px', scale: 1, duration: 1000});
