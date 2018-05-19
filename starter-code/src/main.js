var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  
  let arrayAux=[];
  let cardClicked = 0;

  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);

  memoryGame.cards.forEach(function (pic, index) {
    

    if(!arrayAux.includes(pic.name))
    {
      html += '<div class= "card" id="card_' + pic.name + '">';
      html += '<div class="back"';
      html += '    name="'       + pic.name +  '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/' + pic.img + ') no-repeat;">';
      html += '</div>'
      html += '</div>';
    }
    else{
      html += '<div class= "card" id="pair_' + pic.name +  '">';
      html += '<div class="back"';
      html += '    name="'       + pic.name +  '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/' + pic.img + ') no-repeat;">';
      html += '</div>';
      html += '</div>';
    }

    arrayAux.push(pic.name);
  });

  let twoClicked = [];

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.card').on('click', function () {

    cardClicked++;
    let cardSelected = "#" + $(this).attr("id");
    $(cardSelected).addClass("blocked");    

    let back = "#" + $(this).attr("id") + " .back";
    let front = "#" + $(this).attr("id") + " .front";
    $(back).css("display","none");
    $(front).css("display","block");
    
    twoClicked.push(cardSelected);

    if(cardClicked%2 == 0)
    {
      if(!memoryGame.checkIfPair(twoClicked[0].replace("card_","").replace("pair_",""),twoClicked[1].replace("card_","").replace("pair_","")))
      {
        let firstClickBack = twoClicked[0] + " .back";
        let firstClickFront = twoClicked[0] + " .front";

        var timeoutId = setTimeout(function () {
          $(back).css("display","block");
          $(front).css("display","none");
          $(firstClickBack).css("display","block");
          $(firstClickFront).css("display","none");
        }, 500);

        let firstCardSelected = twoClicked[0] 

        $(cardSelected).removeClass("blocked");
        $(firstCardSelected).removeClass("blocked");
      }

      twoClicked=[];
    }

    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $("#pairs_guessed").html(memoryGame.pairsGuessed);

  });
});


