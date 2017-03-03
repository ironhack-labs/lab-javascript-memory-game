//******************************************************************
// Game Logic
//******************************************************************




var one = "";
var two = "";

var counter = 0;



//******************************************************************
// HTML/CSS Interactions
//******************************************************************









$(document).ready(function() {

    var superheroes = [];
    var avengers = '<img src="./img/the-avengers.jpg" alt="" id="avengers">';
    var thor = '<img src="./img/thor.jpg" alt="" id="thor">';
    var aquaman = '<img src="./img/aquaman.jpg" alt="" id="aquaman">';
    var batman = '<img src="./img/batman.jpg" alt="" id="batman">';
    var capAmerica = '<img src="./img/captain-america.jpg" alt="" id="capAmerica">';
    var fantastic4 = '<img src="./img/fantastic-four.jpg" alt="" id="fantastic4">';
    var flash = '<img src="./img/flash.jpg" alt="" id="flash">';
    var greenA = '<img src="./img/green-arrow.jpg" alt="" id="greenA">';
    var greenL = '<img src="./img/green-lantern.jpg" alt="" id="greenL">';
    var ironMan = '<img src="./img/ironman.jpg" alt="" id="ironMan">';
    var spider = '<img src="./img/spiderman.jpg" alt="" id="spider">';
    var superm = '<img src="./img/superman.jpg" alt="" id="superm">';

    superheroes.push(avengers, thor, aquaman, batman, capAmerica, fantastic4, flash, greenA, greenL, ironMan, spider, superm);

    superheroes.forEach(function(word) {
        superheroes.push(word);
    });

    var repeat = [];
    while (repeat.length < 24) {
        var randomnumber = Math.floor(Math.random() * 24);
        if (repeat.indexOf(randomnumber) > -1) continue;
        repeat[repeat.length] = randomnumber;
    }
    console.log(repeat);
    var arr = [];
    for (var i = 0; i < repeat.length; i++) {
        console.log(superheroes[repeat[i]]);
        var count = superheroes[repeat[i]];
        arr.push(count);
    }
    console.log(arr);

    function game(iDofdiv, number) {


        $(iDofdiv).append(arr[number]).on('click', function() {
            $(iDofdiv + '> img').toggle();
            counter++;
            console.log(counter);
            if (counter === 1) {

                one = iDofdiv;
                console.log($(one + '> img'));


            } else if (counter === 2) {
                two = iDofdiv;
                console.log($(two + '> img'));


            } else if (counter === 3) {
                counter = 1;
            }
            setTimeout(function reset() {
                if (counter === 2) {
                    check(one, two);
                    counter = 0;
                }
            }, 1000);

        });
    }
    game('#zero0', 0);
    game('#zero1', 1);
    game('#zero2', 2);
    game('#zero3', 3);
    game('#one0', 4);
    game('#one1', 5);
    game('#one2', 6);
    game('#one3', 7);
    game('#two0', 8);
    game('#two1', 9);
    game('#two2', 10);
    game('#two3', 11);
    game('#four0', 12);
    game('#four1', 13);
    game('#four2', 14);
    game('#four3', 15);
    game('#three0', 16);
    game('#three1', 17);
    game('#three2', 18);
    game('#three3', 20);
    game('#five0', 20);
    game('#five1', 19);
    game('#five2', 22);
    game('#five3', 23);


    $('img').hide();
    console.log($('img:hidden'));



    function check(first, second) {
        if ($(first + '> img').prop('src') === $(second + '> img').prop('src')) {
            console.log("alleluya");
            $(first).addClass('active');
            $(second).addClass('active');

        } else {
            $(first + '> img').hide();
            $(second + '> img').hide();
            $(first).removeClass('active');
            $(second).removeClass('active');
        }
        if ($(first).hasClass('active') && $(second).hasClass('active')) {
            $(first).off('click');
            $(second).off('click');
        }
    }


});
