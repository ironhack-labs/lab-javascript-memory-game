class MemoryGame {
  constructor(card){
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.cards = cards;
  }
  shuffleCards() {

    // Pero lo he sacado yo, con mis santos huevos colganderos

    var numCards = this.cards.length;
    var arrRandom = [];
    var fisher = [];
    var salida = [];
    //console.log(this.cards);
    for(var i=0; i < numCards; i++){
      fisher.push(i); 
    } 
    for(i = 0; i < numCards; i++){
      var random = Math.floor(Math.random()*fisher.length);
      arrRandom.push(fisher[random]);
      fisher.splice(random,1);
    }
    //console.log(arrRandom);
    for (i = 0; i < numCards; i++){
      salida.push(cards[arrRandom[i]]);
    }
    this.cards = salida;
    //console.log(salida);
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 !== card2) return false
    else{
      this.pairsGuessed++ 
      return true;
    }
  }
  isFinished() {
    if(this.pairsGuessed == 12) return true;
    else return false;
  }
}