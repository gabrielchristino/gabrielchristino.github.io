			var varsidebar = 0;
			function sidebarshow() {
				if ( varsidebar == 0 ) {
					$('#sidebar').slideUp(500);
					$("#home").animate({
						width: '+=15em',
						left: '-=15em'
					});
					$("#sobre").animate({
						width: '+=15em',
						left: '-=15em'
					});
					$("#strtcode").animate({
						width: '+=15em',
						left: '-=15em'
					});
					$("#tips").animate({
						width: '+=15em',
						left: '-=15em'
					});
					$("#pogs").animate({
						width: '+=15em',
						left: '-=15em'
					});
					$("#header").animate({width: '2em'});
					varsidebar = 1;
				} else {
					$('#sidebar').slideDown(500);
					$("#home").animate({
						width: '-=15em',
						left: '+=15em'
					});
					$("#sobre").animate({
						width: '-=15em',
						left: '+=15em'
					});
					$("#strtcode").animate({
						width: '-=15em',
						left: '+=15em'
					});
					$("#tips").animate({
						width: '-=15em',
						left: '+=15em'
					});
					$("#pogs").animate({
						width: '-=15em',
						left: '+=15em'
					});
					$("#header").animate({width: '15em'});
					varsidebar = 0;
				}
			}
			function phome() {
				$('#home').slideDown(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
			}
			function psobre() {
				$('#home').slideUp(500);
				$('#sobre').slideDown(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
			}
			function pstrtcode() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideDown(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
			}
			function ptips() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideDown(500);
				$('#pogs').slideUp(500);
			}
			function ppogs() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideDown(500);
			}
			function fprox(numero) {
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'inline-block';
				numero = numero - 1;
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'none';
			}
			function fante(numero) {
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'inline-block';
				numero = numero + 1;
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'none';
			}
