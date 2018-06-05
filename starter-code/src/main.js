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
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    // html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class= "card card_' + pic.name + '" id="card_' + pic.name + '">';
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
  $('.back').on('click', function (e) {
    addClassSelected(e);
    addPickedCard(e, memoryGame);
    // console.log(memoryGame.pickedCards);
    if(memoryGame.pickedCards.length === 2)
    {
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]))
      {
        addClassGuessed(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
        if(memoryGame.finished()){
          alert("you won!!");
        }
      }
      else
      {
        var timer = setTimeout(function(){
          memoryGame.pickedCards = [];
          removeClassSelected();
        }, 300);
      }
      memoryGame.pickedCards = [];

    }
    updateScore(memoryGame);
  });
});

function updateScore(game)
{
  $('#pairs_clicked').text(game.pairsClicked.toString());
  $('#pairs_guessed').text(game.pairsGuessed.toString());
}
function addClassGuessed(card1, card2)
{
  document.getElementsByClassName("card_"+card1.name)[0].classList.add('guessed');
  document.getElementsByClassName("card_"+card2.name)[1].classList.add('guessed');

}
function addClassSelected(e)
{
  if (!e.target.parentElement.classList.contains('selected')) e.target.parentElement.classList.add('selected');
}
function removeClassSelected()
{
  var cards = document.getElementsByClassName('card');
  for(var i=0; i<cards.length; i++)
  {
    cards[i].classList.remove('selected');
  }
}
function addPickedCard(e, game)
{
  var nameValue = e.target.parentElement.getAttribute('id').substring("card_".length);
  var imageValue = e.target.getAttribute('name').substring("card_".length);
  game.pickedCards.push({name: nameValue, img: imageValue});
}