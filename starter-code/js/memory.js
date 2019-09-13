class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.initiate = this.initiate.bind(this)
    this.initiate()
  }

  shuffleCards(arrayOfCards) {
    let ctr = arrayOfCards.length;
    let temp;
    let index;

    while (ctr > 0) {
      // Pick a random index
    index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
    ctr--;
      // And swap the last element with it
    temp = arrayOfCards[ctr];
    arrayOfCards[ctr] = arrayOfCards[index];
    arrayOfCards[index] = temp;
    }
    this.cards = arrayOfCards;
    return arrayOfCards;
  }

  selectClickedCards(card){
    this.pickedCards.push(card);
    console.log(card)
  }

  checkIfPair() { 

    let memoryGame = this
    
    if(this.pickedCards.length === 2) {
      this.pairsClicked++;
      //console.log(this);
      if(this.pickedCards[0] !== this.pickedCards[1] && this.pickedCards[0].dataset.cardName === this.pickedCards[1].dataset.cardName) {
        this.pairsGuessed++;        
      } 
      else {
        let clickedCards = this.pickedCards
        setTimeout(function(){
          $(clickedCards[0]).find(".back, .front").toggleClass("back front")
          $(clickedCards[1]).find(".back, .front").toggleClass("back front")
        },1000)
      }
      this.pickedCards = [];
    } else if(this.pairsGuessed === 12){
      memoryGame.isFinished();
    }

    this.drawScore()
  }

  initiate() {
    var memoryGame = this;
    $(window).on("load", function(event){

      memoryGame.resetGame();

      memoryGame.shuffleCards(memoryGame.cards);

        let html = '';
        memoryGame.cards.forEach(pic => {
          html += `<div class="card" data-card-name="${pic.name}">`;
          html += `<div class="back" name="${pic.img}"></div>`;
          html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
          html += `</div>`;
        }
        );

        document.querySelector('#memory_board').innerHTML = html; //doesn't work with jquery, so used javascript selector
        document.querySelectorAll('.card').forEach( card => { //doesn't work with jquery, so used javascript selector
          card.onclick = function(e) {
            
            $(this).find(".front, .back").toggleClass("front back")
           
            memoryGame.selectClickedCards(this);
            console.log(this);
            memoryGame.checkIfPair()
          };
        });
    })
  }

  drawScore() {
    $("#pairs_clicked").text(`${this.pairsClicked}`);
    $("#pairs_guessed").text(`${this.pairsGuessed}`);
  }

  resetGame(){
    let memoryGame = this
    $("#reset").click(function(){
      memoryGame.isFinished();
    })
  }

  isFinished() {    
      location.reload()
  }
}