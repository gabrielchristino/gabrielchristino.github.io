function abrirmenu() {
		menu = document.getElementById("menu");
		if ( menu.style.display !== "block" ){
				menu.style.display = "block";
		} else {
				menu.style.display = "none";
		}
}
function irPara(hash) {
		window.location.href=hash;
		menu = document.getElementById("menu");
		if ( window.innerWidth <= 1080 ) {
			if ( menu.style.display !== "block" ){
					menu.style.display = "block";
			} else {
					menu.style.display = "none";
			}
		}
}
