class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
		// add the rest of the class properties here
	}

	shuffleCards() {
		if (!this.cards) return undefined;
		// copia superficial
		// const cardsCopy = [...this.cards]
		// copia profunda ambas funcionarian
		const cardsCopy = JSON.parse(JSON.stringify(this.cards));
		var m = cardsCopy.length,
			t,
			i;
		// While there remain elements to shuffle…
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);
			// And swap it with the current element.
			t = cardsCopy[m];
			cardsCopy[m] = cardsCopy[i];
			cardsCopy[i] = t;
		}
		this.cards = cardsCopy;
	}
	// PARANOIA NUESTRA
	/*     if (!this.cards) return undefined;
    let cardCopy = JSON.parse(JSON.stringify(this.cards));
    let randomArray = cardCopy.sort(function compareRandom() {
      let randomNumber1 = Math.round((Math.random() * cardCopy.length));
      let randomNumber2 = Math.round((Math.random() * cardCopy.length));
      return randomNumber1 - randomNumber2;
    });
    console.log ("aqui1:" + randomArray[0].name)
    console.log ("aqui2:" + randomArray[1].name)
    console.log ("aqui3:" + randomArray[2].name)
    console.log ("aqui4:" + randomArray[3].name)
    console.log ("aqui5:" + randomArray[4].name)

    return randomArray;
  } */

	checkIfPair(card1, card2) {
		this.pairsClicked++;
		if (card1 === card2) {
			this.pairsGuessed++;
			return true;
		} else {
			return false;
		}
	}

	checkIfFinished() {
		return this.pairsGuessed === this.cards.length / 2;
	}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
