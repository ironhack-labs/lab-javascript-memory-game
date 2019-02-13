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
  console.log(memoryGame)

  var html = '';

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function


  var card = document.querySelectorAll(".card")
  // var clicked = document.getElementById("pairs_clicked").textContent

  clicked = 1

  var pairs = document.getElementById("pairs_guessed").textContent

  pairs = parseInt(pairs)

  console.log(pairs)


  card.forEach(function(elm){

    elm.onclick = function (e) {

      elm.firstElementChild.classList.add('front')
      elm.firstElementChild.classList.remove('back')


      elm.lastChild.classList.add('back')
      elm.lastChild.classList.remove('front')

      console.log(elm)

    

      for(var i = 0; i < memoryGame.cards.length; i++) {

        if(memoryGame.pickedCards.indexOf(elm.getAttribute("data-card-name")) === -1 ) {

          memoryGame.pickedCards.push(elm.getAttribute("data-card-name"))


          memoryGame.checkIfPair(memoryGame.pickedCards[i -1], memoryGame.pickedCards[i])

          document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked

          console.log(memoryGame.pairsGuessed)

         

        } else {

          console.log(memoryGame.pairsGuessed)

          // memoryGame.pairsClicked ++

          // memoryGame.pairsGuessed ++
          
          // document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked

          // document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed




          // setInterval(function () {

          //   memoryGame.shuffleCards()

          // },3000)

        } 
  
    }

  }

})


})