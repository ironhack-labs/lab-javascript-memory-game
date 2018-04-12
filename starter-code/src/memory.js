var MemoryGame = function (cards) {
    this.cards = cards;
    this.pair = [];

    this.shuffleCard = function (cardsArr) {
        this.cards = _.shuffle(cardsArr);
    };

    this.checkIfPair = function () {
        return (this.pair[0] === this.pair[1]);
    };

    this.finished = function () {
        if ($('#pairs_guessed').text() === "12")
            alert("Congrats!!!!");
    };

};


