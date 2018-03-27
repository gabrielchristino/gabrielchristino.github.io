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
				$(numfoto).animate({
				    display = 'inline-block',
				});
				numero = numero - 1;
				numfoto = "img" + numero;
				$(numfoto).animate({
				    display = 'none',
				});
			}
			function fante(numero) {
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'inline-block';
				numero = numero + 1;
				numfoto = "img" + numero;
				document.getElementById(numfoto).style.display = 'none';
			}
