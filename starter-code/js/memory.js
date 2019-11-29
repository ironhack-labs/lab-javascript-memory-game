class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        this.init = this.init.bind(this);
    }
    shuffleCards() {
        let len = this.cards.length;
        while (len > 0) {
            len--;
            let temp = this.cards[len];
            let randomIdx = Math.floor(Math.random() * len);
            this.cards[len] = this.cards[randomIdx];
            this.cards[randomIdx] = temp;
        }
    }

    checkIfPair(card1, card2) {
        this.pairsClicked += 1;
        if (card1 == card2) {
            this.pairsGuessed += 1;
            memoryGame.pickedCards = [];
            memoryGame.isFinished()
            return true;
        } else {
            setTimeout(() => {
                memoryGame.pickedCards[0].classList.toggle("turned");
                memoryGame.pickedCards[1].classList.toggle("turned");
                memoryGame.pickedCards = [];
            }, 700)
            return false;
        }
    }

    isFinished() {
        if (this.pairsGuessed == 12) {
            setTimeout(() => {
                alert("All pairs found! You Won! Click OK to play again");
                window.location.reload();
            }, 700);
            return true;

        } else {
            return false;
        }

    }

    init() {
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                var pickedCards = this.pickedCards;
                if (pickedCards.length < 2) {
                    card.classList.toggle("turned");
                    pickedCards.push(card);
                }
                if (pickedCards.length === 2) {
                    var card1Name = pickedCards[0].getAttribute("data-card-name");
                    var card2Name = pickedCards[1].getAttribute("data-card-name")
                    this.checkIfPair(card1Name, card2Name);
                    document.getElementById("pairs_clicked").innerHTML = String(memoryGame.pairsClicked);
                    document.getElementById("pairs_guessed").innerHTML = String(memoryGame.pairsGuessed);
                }
            });
        });
    }

}