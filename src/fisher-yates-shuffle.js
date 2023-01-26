 let arr = [1, 2, 3, 4, 5, 6, 7];
// let i = arr.length;

// while (--i > 0) {
//     // shuffle algorithm here
//     let randIndex = Math.floor(Math.random() * (i + 1));
//     [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];

//   }

//   console.log(arr); // result will vary


  function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  console.log(arr); // result will vary
