// array to hold supported language codes, e.g. ['en', 'de', 'es', 'ru']
var languages = [];

// try to localize browser language when website is loaded
window.addEventListener("load", function() {

	getLanguages();
	localize(window.navigator.language);
});

// get supported language codes from language selector
function getLanguages() {
	
	var elem = document.getElementById("language-select");
	
	for (i = 0; i < elem.children.length; i++) {
		
		languages.push(elem.children[i].value);
	}
}

// check if given language is supported and return index in language code array (-1 if not supported)
function getIndex(language) {
	
	for (i = 0; i < languages.length; i++) {
		
		if (language.includes(languages[i])) return i;
	}
	
	return -1;
}

// load data from external json file and translate the website to the given language
function localize(language) {
	
	var index = getIndex(language);
	
	if (index >= 0) {

		fetch("scripts/language.json")
		.then(response => response.json())
		.then(localisation => {

			var data = localisation[index].data;
		
			for (var i = 0; i < Object.keys(data).length; i++) {
				
				var key = Object.keys(data)[i];
				
				if (key == "desc") document.getElementById("desc").setAttribute("content", data[key]);
				else document.getElementById(key).innerHTML = data[key];
			}

			// set language selector to current language
			document.getElementById("language-select").value = languages[index];
		})

		.catch(err => console.error(err));
	}
}