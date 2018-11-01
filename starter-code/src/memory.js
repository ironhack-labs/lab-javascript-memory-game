// class MemoryGame {
//   constructor(cards) {
//     console.log(this);
//     this.cards = cards;
//     this.pickedCards = [];
//     this.pairsClicked = 0;
//     this.pairsGuessed = 0;
    
    
//   }

//   class MemoryGame{
//     constructor(theArg){
//       this.cards = theArg;
//       this.shuffleCards()
//     }
  

//   shuffleCards(){
//     let m = this.cards.length;
//     let t;
//     let i;

//     while (m){
//       i = Math.floor(Math.random() * m--);

//       t = this.cards[m];
//       this.cards[m] = this.cards[i];
//       this.cards[i] = t;
//     }
//     return array;
//   }

// }
  
  // choosingCards(card){
    
  //   this.pairsClicked += 1;
    
  //   $(card).toggleClass('show');
  //   $(card).siblings().toggleClass('show');
    
  //   let carName = $(card).attr('name')
  //   this.pickedCards.push(carName);
  //   console.log(this.pickedCards)
    
    
  // }
  
  // checkIfPair(){
  //   firstCard = this.pickedCards[0];
  //   secondCard = this.pickedCards[1];
    
  //   if(firstCard === secondCard){
  //     $("#pairs_guessed").text(guessCount+=1);
  //     this.pickedCards.splice(0, 2);
  //     console.log(this.pickedCards)
  //     console.log("right Combination")
  //     return true
  //   }  if(this.pickedCards.length > 1 && firstCard !== secondCard ) {
  //       this.pickedCards.splice(0, 2);
   
  //       $(firstCard).toggleClass("show");
  //       console.log("Wrong Combination");
  //       $("#pairs_clicked").text(clickCount++);
  //     return false
  //   }
  
  // }

    // $('#pairs_clicked')[0].innerHtml = this.pairsClicked;
    // $('#pairs_guessed')[0].innerHTML = this.pairsGuessed;

// }
  
class MemoryGame{
  constructor(theArg){
    this.cards = theArg;
    this.currentHand = [];
    this.attempts = 0;
    this.score = 0;

    // this.shuffle();
  }

  shuffle() {
    let m = this.cards.length; 
    let t;
    let i;
  
    // While there remain elements to shuffle…
    while (m > 0) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    } 
  }


      evaluatePair(){
        this.attempts++;
        if(this.currentHand[0].attr('name') === this.currentHand[1].attr('name')){
          this.score++;
          this.currentHand = [];
          this.checkToSeeIfIWon();
          $('.back').removeClass('blocked');
        }else {
          setTimeout(()=>{ 
            this.currentHand[0].show();
            this.currentHand[1].show();
            this.currentHand[0].siblings().removeClass('back');
            this.currentHand[1].siblings().removeClass('back');
            this.currentHand = [];
            $('.back').removeClass('blocked');
          },800)
        }
      }


      checkToSeeIfIWon(){
        if(this.score === 12){
          setTimeout(()=>{
            alert('yay, you wom!');
          },1)
        }
      }





} 

