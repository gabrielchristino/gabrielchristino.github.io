function abrirmenu() {
	menu = document.getElementById("menu");
	if (menu.style.display !== "block") {
		menu.style.display = "block"
		/* $(".menu").css({
			"opacity": "0",
			"display": "block",
		}).show().animate({ opacity: 1 }) */

	} else {
		menu.style.display = "none"
		/* $(".menu").css({
			"opacity": "1",
			"display": "block",
		}).show().animate({ opacity: 0 })

		setTimeout(function () {
			$(menu).css('display', 'none');
		}, 500); */
	}
}
function irPara(hash) {
	if (navigator.userAgent.match(/Android/i) 
                || navigator.userAgent.match(/webOS/i) 
                || navigator.userAgent.match(/iPhone/i)  
                || navigator.userAgent.match(/iPad/i)  
                || navigator.userAgent.match(/iPod/i) 
                || navigator.userAgent.match(/BlackBerry/i) 
                || navigator.userAgent.match(/Windows Phone/i) {
		abrirmenu();
	}

	const position = document.getElementById(hash).offsetTop - 32;
	$(".corpo").animate({ scrollTop: position }, 300);
}

function printMe() {
	window.print();
}
