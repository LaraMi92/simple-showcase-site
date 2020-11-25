const quotes = ["Quand j'entends le mot culture, je sors mon carnet de chèques.", "Quand on va au cinéma, on lève la tête. Quand on regarde la télévision, on la baisse.", "Je suis fier quand je me compare, humble quand je me considère.","La guerre, c'est simple : c'est faire entrer un morceau de fer dans un morceau de chair.","La télévision fabrique de l'oubli. Le cinéma fabrique des souvenirs.","Aujourd'hui, les festivals de cinéma sont comme les congrès de dentistes. C'est tellement folklorique que c'en est déprimant.","En littérature, il y a beaucoup de passé et un peu de futur, mais il n'y a pas de présent. Au cinéma, il n'y a que du présent qui ne fait que passer.","L'aphorisme résume quelque chose tout en permettant d'autres développements.","Si vous n'aimez pas la mer, si vous n'aimez pas la montagne, si vous n'aimez pas la ville... allez vous faire foutre !","Le critique a quelque chose à voir avec le médecin.","Le cinéma est un moyen d’expression dont l’expression a disparu. Il est resté le moyen.","Il faut confronter des idées vagues avec des images claires., On se toucherait bien, mais on n'arrive qu'à se donner des coups.", "La solitude n'est pas l'isolement. On est toujours deux en un. Il y a les autres en soi.", "- Quelle est votre ambition dans la vie ? - Devenir immortel et mourir.", "Il y a le visible et l'invisible. Si vous ne filmez que le visible, c'est un téléfilm que vous faites.", "En littérature, il y a beaucoup de passé et un peu de futur, mais il n'y a pas de présent. Au cinéma, il n'y a que du présent qui ne fait que passer.", "Quand j'entends le mot culture, je sors mon carnet de chèques."];

function getRandomNumber(){
    let min = 1;
    let max = quotes.length;
    return Math.floor(Math.random() * (max - min) + min);
};

getRandomNumber();

let button = document.getElementById("button");



button.addEventListener('click', function() {
let randomNum = getRandomNumber();
let singleQuote = document.getElementById("text");
singleQuote.textContent = quotes[randomNum].toUpperCase();
});