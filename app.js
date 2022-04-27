
console.log('salut'); 
// On teste la liaison JS > HTML

/*$('button').click(function () {
    //console.log('ok')
    $('img').toggle(5000);
    $('button').html( ($('button').text() == 'Afficher?' ? 'Cacher?' : 'Afficher?') )
})/*/

/////////////////////////////////  Exercice WHILE N°1  /////////////////////////////////////////////////
/*
var chx_nb = prompt('Saisir un nombre entre 1 et 3');
// On envoie un msg qui demande au user un nombre entre 1 et 3.

console.log(chx_nb);
// on console.log la réponse user

while (chx_nb != 2) {
// on fait une boucle qui a pour condition tant que le choix user est différent de 2
    chx_nb = prompt('Resaisissez un nombre');
// demander au user de resaisir un nb     
}
// on sort quand on la bonne réponse
alert('vous avez trouvé, bien joué !')
// on affiche au user un msg lui indiquant qu'il a bien répondu

/////////////////////////////////  Exercice WHILE N°2  /////////////////////////////////////////////////
alert('On commence l'+"'exo2 !");

chx_nb = prompt('Saisir un nombre entre 10 et 20');
// On envoie un msg qui demande au user un nombre entre 10 et 20.
while (chx_nb!=15) {
    //Tant que le choix user est différent de 15, faire
    chx_nb = prompt('Resaisissez un nombre, ce n\'est pas le bon');
    while (chx_nb < 10) {
        // on fait une boucle qui a pour condition tant que le choix user est inférieur à 10
            chx_nb = prompt('Resaisissez un nombre, celui-ci est bcp trop petit');
        // demander au user de resaisir un nb             
        } 
    while (chx_nb > 20) {
        // on fait une boucle qui a pour condition tant que le choix user est supérieur à 20
            chx_nb = prompt('Resaisissez un nombre, celui-ci est bcp trop grand');
        // demander au user de resaisir un nb     
        }   

}
// on sort quand on la bonne réponse
alert('vous avez trouvé, bien joué !')*/
// on affiche au user un msg lui indiquant qu'il a bien répondu

/////////////////////////////////  Exercice WHILE N°3  /////////////////////////////////////////////////
alert("On commence l\'exo3 !");
var nb = 0;
nb = prompt('Saisir un nombre');
// On envoie un msg qui demande au user un nombre.
//var i =0;
//Création d'une variable i à laquelle on donne la valeur 0

var tab_nb = [];
//on crée une variable tableau
let i=0;

console.log(nb);
tab_nb.push(nb);
while (nb!=0 &&tab_nb[i]) {
console.log(nb);
//while (tab_nb.length<6&&nb!=0) {
// on fait une boucle TANT QUE : 
//le nombre de valeurs dans le tableau est inf à 6
// & Tant que la variable nb choix user est différent de 0 >>>

// om insère dans le tableau tab_nb le nombre nb choisi par le user    
console.log(tab_nb);
//on affiche tab_nb dans un C.log
    
var nb = prompt('Saisir un nombre');
i++;
//On impute un nouveau nombre nb

tab_nb.push(nb);
// break mis pôur casser la boucle au moment de faire la boucle
}
console.log(tab_nb);
/*
// on sort quand on la bonne réponse
tab_nb.sort(function(a, b) {
  return b - a;
});
console.log(tab_nb);

alert('vous avez demandé à arrêter !')
// on affiche au user un msg lui indiquant qu'il a bien répondu
*/
