// two arrays that contain strings
const jeanLuc = ["Quand j'entends le mot culture, je sors mon carnet de chèques.", "Quand on va au cinéma, on lève la tête. Quand on regarde la télévision, on la baisse.", "Je suis fier quand je me compare, humble quand je me considère.","La guerre, c'est simple : c'est faire entrer un morceau de fer dans un morceau de chair.","La télévision fabrique de l'oubli. Le cinéma fabrique des souvenirs.","Aujourd'hui, les festivals de cinéma sont comme les congrès de dentistes. C'est tellement folklorique que c'en est déprimant.","En littérature, il y a beaucoup de passé et un peu de futur, mais il n'y a pas de présent. Au cinéma, il n'y a que du présent qui ne fait que passer.","L'aphorisme résume quelque chose tout en permettant d'autres développements.","Si vous n'aimez pas la mer, si vous n'aimez pas la montagne, si vous n'aimez pas la ville... allez vous faire foutre !","Le critique a quelque chose à voir avec le médecin.","Le cinéma est un moyen d’expression dont l’expression a disparu. Il est resté le moyen.","Il faut confronter des idées vagues avec des images claires."];
const jeanClaude = ["Une noisette, jla casse entre mes fesses tu vois... ", "Selon les statistiques, il y a une personne sur cinq qui est déséquilibrée. S'il y a 4 personnes autour de toi et qu'elles te semblent normales, c'est pas bon.", "Quand tu prends confiance en la confiance tu deviens confiant.", 'La drogue, c\'est comme quand tu close your eyes et que tu traverses la rue.'];

//determine arays length for my upcoming function
const jeanLucLength = jeanLuc.length;
const jeanClaudeLength = jeanClaude.length;

//a random number generated between my array's ranges
function getRandomNumber(max){
    let min = 0;
    return Math.floor(Math.random() * (max - min) + min);
};

//choose between jeanLuc or jeanClaude then give them a random index
function pickASentence (){
    const index = Math.round(Math.random());
    if(index === 0){
        const indexJeanLuc = getRandomNumber(jeanLucLength);
        return jeanLuc[indexJeanLuc];
    }
    else {
        const indexJeanClaude = getRandomNumber(jeanClaudeLength);
        return jeanClaude[indexJeanClaude];
    }
};

//using the DOM
//select btn to pick the sentence
const whosTalkin = document.getElementById("randomsentence");
//display the sentence
const sentenceDiv = document.getElementById("jljc");
//select the btns to pick an answer
const jeanclaudebtn = document.getElementById("jeanclaude");
const jeanlucbtn = document.getElementById("jeanluc");
//display the correct answer
const answer = document.getElementById("answer");

//EVENTS

//wait for the whole script to be loaded
document.addEventListener('DOMContentLoaded', function () {
//a click event to randomly generate a sentence from one of the arrays
whosTalkin.addEventListener('click', function() {   
//click event on "qui parle" to generate sentence
const pickedSen = pickASentence();
sentenceDiv.innerHTML = pickedSen;
answer.innerHTML = '';
        //event on jean-claude btn
        jeanclaudebtn.addEventListener('click', function() {   
    if (jeanClaude.includes(`${pickedSen}`)) { 
    answer.innerHTML = "Et oui c'est JC";
    } else {
    answer.innerHTML = "Bah non...";
    };
    
        });
        //event on jean-luc btn
        jeanlucbtn.addEventListener('click', function() {   
            if (jeanLuc.includes(`${pickedSen}`)) { 
            answer.innerHTML = "Et oui c'est JL";
            } else {
            answer.innerHTML = "M'enfin...";
            };
            
                });

})
});





    //maybe toggle classes to let picture appear according to answer?