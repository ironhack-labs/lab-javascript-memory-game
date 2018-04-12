var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var theGame = new MemoryGame(cards);
  theGame.shuffleCard(theGame.cards);
  var html = '';
  theGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });



  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
// $('.back').on('click', function (e) {
  

//   //$(this).toggleClass('back'); //this was my flip card stuff
//   //$(this).siblings().first().toggleClass('back'); //^^^^same
//   // $(".card").flip('toggle'); //testing
//   // console.log($(this).attr("name")); //this checks what you are clicking.
//   console.log(theGame.currentPair)
//   // $(this).off(e);

//   var nameOfImage = $(this).attr("name") 


  

//   theGame.currentPair.push(nameOfImage)

//   // thegame.currentPair[0]

//   console.log(theGame.currentPair[0])

//   // if background != nameofimage{

//   $(this).css('background',"url(img/" + nameOfImage + ")");

//   //if this is the first card, just chill
//   //else if this is the second card, compare the two. following code does this.


//   if(theGame.currentPair.length % 2 === 0){


//       theGame.checkIfPair(theGame.currentPair[0], theGame.currentPair[1]);


//   }
  

// });

$('.back').on('click', function () {
  //$('.back').remove('.back')
  if (!$(this).hasClass("just-clicked")&&!$(this).hasClass("blocked")){
  $(this).addClass("just-clicked");
  $(this).addClass("blocked");
  var nameOfImage = $(this).attr("name");
  // $(this).removeClass('back').addClass("front");
  // $(this).siblings().first().toggleClass("back");
  theGame.currentPair.push(nameOfImage);

  
  //console.log(thisGame.currentPair);
  $(this).css('background', 'url(img/' + nameOfImage + ')');
  if(theGame.currentPair.length  === 2){
    theGame.checkIfPair(theGame.currentPair[0], theGame.currentPair[1]);
    $(this).addClass("blocked");
  }
  
}

});
});


