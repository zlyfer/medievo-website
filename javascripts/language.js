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
	}
}