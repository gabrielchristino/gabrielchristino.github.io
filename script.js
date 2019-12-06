function abrirmenu() {
		menu = document.getElementById("menu");
		if ( menu.style.display !== "block" ){
				menu.style.display = "block";
		} else {
				menu.style.display = "none";
		}
}
function irPara(caminho) {
		window.location.href=caminho;
		menu = document.getElementById("menu");
		if ( menu.style.display !== "block" ){
				menu.style.display = "block";
		} else {
				menu.style.display = "none";
		}
}
