var MemoryGame = function() {
  this.cards = [
        { name: "aquaman",         img: "aquaman.jpg" },
        { name: "batman",          img: "batman.jpg" },
        { name: "captain america", img: "captain-america.jpg" },
        { name: "fantastic four",  img: "fantastic-four.jpg" },
        { name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
        { name: "green lantern",   img: "green-lantern.jpg" },
        { name: "ironman",         img: "ironman.jpg" },
        { name: "spiderman",       img: "spiderman.jpg" },
        { name: "superman",        img: "superman.jpg" },
        { name: "the avengers",    img: "the-avengers.jpg" },
        { name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
        { name: "batman",          img: "batman.jpg" },
        { name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
        { name: "flash",           img: "flash.jpg" },
        { name: "green arrow",     img: "green-arrow.jpg" },
        { name: "green lantern",   img: "green-lantern.jpg" },
        { name: "ironman",         img: "ironman.jpg" },
        { name: "spiderman",       img: "spiderman.jpg" },
        { name: "superman",        img: "superman.jpg" },
        { name: "the avengers",    img: "the-avengers.jpg" },
        { name: "thor",            img: "thor.jpg" },
    ];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
MemoryGame.prototype.shuffleMg = function(){
    _.shuffle(this.cards);
};
MemoryGame.prototype.selectCard = function(card){
    var cards = this.selectedCards;
    cards.push(card);
    if (cards.length() % 2 === 0) {
        this.pairsClicked += 1;
        if (cards[cards.length() - 2].name === cards[cards.length() - 1].name) {
            this.correctPairs += 1;
        } else {
            cards.splice(cards.length() - 2, 2);
        }
    }
};
MemoryGame.prototype.getCard = function(position){
    return this.cards[position];
};
