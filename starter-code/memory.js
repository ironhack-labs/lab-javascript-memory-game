/*====
Code is a bit of a mess, but it works.
====*/

//******************************************************************
// Game Logic
//******************************************************************

class MemoryGame {

  constructor () {

    this.path = 'file:///home/javi/Ironhack/code/labs/lab-javascript-memory-game/starter-code/img/';
    this.riddlerPath = this.path + 'riddler.jpg';
    this.won = false;
    this.prevImg = null;
    this.prevCoor = null;
    this.imgNames = ['aquaman.jpg',
    'batman.jpg',
    'captain-america.jpg',
    'fantastic-four.jpg',
    'flash.jpg',
    'green-arrow.jpg',
    'green-lantern.jpg',
    'ironman.jpg',
    'spiderman.jpg',
    'superman.jpg',
    'the-avengers.jpg',
    'thor.jpg'];
    this.matchedPairs = 0;
    this.possibleMatches = this.imgNames.length;
    this.imgResults = {};
    this.pairs = makePairs(this);

    function makePairs(game) {

      let coors = [];
      let rowNum = $('.row').length + 1;
      let colNum = ($('.col-xs-2').length / $('.row').length) + 1;
      for (let row = 1; row < rowNum; row++) {
        for (let col = 1; col < colNum; col++) {
          coors.push(row + '-' + col);
        }
      }

      let pairs = {};
      let imgName = '';
      let possibleCoors = coors.slice(0);
      let firstCoor, secondCoor;
      for (var i = 0; i < coors.length / 2; i++) {

        firstCoor  = _.sample(possibleCoors);
        secondCoor = _.sample(possibleCoors);

        while(firstCoor === secondCoor) {
          firstCoor  = _.sample(possibleCoors);
          secondCoor = _.sample(possibleCoors);
        }

        possibleCoors.splice(possibleCoors.indexOf(firstCoor), 1);
        possibleCoors.splice(possibleCoors.indexOf(secondCoor), 1);

        imgName = _.sample(game.imgNames);
        game.imgNames.splice(game.imgNames.indexOf(imgName), 1);
        game.imgResults[firstCoor] = game.path + imgName;
        game.imgResults[secondCoor] = game.path + imgName;

        pairs[firstCoor] = secondCoor;
        pairs[secondCoor] = firstCoor;

      }

      return pairs;
    }
  }


}




//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){

  let game = new MemoryGame();

  $('img').click(function checkMatch() {

    let img = $(this);
    if (img.prop('src') === game.riddlerPath) {

      let coor = img.prop('alt');

      if (game.prevCoor === null) { //if first riddler selection
        console.log('one');
        game.prevCoor = coor;
        game.prevImg = img;
        img.prop('src', game.imgResults[coor]);
      }
      else if (coor === game.pairs[game.prevCoor]) { //if match
        console.log('two');
        img.prop('src', game.imgResults[coor]);

        game.prevCoor = null;
        game.matchedPairs += 1;
      }
      else { //if not a match
        console.log('three');
        img.prop('src', game.imgResults[coor]);
        setTimeout(function () {
          img.prop('src', game.riddlerPath);
          game.prevImg.prop('src', game.riddlerPath);
        },
        200);

        game.prevCoor = null;
      }

      if (game.matchedPairs === game.possibleMatches) {
        $('img').prop('src', game.riddlerPath);
      }

    }
  });


});
