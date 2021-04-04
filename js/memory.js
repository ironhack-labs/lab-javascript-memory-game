class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards.length === 0) return undefined;
    console.log(this.cards);
    
    const shuffledCards = this.cards.slice();
    for(let i = 0; i < shuffledCards.length - 1; i++) { 
      let tempCard = shuffledCards[i];
      let randomIndex = Math.floor(Math.random()* (i+1));
      console.log(randomIndex)
      shuffledCards[i] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = tempCard;
      // How this works (for me to understand):
      //  e.g. For the first iteration
      // 1. You take first card out of cards and put it in a temp var.
      // 2. You select a random card in the array (cards[randomIndex]) and you put it into the spot where you took the first card from (cards[i])
      // 3. Then you put the first card you took out (now in temp) and put it where the other one was - a random place in array.
      // (Taken from Laurens Holst post on stackoverflow -https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    }
    console.log(shuffledCards);

    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    console.log('checing cards')
    console.log(card1.getAttribute("data-card-name"))
    console.log(card2)
    this.pairsClicked++;
    if (card1.getAttribute("data-card-name") == card2.getAttribute("data-card-name")) {
      this.pairsGuessed++;
      return true;
    }
    console.log('not the same')
    return false;
  }
  isFinished() {
    if (this.pairsGuessed < this.cards.length / 2) return false;
    else {
      alert("You Won!");
    return true;
    }
  }

  turnCardsFaceDown() {
    document.querySelectorAll(".card").forEach(card => {
      if (!card.classList.contains("blocked")) {
        console.log('not blocked');
        card.classList.remove("turned");
      }
    });
  }

  addBlockedClass() {
    console.log('match');
    console.log(memoryGame.pickedCards)
    for (let matchingCard of memoryGame.pickedCards) {
  
      matchingCard.classList.add("blocked");
    };
  }

  turnCardsOver(card) {
    card.classList.toggle("turned");
    memoryGame.pickedCards.push(card);
    console.log(`Card clicked: ${card.classList}`);
  }

  updateScores() {
    document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked;
    document.querySelector("#pairs-guessed").innerText = memoryGame.pairsGuessed;
  }
}