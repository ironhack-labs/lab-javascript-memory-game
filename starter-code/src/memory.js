class MemoryGame {
  constructor(cards){
    this.cards = cards; // 24
    // the length of this arr is 2, and contains 2 cards we will be comparing
    this.pickedCards = [];
    // the goal is to get to 12 guessed pairs
    this.pairsGuessed = 0;
    // this number updates every 2 clicks
    this.pairsClicked = 0;
    this.shuffleCards(cards);
  }

  shuffleCards(someArr) {
    let theLength = someArr.length;
    while (theLength > 0){
      // get the random number from 0 to the length of the array
      let index = Math.floor(Math.random() * theLength);
      theLength --;
      // create a temp var that will get the value of the last el in the arr
      let tempVar = someArr[theLength];
      // fill up the last el with the random array elem
      someArr[theLength] = someArr[index];
      // fill up the empty space where random element was with the temp var
      someArr[index] = tempVar;
    }
    return someArr;
  }
  checkIfPair(card1, card2) {
    // console.log(card1, card2);
    this.pairsClicked ++;
    document.getElementById("pairs_clicked").innerHTML = this.pairsClicked;

    if(card1 === card2){
      this.pairsGuessed++;
      document.getElementById("pairs_guessed").innerHTML = this.pairsGuessed;
      let blockedForReal = [...document.getElementsByClassName("just-clicked")];
      blockedForReal.forEach(el => {
        el.classList.add("blocked");
        el.classList.remove("just-clicked");
      });

    } else {
      setTimeout(() => {
        // turn the cards back to blue background
        let arrOfClickedEl = [...document.getElementsByClassName("just-clicked back blocked")];
        console.log(arrOfClickedEl);
        arrOfClickedEl.forEach(el => {
          el.style.background = "#456783";
          el.classList.remove("just-clicked");
          el.classList.remove("blocked");
        });
      }, 1000);
    }

    this.pickedCards = [];
    this.isFinished();
  }
  isFinished() {
    if(this.pairsGuessed === 2){
      let h1 = document.createElement("h1");
      h1.innerHTML = "YOU WON!!!";
      h1.style.color = "pink";
      document.getElementById("memory_board").appendChild(h1);
    }
  }
}