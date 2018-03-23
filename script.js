			var desktop = 0;
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
					//document.getElementById('sidebar').style.display = 'none';
					document.getElementById('btnsidebar').innerText="|||";
				} else {
					desktop = 1;
				}
			}
			
			function sidebar() {
				if ( desktop == 0 ) {
					var y = document.getElementById('sidebar');
						if (y.style.display === 'block') {
							y.style.display = 'none';
							document.getElementById('btnsidebar').innerText="|||";
						} else {
							y.style.display = 'block';
							document.getElementById('btnsidebar').innerText="×";
						}
					}
			}
			function phome() {
				document.getElementById('home').style.display = 'block';
				document.getElementById('sobre').style.display = 'none';
				document.getElementById('strtcode').style.display = 'none';
				document.getElementById('tips').style.display = 'none';
				document.getElementById('pogs').style.display = 'none';
				sidebar();
			}
			function psobre() {
				document.getElementById('home').style.display = 'none';
				document.getElementById('sobre').style.display = 'block';
				document.getElementById('strtcode').style.display = 'none';
				document.getElementById('tips').style.display = 'none';
				document.getElementById('pogs').style.display = 'none';
				sidebar();
			}
			function pstrtcode() {
				document.getElementById('home').style.display = 'none';
				document.getElementById('sobre').style.display = 'none';
				document.getElementById('strtcode').style.display = 'block';
				document.getElementById('tips').style.display = 'none';
				document.getElementById('pogs').style.display = 'none';
				sidebar();
			}
			function ptips() {
				document.getElementById('home').style.display = 'none';
				document.getElementById('sobre').style.display = 'none';
				document.getElementById('strtcode').style.display = 'none';
				document.getElementById('tips').style.display = 'block';
				document.getElementById('pogs').style.display = 'none';
				sidebar();
			}
			function ppogs() {
				document.getElementById('home').style.display = 'none';
				document.getElementById('sobre').style.display = 'none';
				document.getElementById('strtcode').style.display = 'none';
				document.getElementById('tips').style.display = 'none';
				document.getElementById('pogs').style.display = 'block';
				sidebar();
			}
			function postopen(postagem) {
				var x = document.getElementById(postagem);
				if ( desktop == 0 ) {
					if (x.style.display === 'block') {
						x.style.display = 'none';
					} else {
						x.style.display = 'block';
					}
				} else {
					if (x.style.display === 'inline-block') {
						x.style.display = 'none';
					} else {
						x.style.display = 'inline-block';
					}
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
