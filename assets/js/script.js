//Fonction qui a en paramétres over pour le survol de l'image
function borderOver(over){
  /*Condition "si" avec le paramétre over pour pouvoir survoler l'image
  suivie d'un appel à l'ID du HTML et ensuite l'ajout du css et de la
  bordure suivie des paramétre de la bordure*/
  if(over) {document.getElementById('image1').style.border = 'solid red 3px';
}
/*Condition "sinon" pour retiré la bordure quand la souris n'est plus
sur l'image*/
else {
  document.getElementById('image1').style.border = '';
}
  }
// Instruction qui permet d'activé nos paramétres
document.getElementById('image1').onmouseover = function() {borderOver(true)}
document.getElementById('image1').onmouseout = function() {borderOver(false)}
