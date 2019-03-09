var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];


window.addEventListener('load', function () {


  var memoryGame = new MemoryGame(cards);

  memoryGame.shuffleCards();

  var html = '';
  var count = 0;

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back"  id="' + count++ + '" name="' + pic.img + '" ></div>';
    html += '  <div class="front" id="' + count++ + '" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  var classname = document.getElementsByClassName("back");
  var classname2 = document.getElementsByClassName("front");


  var arrayCards = [];
  var refCards = [];

  function backCards(){

    setTimeout(function () {

      document.getElementById(refCards[0][0]).className = "back";
      document.getElementById(refCards[0][1]).className = "fornt";

      document.getElementById(refCards[1][0]).className = "back";
      document.getElementById(refCards[1][1]).className = "fornt";

      for (var i = 0; i < 2; i++) {

        refCards.shift(i);

      }


      for (var i = memoryGame.pickedCards.length; i > 0; i--) {

        memoryGame.pickedCards.pop();

      }

    }, 2000)

  }

  var myClassnamefront = function () {

    var attribute = this.getAttribute("name");
    var classT = this.getAttribute("class");

    var idCardFront = parseInt(this.id)
    var idCardBack = parseInt(this.id) + 1


    document.getElementById(idCardFront).className = "front";
    document.getElementById(idCardBack).className = "back";

    refCards.push([idCardFront, idCardBack])
    memoryGame.pickedCards.push(attribute)

    


    if (memoryGame.pickedCards.length == 2 || refCards.length == 2 )  {

      if(refCards[0][0] == refCards[1][0]){

         backCards();
         return false;
      }

      const result = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])

      if (result === false) {

       backCards()

      } else if (result === true) {

        var disable = refCards[0][0] + 1
        var disable2 = refCards[1][0] + 1

        document.getElementById(disable).style.pointerEvents = "none";

        document.getElementById(disable2).style.pointerEvents = "none";

        for (var i = 0; i < 2; i++) {

          refCards.shift(i);

        }

        for (var i = memoryGame.pickedCards.length; i > 0; i--) {

          memoryGame.pickedCards.pop();

        }



      }

    } else if (memoryGame.pickedCards.length == 3) {

      const result = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])

      if (result === false) {

        setTimeout(function () {

          refCards.slice(2, refCards.length);

          for (var i = memoryGame.pickedCards.length; i > 0; i--) {

            memoryGame.pickedCards.pop();

          }

        }, 2000)
      }

    }
  };

  var myClassnameback = function () {

    var attribute = this.getAttribute("name");
    var classT = this.getAttribute("class");
    var idCardFront = parseInt(this.id) - 1
    var idCardBack = parseInt(this.id)

    document.getElementById(idCardFront).className = "back";
    document.getElementById(idCardBack).className = "front";

  };


  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myClassnamefront, false);
  }


  for (var i = 0; i < classname2.length; i++) {
    classname2[i].addEventListener('click', myClassnameback, false);
  }



});
