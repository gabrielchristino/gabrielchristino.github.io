function abrirmenu() {
	menu = document.getElementById("menu");
	if (menu.style.display !== "block") {
		$(".menu").css({
			"opacity": "0",
			"display": "block",
		}).show().animate({ opacity: 1 })
	} else {
		$(".menu").css({
			"opacity": "1",
			"display": "block",
		}).show().animate({ opacity: 0 })

		setTimeout(function () {
			$(menu).css('display', 'none');
		}, 500);
	}
}
function irPara(hash) {
	if (window.innerWidth <= 1080) {
		abrirmenu();
	}

	const position = document.getElementById(hash).offsetTop;
	$(".corpo").animate({ scrollTop: position }, 500);
}
