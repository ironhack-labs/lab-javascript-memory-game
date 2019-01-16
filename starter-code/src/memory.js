class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.indexesClicked = [];
    this.pickedCards = [];
  }

  shuffleCards() { }

  checkIfPair(firstCard, secondCard) { }

  isFinished() { }

  render() {
    console.log("render");

    var html = '';

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i]

      html += '<div class="card" data-index="' + i + '">';
      if (card.isTurned)
        html += '  <img src="img/' + card.img + '">';
      html += '</div>';
    }

    $('#memory_board').html(html);

    var that = this;

    $('.card').click(function () {
      if (that.indexesClicked.length < 2) {
        var index = $(this).data('index')
        that.cards[index].isTurned = true;

        that.indexesClicked.push(index)

        if (that.indexesClicked.length === 2) {
          if (that.cards[that.indexesClicked[0]].name === that.cards[that.indexesClicked[1]].name) {
            that.indexesClicked = []
          }
          else {
            setTimeout(function () {
              that.cards[that.indexesClicked[0]].isTurned = false;
              that.cards[that.indexesClicked[1]].isTurned = false;
              that.indexesClicked = []
              that.render()
            }, 1000)
          }
        }
        that.render();
      }
    });
  }
}