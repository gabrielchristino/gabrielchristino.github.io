			var desktop = 0; var varsidebar = 0;
			function inicio() {
				var isMobile = {
					Android: function() {
						return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function() {
						return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function() {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
					},
					Opera: function() {
						return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function() {
						return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
					},
					any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
					}
				};
				
				if( isMobile.any() ) {
					desktop = 0;
				} else {
					desktop = 1;
				}
			}
			function sidebarshow() {
				if ( varsidebar == 0 && desktop == 1 ) {
					$('#sidebar').slideUp(100);
					$("#sidebar").animate({width: '0em'});
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
					$("#header").animate({
						width: '2.1em',
						'border-bottom-right-radius': '0.5em',
						'border-top-right-radius': '0.5em'
					});
					$("#headerspam").animate({'font-size': '0em'});
					varsidebar = 1;
				} else if ( varsidebar == 1 && desktop == 1 ) {
					$('#sidebar').slideDown(100);
					$("#sidebar").animate({width: '15em'});
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
					$("#header").animate({
						width: '15em',
						'border-radius': '0em'
					});
					$("#headerspam").animate({'font-size': '1.2em'});
					varsidebar = 0;
				}
				
				
				
				if ( varsidebar == 1 && desktop == 0 ) {
					$('#sidebar').slideUp(100);
					$("#sidebar").animate({width: '0em'});
					$("#header").animate({
						width: '9em',
						'border-bottom-right-radius': '0.5em',
						'border-top-right-radius': '0.5em'
					});
					$("#headerspam").animate({'font-size': '0em'});
					varsidebar = 1;
				} else if ( varsidebar == 0 && desktop == 0 ) {
					$('#sidebar').slideDown(100);
					$("#sidebar").animate({width: '80%'});
					$("#header").animate({
						width: '80%',
						'border-radius': '0em'
					});
					$("#headerspam").animate({
						'font-size': '4em',
						left: '5em'
					});
					varsidebar = 0;
				}
			}
			function phome() {
				$('#home').slideDown(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
				if ( desktop == 0 ) {
					sidebarshow();
				}
			}
			function psobre() {
				$('#home').slideUp(500);
				$('#sobre').slideDown(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
				if ( desktop == 0 ) {
					sidebarshow();
				}
			}
			function pstrtcode() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideDown(500);
				$('#tips').slideUp(500);
				$('#pogs').slideUp(500);
				if ( desktop == 0 ) {
					sidebarshow();
				}
			}
			function ptips() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideDown(500);
				$('#pogs').slideUp(500);
				if ( desktop == 0 ) {
					sidebarshow();
				}
			}
			function ppogs() {
				$('#home').slideUp(500);
				$('#sobre').slideUp(500);
				$('#strtcode').slideUp(500);
				$('#tips').slideUp(500);
				$('#pogs').slideDown(500);
				if ( desktop == 0 ) {
					sidebarshow();
				}
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
