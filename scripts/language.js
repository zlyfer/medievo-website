// array to hold supported language codes, e.g. ['en', 'de', 'es', 'ru']
var languages = [];

// try to localize browser language when the website is loaded
window.addEventListener("load", function() {
	
	initLanguages();
	document.getElementById("language-select").value = languages[checkLanguage(window.navigator.language)];
	localize(window.navigator.language);
});

// get supported languages from language selector
function initLanguages() {
	
	var elem = document.getElementById("language-select");
	
	for (i = 0; i < elem.children.length; i++) {
		
		languages.push(elem.children[i].value);
	}
}

// check if given language is supported -> used for checking browser language
function checkLanguage(language) {
	
	for (i = 0; i < languages.length; i++) {
		
		if (language.includes(languages[i])) return i;
	}
	
	return -1;
}

// translate the website to the given language by using localisation object
function localize(language) {
	
	var index = checkLanguage(language);
	
	if (index >= 0) {
		
		for (var i = 0; i < Object.keys(localisation[index].data).length; i++) {
			
			var key = Object.keys(localisation[index].data)[i];
			
			if (key == "desc") document.getElementById("desc").setAttribute("content", localisation[index].data[key]);
			else document.getElementById(key).innerHTML = localisation[index].data[key];
		}
	}
}




// object holding localisation data for supported languages
var localisation = [

	{
	
		"language": "en",
		
		"data": {
			
			"title": "Medievo - Home",
			"desc": "We are a small team developing a medieval building game called Medievo. Welcome to our website!",
			
			"text-ls": "Language:",
			"text-welcome": "Welcome to the website of Medievo! <br> Here you can find all information about this project.",
			"text-q1": "What is Medievo?",
			"text-a1": "Medievo is a medieval building game we are currently developing. Our goal is to publish it one day so that you will be able to play it."
		}
	},
	
	{
	
		"language": "de",
		
		"data": {
			
			"title": "Medievo - Startseite",
			"desc": "Wir sind ein kleines Team und entwickeln ein Mittelalter-Aufbauspiel namens Medievo. Willkommen auf unserer Webseite!",
			
			"text-ls": "Sprache:",
			"text-welcome": "Wilkommen auf der Webseite von Medievo! <br> Hier findet ihr alle Informationen zu diesem Projekt.",
			"text-q1": "Was ist Medievo?",
			"text-a1": "Medievo ist ein mittelalterliches Aufbaustrategiespiel, welches wir zurzeit entwickeln. <br> Unser Ziel ist, dass wir es eines Tages veröffentlichen und ihr es spielen könnt."
		}
	},
	
	{
	
		"language": "es",
		
		"data": {
			
			"title": "Medievo - Inicio",
			"desc": "Somos un equipo pequeño y estamos desarrollando un juego de construcción medieval llamado Medievo. ¡Bienvenidos a nuestra página web!",
			
			"text-ls": "Idioma:",
			"text-welcome": "¡Bienvenido a la página del juego Medievo! <br> Aquí puedes encontrar toda la información sobre este proyecto.",
			"text-q1": "¿Qué es Medievo?",
			"text-a1": "Medievo es un juego de estrategia y construcción ambientada en la Edad Media, que actualmente <br> estamos desarrollando. Nuestro objetivo es lanzarlo algún día para que puedas jugarlo."
		}
	},
	
	{
	
		"language": "ru",
		
		"data": {
			
			"title": "Медиево - дома",
			"desc": "Мы небольшая команда, разрабатывающая средневековую строительную игру. Добро пожаловать на наш сайт!",
			
			"text-ls": "язык:",
			"text-welcome": "Добро пожаловать на сайт Медиево! <br /> Здесь вы можете найти всю информацию об этом проекте.",
			"text-q1": "Что Медиево?",
			"text-a1": "Медиево — средневековый градостроительный экономический симулятор реального времени, который <br> мы сейчас разрабатываем. Наша цель - однажды выпустить эту игру, чтобы вы могли в нее играть."
		}
	}
];