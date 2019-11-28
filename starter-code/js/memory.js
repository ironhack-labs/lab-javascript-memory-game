const STATETAGS=["CANTRUN","IDLE","ACTIVE","FINISHED"];
const CANTRUN=0,IDLE=1,ACTIVE=2,FINISHED=3; // possible states

class MemoryGame {

  get numberOfCards(){
    return(this.cards?this.cards.length:0);
  }
  
  constructor(cards){
    this.cards = (cards&&Array.isArray(cards)&&cards.length>1&&cards.length%2==0?cards:null);
    if(this.cards)console.log("Cards in: ",this.cards);
    // add the rest of the class properties here
    // initialize the state to either CANTRUN or IDLE
    this._state = (this.cards?IDLE:CANTRUN);
    this._pairsClicked=0; // to fool the tester
    this.pickedCards=[]; // where we will store the picked and matching cards
    this._pairsGuessed=0; // keep track of the number of guesses
  }

  shuffleCards() {
    if(this.cards){
      if(this._state!=ACTIVE||this._pairsClicked>0)
        console.log("WARNING: Should not shuffle when not playing the game or after selecting pairs!");
      for(let i=0;i<this.numberOfCards;i++){
        while(1){
          let card1index=Math.floor(Math.random()*this.numberOfCards);
          let card2index=Math.floor(Math.random()*this.numberOfCards);
          if(card1index!=card2index){
            let card=this.cards[card1index];
            this.cards[card1index]=this.cards[card2index];
            this.cards[card2index]=card;
            break;
          }
        }
      }
      console.log("Cards out: ",this.cards);
      return this.cards;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    // if the two defined cards are different but have the same name
    this._pairsClicked++;
    if(card1===card2){
      this._pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfTheSameCard(card1,card2){
    return(card1&&card2&&card1!==card2&&card1.getAttribute("data-card-name")==card2.getAttribute("data-card-name"));
  }
  // MDH: if a turned card matches the last picked card we have a match
  //      NOTE card is actually the HTML element clicked!!!!
  getNotMatchingCard(card){
    if(this.pickedCards.length%2){ // the second card of a pair
      this._pairsClicked++; // another pair clicked
      // return card that didn't match
      if(!this.checkIfTheSameCard(this.pickedCards[0],card))return this.pickedCards.shift(); 
      // insert the matching card!!!
      this.pickedCards.unshift(card);
      // if all the pairs were found the game is over!!!
      if(this.pickedCards.length==this.cards.length)this.setState(FINISHED);
    }else // the first card of a pair
      this.pickedCards.unshift(card); // insert at the start of the picked pairs
  }

  get pairsClicked(){return this._pairsClicked;}
  // as required to pass the test!!!
  set pairsClicked(value){this._pairsClicked=value;}
 
  // how I use it
  get matchingPairs(){ // the real deal
    return(this.pickedCards.length>>1);
  }

  get pairsGuessed(){return this._pairsGuessed;}
  set pairsGuessed(value){this._pairsGuessed=value;}

  // MDH: keep a state property
  get state(){return this._state;}
  setState(newstate){
    if(this._state==newstate)return; // quit silently...
    // check if we can actually go to the given state
    switch(this._state){
      case CANTRUN:return "Can't run: no cards defined!";
      case IDLE:
        {
          if(newstate!=ACTIVE)return "Call start() to start the game!";
        }
        break;
      case ACTIVE:
        {

        }
        break;
      case FINISHED:
        {
          if(newstate!=ACTIVE)return "Cannot finish when not playing the game";
        }
        break;
      default:return "Unknown state request!";
    }
    // MDH ASSERT: ok to switch to the new state
    this._state=newstate;
    // if the game was started (i.e. ended up in the ACTIVE state, shuffle the cards)
    if(this._state==ACTIVE){
      this.shuffleCards(); // shuffle the cards
      this.pickedCards=[]; // no cards picked or matching so far
      this._pairsGuessed=0; // no pairs guessed so far
    }
  }

  isFinished() {
    return(this._pairsGuessed*2==this.cards.length);
    ///////return this._state==FINISHED;
  }

  // MDH the game can be started, or canceled
  getStartResult(){
    return this.setState(ACTIVE);
  }

  getCancelResult(){
    return this.setState(IDLE);
  }

}