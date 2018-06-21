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
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(cards);  //Shuffle the deck
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  //Card solutions
  console.log(memoryGame.cards);

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Find the click event of each element to a function
  $('.back').on('click', function () {
    var closedCard = $(this);
    // console.log(closedCard);
    closedCard.toggle();

    var openCard = $(this).next();
    // console.log(openCard);
    openCard.removeClass("front");
    openCard.addClass("back");

    //Identidad de la carta abierta
    var cardIdentityStr = closedCard.parent().attr('id');
    cardIdentityStr = cardIdentityStr.replace("card_","")
    // console.log(cardIdentityStr); 

    //Encontart el card object seleccionado
    var cardObject = returnObject(memoryGame.cards, cardIdentityStr);
    // console.log(cardObject);
    var parity = false;
    
    if(memoryGame.pickedCards.length===0){ //If only one card is chosen
      memoryGame.pickedCards.push(cardObject);
    }else{ //If we have the second card
      memoryGame.pickedCards.push(cardObject);
      parity = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      updateScreenCounter(memoryGame.pairsGuessed, memoryGame.pairsClicked);
      memoryGame.finished();  //Verifies if all pairs are found. If found, prints to screen Finished

      //Reset screen back to hidden
      if(parity === false){ 
        var firstCardNameId = '#card_' + memoryGame.pickedCards[0].name;
        console.log(firstCardNameId);
        var secondCardNameId = '#card_' + memoryGame.pickedCards[1].name;
        console.log(secondCardNameId);

        var interval = setInterval(function(){  
          console.log(firstCardNameId);
          console.log(secondCardNameId);

          /*NO PUDE HACER ESTA FUNCION*/
          hideCard(firstCardNameId);

          clearInterval(interval)
        }, 2000);
      }{
      }
      memoryGame.pickedCards = []
    }
  });
});


/*ESTA FUNCION NO FUNCIONA CORRECTAMENTE*/
function hideCard(idString){
    var firstDiv = $(idString).children(0);
    console.log(firstDiv.attr("name"));
    var secondDiv = firstDiv.next();
    console.log(secondDiv.attr("style"));
    //firstDiv.css("display", "block");  //First div is shown
    secondDiv.removeClass('back');
    secondDiv.addClass('front');
}


//Takes an array of objects compares vs name and retunrs the object where it finds it
function returnObject(arr, str){
  for(var i = 0; i<arr.length; i++){
    if(arr[i].name == str) return arr[i];
  }
  return false;
}
//Function to print to the sceren counter
function updateScreenCounter(guesses, clicks){
  $('#pairs_clicked').text(clicks);
  $('#pairs_guessed').text(guesses);
}


