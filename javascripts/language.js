var languages = [];

window.addEventListener("load", function() {
	
	initLanguages();
	document.getElementById("language-select").value = languages[checkLanguage(window.navigator.language)];
	selectLanguage(window.navigator.language);
});

function initLanguages() {
	
	var elem = document.getElementById("language-select");
	
	for (i = 0; i < elem.children.length; i++) {
		
		console.log(elem.children[i].value);
		languages.push(elem.children[i].value);
	}
}

function checkLanguage(language) {
	
	for (i = 0; i < languages.length; i++) {
		
		if (language.includes(languages[i])) return i;
	}
	
	return -1;
}

function selectLanguage(language) {
	
	var index = checkLanguage(language);
	
	if (index >= 0) {
		
		let lang = ":lang(" + languages[index] + ")";
		let hide = "[lang]:not(" + lang + ")";
		
		document.querySelectorAll(hide).forEach(function (node) {
			
			node.style.display = "none";
		});
		
		let show = "[lang]" + lang;
		
		document.querySelectorAll(show).forEach(function (node) {
			
			node.style.display = "unset";
		});
		
		switch(languages[index]) {
			
			case "en":
				document.title="Medievo - Home";
				$('meta[name="description"]').attr("Welcome to our website! We are a small team developing a medieval building game called Medievo. Enjoy your stay!", newDescription);
				
			case "de":
				document.title="Medievo - Startseite";
				$('meta[name="description"]').attr("Wir sind ein kleines Team und entwickeln ein Mittelalter-Aufbauspiel namens Medievo. Viel Spaß auf unserer Webseite!", newDescription);
			
			case "es":
				document.title="Medievo - Inicio";
				$('meta[name="description"]').attr("Somos un equipo pequeño y estamos desarrollando un juego de construcción medieval llamado Medievo. ¡Diviértete en nuestra web!", newDescription);
				
			case "ru":
				document.title="Медиево - дома";
				$('meta[name="description"]').attr("Мы небольшая команда, разрабатывающая средневековую строительную игру. Развлекайтесь на нашем сайте!", newDescription);
		}
	}
}