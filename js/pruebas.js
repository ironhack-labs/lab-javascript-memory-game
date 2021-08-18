
shuffleCards() {
    for(let i = this.cards.length -1; i>0; i--){
      let k = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[k]
      this.cards[k] = temp; 
    }}