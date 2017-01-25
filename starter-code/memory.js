//******************************************************************
// Game Logic
//******************************************************************


var heroesList= ["aquaman","batman","captain-america",
"fantastic-four","flash","green-arrow",
"green-lantern","ironman","spiderman",
"superman","the-avengers","thor"];


//we double the list by concatenating it to itself
var doubleHeroesList = heroesList.concat(heroesList);
//we shuffle the array with lodash
var shuffledList=_.shuffle(doubleHeroesList);


//this is a Card constructor, each card contains the name of the heroes and the path to its image
function CreateCards(heroes){
  this.heroeName= heroes;
  this.path= "img/"+heroes+".jpg";
}

//we iterate through the list with the constructor and store the results in a variable
var heroesDatas = shuffledList.map(function(i){
  return new CreateCards(i);});


// Now we create a function that iterates through the object

function getHtmlCards(collection) {
  //iteramos por el array de objetos
  for (i=0; i<collection.length; i++){
    var quote= "\'";
    var path = quote+collection[i].path+quote ;
    var name = quote+collection[i].heroeName+quote;
    var pic = quote+"pic"+quote;
    $('.container').append("<div identity="+name+" class="+pic+">" +'<img src='+ path + "></div>");
  //console.log('<img src=\"'+collection[i].path+'\">');
    //$('body').append("<a>Hello</a>");
}
}











//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
      //$('body').append('<img src=\"'+heroesDatas[3].path+'\">');
      getHtmlCards(heroesDatas);
        $('img').hide();


  //  $('div').click(function(){
    //  $(this).children('img').toggle();
    //});
var className="";
var upCard = 0;
var heroName = "";
$('div').click(function(){

  if (upCard<2){
    upCard ++;
  $(this).children('img').toggle();
  var heroName = $(this).attr('identity');
  if (heroName === className){
    console.log("Same!");
    $('[identity="' + heroName + '"]').hide();
    heroName="";
  }
  else{
    className=heroName;
    console.log("not the same!");
  } }
  else {
    $('img').hide();
    upCard = 0;
  }

  });


});
