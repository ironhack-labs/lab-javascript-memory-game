/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('MemoryGame constructor', function () {
  beforeEach(function () {
    memoryGame = new MemoryGame([]);
  });

  it('Create MemoryGame object', function () {
    expect(typeof MemoryGame).toBe('function');
  });

  it('MemoryGame should receive `cards` as a parameter and create it own `cards` property', function () {
    expect(memoryGame.cards).toBeDefined();
  });

  it('MemoryGame should have a pickedCards property', function () {
    expect(memoryGame.pickedCards).toBeDefined();
  });

  it('pickedCards property should be an array', function () {
    expect(typeof memoryGame.pickedCards).toBe('object');
  });

  it('MemoryGame should have a pairsClicked property', function () {
    expect(memoryGame.pairsClicked).toBeDefined();
  });

  it('pairsClicked property should be a number', function () {
    expect(typeof memoryGame.pairsClicked).toBe('number');
  });

  it('MemoryGame should have a pairsGuessed property', function () {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });

  it('pairsGuessed property should be a number', function () {
    expect(typeof memoryGame.pairsGuessed).toBe('number');
  });
});

describe('shuffleCards method', function () {
  beforeEach(function () {
    var cardsArray = [
      { name: 'aquaman',         img: 'aquaman.jpg' },
      { name: 'batman',          img: 'batman.jpg' },
      { name: 'captain america', img: 'captain-america.jpg' },
      { name: 'fantastic four',  img: 'fantastic-four.jpg' },
      { name: 'flash',           img: 'flash.jpg' },
      { name: 'green arrow',     img: 'green-arrow.jpg' },
      { name: 'green lantern',   img: 'green-lantern.jpg' },
      { name: 'ironman',         img: 'ironman.jpg' },
      { name: 'aquaman',         img: 'aquaman.jpg' },
      { name: 'batman',          img: 'batman.jpg' },
      { name: 'captain america', img: 'captain-america.jpg' },
      { name: 'fantastic four',  img: 'fantastic-four.jpg' },
      { name: 'flash',           img: 'flash.jpg' },
      { name: 'green arrow',     img: 'green-arrow.jpg' },
      { name: 'green lantern',   img: 'green-lantern.jpg' },
      { name: 'ironman',         img: 'ironman.jpg' },
    ]
    memoryGame = new MemoryGame(cardsArray);
  });

  it('Should be declare', function () {
    expect(typeof memoryGame.shuffleCards).toBe('function');
  });

  it('Should return undefined', function () {
    expect(typeof memoryGame.shuffleCards()).toBe('undefined');
  });

  it('Should mixed the cards property', function () {
    var formerCardsString = memoryGame.cards.map(function(card) { return card.name }).toString();
    memoryGame.shuffleCards();
    var newCardsString = memoryGame.cards.map(function(card) { return card.name }).toString();
    expect(formerCardsString === newCardsString).toBe(false);
  });
});

describe('checkIfPair method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.checkIfPair).toBe('function');
  });

  it('It should add 1 to `pairsClicked` when we call it', function () {
    memoryGame.checkIfPair('batman', 'ironman');
    expect(memoryGame.pairsClicked).toBe(1);
  });

  it('It should return true when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair('ironman','ironman')).toBe(true);
  });

  it('It should return false when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair('ironman','flash')).toBe(false);
  });

  it('It should add 1 to pairsGuessed if they are the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman','ironman')
    expect(memoryGame.pairsGuessed).toBe(1);
  });

  it('It should not add anything to pairsGuessed if the not the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman','green lantern')
    expect(memoryGame.pairsGuessed).toBe(0);
  });
});

describe('isFinished method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.isFinished).toBe('function');
  });

  it('It should return false at the beggining of the game', function () {
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('It should return false if there still some pairs to be guessed', function () {
    memoryGame.pairsGuessed = 4;
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('It should return true if all pairs were guessed', function () {
    memoryGame.pairsGuessed = 8;
    expect(memoryGame.isFinished()).toBe(true);
  });

});

