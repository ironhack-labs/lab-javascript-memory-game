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
  
  cards = shuffleCard(cards);

  var memoryGame = new MemoryGame(cards);
  // console.log(cards); //Question : why the heck is this running twice?
  // console.log(typeof memoryGame);
  // console.log(memoryGame);
  // console.log(typeof memoryGame.shuffleCard);
  // console.log(memoryGame.shuffleCard);
  // console.log(typeof memoryGame.shuffleCard(cards));
  // console.log(memoryGame.shuffleCard(cards));
  // console.log("Go");
  // console.log(memoryGame.cards);
  var html = '';
  
  memoryGame.cards.forEach(function (pic, index) {
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


  //Hide all the front classes
  $(document).find(".front").hide();


  

  // Bind the click event of each element to a function

$('.back').on('click', function (element) {
  //Display the card on the first click and on the second click
  $(this).hide();
  console.log($(this).attr("name"));
  pickedCards.push($(this).attr("name"));
  $(this).parent().find(".front").show();
  $(this).parent().find(".front").addClass("clicked"); // Add a class to be able to find them back
  $(this).parent().find(".back").addClass("clicked"); // Add a class to be able to find them back
  console.log("pickedCards.length " + pickedCards.length);


  // memory.checkIfPair

  if(pickedCards.length === 2) {
    console.log(pickedCards[0]);
    console.log(pickedCards[1]);
      
    if (memoryGame.checkIfPair(pickedCards[0], pickedCards[1]) === false) {
      setTimeout(function() {
      $(document).find(".front.clicked").hide();
      $(document).find(".back.clicked").show();
      $(document).find(".clicked").removeClass("clicked");
    },500)
    } else {
      $(document).find(".clicked").removeClass("clicked");
    }

    // pairsClicked += 1;
    pickedCards=[];
    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $("#pairs_guessed").html(memoryGame.pairsGuessed);
  }

console.log(memoryGame.finished());
memoryGame.finished();

if (memoryGame.finished() === true ) {
  $("#pairs_guessed").css("color","green");
}
   
});






});

//Add an end!
//Don't forget the shuffle!!!

