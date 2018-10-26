var CARDS = [
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

// waiting time when 2 cards are in the front before moving to the next action
var WAITING_TIME_MS = 1500;


class GameDomHandler{

  /**
   *
   * @param game: instance of MemoryGame
   * @param gameDivMapping : array of gameDivMapping as they appear on the dom
   */
  constructor(game){

    this.game = game;

    // array of objects with keys (div, card)
    // the 'div' key returns the dom element relative to a card
    // the 'card' element retuns the internal representation of a card as in the class MemoryGame
    // This is a way to keep always together the two objects : the div and the internal representation
    this.gameDivMapping = [];

    // array of cards currently returned on the dom
    this.cardsCurrentlyOnPlay = [];

  }

  /**
   * Renders the game on the DOM
   */
  renderGameOnDom(){
    // renders on the dom
    let html = '';
    this.game.cards.forEach(function (pic) {

      // create html
      html += '<div class="card" data-card-name="'+ pic.name +'">';
      html += '  <div class="back" name="'+ pic.img +'"></div>';
      html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      html += '</div>';
    });
    $('#memory_board').html(html);

    // fill in the array gameDivMapping
    var domCards =  document.querySelectorAll(".card");
    for (var i = 0; i < domCards.length; i++){
      this.gameDivMapping.push({
        "card": this.game.cards[i],
        "div" : domCards[i],
        "index": i
      })
    }
  }

  /**
   * Add event listenners when click on cards
   * @param e: event to handle
   */
  addOnClickListenners(){
    this.gameDivMapping.forEach(cardELement => {
      cardELement['div'].addEventListener(
        "click",
          e => this.onClickEventListenner(e, cardELement)
      );
    })
  }

  /**
   * Event listenner on one div
   * @param e: event to handle
   * @param cardElement: object witj keys 'div' and 'card'. This should be an element belonging to the array this.gameDivMapping
   */
  onClickEventListenner(e, cardElement){

    // Do nothing if two or more cards are returned
    if (this.cardsCurrentlyOnPlay.length < 2){

      // 0. do not do anything if one card is already returned, and we are trying to click it again
      if( this.cardsCurrentlyOnPlay.length === 1 &&
          this .cardsCurrentlyOnPlay[0].index === cardElement.index
      ){
        return
      }

      // 1. return card on the dom
      this.returnCardOnTheBoard(cardElement['div']);

      // 2. update the list of returned cards
      this.cardsCurrentlyOnPlay.push(cardElement);

      // 3. Only act if two cards are returned on the board, otherwise do nothing
      if( this.cardsCurrentlyOnPlay.length === 2 ){
        this.handleTwoCardsFront();
      }
    }
  }

  /**
   * What happens when two CARDS are on the front
   */
  handleTwoCardsFront(){

    // check if the returned cards are a pair
    // N.B : this also updates the properties this.game.pairsClicked and this.game.pairsGuessed
    var isPair =  this.game.checkIfPair(
      this.cardsCurrentlyOnPlay[0]["card"],
      this.cardsCurrentlyOnPlay[1]["card"]
    );

    // update the score on the dom
    $("#pairs_clicked").html(this.game.pairsClicked);
    $("#pairs_guessed").html(this.game.pairsGuessed);


    // if it is a pair, update state game

    if(isPair){
      this.handlePairFound();
    }
    else{
      // Time out is here to give to the player a reaction time to remember the cards
      setTimeout(()=>this.handlePairNotFound(), WAITING_TIME_MS);
    }
  }

  /**
   * What happens when a selected pair os the correct one ?
   */
  handlePairFound(){

    // 2. update the internal list of returned CARDS
    this.cardsCurrentlyOnPlay = [];

    if(this.game.isFinished()){
      console.log("GAME FINISHED !")
      //TODO: add here something that inform the user that :
      // - the game ended
      // - recap the score
      // - give option to replay
    }
  }

  /**
   * What happens when a selected pair os the wrong one ?
   */
  handlePairNotFound(){

    // 1. return back the two CARDS
    this.cardsCurrentlyOnPlay.forEach(
      cardElement => {
        this.returnCardOnTheBoard(cardElement["div"]);
      }
    );

    // 2. update the internal list of returned CARDS
    this.cardsCurrentlyOnPlay = [];
  }

  /**
   * Takes as an input a div card and return it on the board (dom manipulation)
   * @param div
   */
  returnCardOnTheBoard(div){
    var subDivs = div.querySelectorAll("div");
    subDivs.forEach( d => {
      d.classList.toggle("back");
      d.classList.toggle("front");
    })
  }
}

$(document).ready(function(){
  var memoryGame = new MemoryGame(CARDS);
  var gameDomHandler = new GameDomHandler(memoryGame);

  // render the game to the dom
  gameDomHandler.renderGameOnDom();

  // add event listenners on the CARDS
  gameDomHandler.addOnClickListenners();
});


