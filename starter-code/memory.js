/*====
I might have been going for some fancy points in this code, lol.
Totally not KISS.
====*/

//******************************************************************
// Game Logic
//******************************************************************

class MemoryGame {

  constructor () {

    this.won = false;
    this.matchedPairs = [];
    this.prevImg = null;
    this.prevCoordinate = null;
    this.pair = this.makePairs();
  }

  makePairs() {

    let coors = [];
    let rowNum = $('.row').length + 1;
    let colNum = ($('.col-sm-2').length / $('.row').length) + 1;
    for (let row = 1; row < rowNum; row++) {
      for (let col = 1; col < colNum; col++) {
        coors.push(row + '-' + col);
      }
    }

    let pairs = {};
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

      pairs[firstCoor] = secondCoor;
      pairs[secondCoor] = firstCoor;

    }

    return pairs;
  }



}




//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){

  let game = new MemoryGame();

  $('img').click(function checkMatch() {

    let img = $(this);
    if (img.prop('src') === 'img/riddler.jpg') {

      let coor = img.prop('alt');

      if (game.pairs[coor] === game.prevCoordinate) {
        img.prop('src', 'img/aquaman'); //need to know what img to use
      }
      else {
        //flip them back
      }

      game.prevImg = img;
      game.prevCoordinate = coor;

    }
  });

  // function getImgEl(rowNum, colNum) {
  //   return $('.container .row:nth-child(' +
  //   rowNum + ') .col-sm-3:nth-child(' +
  //   colNum + ') .pic:first');
  // }


});
