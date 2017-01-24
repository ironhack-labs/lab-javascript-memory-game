//******************************************************************
// Game Logic
//******************************************************************
//function reverse

var Cards = [
  {
    name: "batman",
    img:"./img/batman.jpg"
  },
  {
    name: "batman",
    img:"./img/batman.jpg"
  },
  {
    name: "superman",
    img:"./img/superman.jpg"
  },
  {
    name: "superman",
    img:"./img/superman.jpg"
  }
];

 function reverse() {
//tiene que dar la vuelta
//Llama a la función checkStatus
// en caso de que sea la unica se mantiene
//Si el resultado es que

//$(".pic #n-0").toggleClass("active");
$(".pic active").removeAttr("id","n-0");
}
function checkStatus()  {
  // comprueba que la carta:
  // o sea la única activa
  //o exista otra y lanza la comparativa
}
function compareCard () {
  // comprueba que las cartas:
  // Sean iguales
  //En caso negativo devuelve falso
  //si positivo deja en fixed a las cartas
}

//metodo Suffle
function shuffleCard(cards) {
  //console.log(Cards);
  var suffledCards=_.shuffle(cards);
  setCards(suffledCards);
//  console.log(suffledCards);
}
function setCards(suffledCards){
 _.forEach(suffledCards, function(value,key){
   console.log(value,key);
   var idTemp=key.toString();
   idTemp="\'#n-"+idTemp+"\'";
   var urlTemp=suffledCards[key].img;
  //console.log(suffledCards[key].name);
  //console.log(suffledCards[key].img);
  console.log(idTemp);
  reverse();
  //$("#n-0").css("background-image","url(./img/superman.jpg)");//FUNCIONA
 //$('\"#n-'+idTemp+'\"').css("background-image",'url('+urlTemp+')');//No FUNCIONA
//$(idTemp).css("background-image",'url('+urlTemp+')');
 });

}
//metodo Select Card
function selectCard(){
  //Tiene que marcar la carta
  //llamar a reverse
}

//metodo Win
function finished() {
}

//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
var originalClass="pic";
var turnClass="back";
shuffleCard(Cards);
$(".pic").on("click",function(){
  $("active").toggle();
});

});
