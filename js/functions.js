$(function() {

	if (typeof $.cookie("end") !== 'undefined') {
		return;
	}
	else if (typeof $.cookie("forth") !== 'undefined') {
		alert($.cookie("forth"));
		$.cookie("end", "LOL", { expires: 70, path: '/' });
	} 

	else if (typeof $.cookie("third") !== 'undefined') {
		alert($.cookie("third"));
		$.cookie("forth", "Au bout de la 4ème visite, nous allons arrêter de compter. Amusez-vous bien !", { expires: 70, path: '/' });
	} 

	else if (typeof $.cookie("second") !== 'undefined') {
		alert($.cookie("second"));
		$.cookie("third", "Encore vous ! Besoin d’une précision ? rodolphe@netfirst.fr / laura_c@netfirst.fr", { expires: 70, path: '/' });
	} 
	else if (typeof $.cookie("first") == 'undefined') {
		$.cookie("first", "LOL",{ expires: 70, path: '/' });
		$.cookie("second", "Comme on se retrouve ! C’est la deuxième fois que vous revenez sur le It Mag digitalisé. Quelque chose à éclaircir?", { expires: 70, path: '/' });
	}

});