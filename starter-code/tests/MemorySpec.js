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
    expect(MemoryGame.length).toBe(1);
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

  it('pairsClicked property should be an array', function () {
    expect(typeof memoryGame.pairsClicked).toBe('number');
  });

  it('MemoryGame should have a pairsClicked property', function () {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });

  it('pairsClicked property should be an array', function () {
    expect(typeof memoryGame.pairsGuessed).toBe('number');
  });
});

describe('shuffleCard method', function () {
  beforeEach(function () {
    var cardsArray = [{ name: 'aquaman',         img: 'aquaman.jpg' },
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
    expect(typeof memoryGame.shuffleCard).toBe('function');
  });

  it('Should return an array', function () {
    expect(typeof memoryGame.shuffleCard(memoryGame.cards)).toBe('object');
  });

  it('Should mixed the array and return a different one from the original', function () {
    var firstArray = memoryGame.shuffleCard([1,2,3,4,5,6,7,8,9])
    var secondArray = memoryGame.shuffleCard([1,2,3,4,5,6,7,8,9])
    expect(firstArray).not.toEqual(secondArray);
  });
});

describe('checkIfPair method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.checkIfPair).toBe('function');
  });

  it('It should add 1 to `pairsClicked` when we call it', function () {
    memoryGame.checkIfPair(1, 2);
    expect(memoryGame.pairsClicked).toBe(1);
  });

  it('It should return true when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair(2,2)).toBe(true);
  });

  it('It should return false when the comparing cards are the same', function () {
    expect(memoryGame.checkIfPair(2,3)).toBe(false);
  });

  it('It should add 1 to pairsGuessed if they are the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair(2,2)
    expect(memoryGame.pairsGuessed).toBe(1);
  });

  it('It should not add anything to pairsGuessed if the not the same card', function () {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair(2,4)
    expect(memoryGame.pairsGuessed).toBe(0);
  });
});

describe('finished method', function () {
  it('Should be declare', function () {
    expect(typeof memoryGame.finished).toBe('function');
  });

  it('It should return false at the beggining of the game', function () {
    let memoryGame = new MemoryGame([])
    expect(memoryGame.finished()).toBe(false);
  });

  it('It should return false if there still some pairs to be guessed', function () {
    memoryGame.pairsGuessed = 10;
    expect(memoryGame.finished()).toBe(false);
  });

  it('It should return true if all pairs were guessed', function () {
    memoryGame.pairsGuessed = 12;
    expect(memoryGame.finished()).toBe(true);
  });

});

