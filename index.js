var palette = require('image-palette');

console.log("Big Colours:");

palette('./images/BiggerTest.jpg', function (bigColors) {
  bigColors.forEach(function(color){
    console.log(color);
  });
});

console.log("Smaller Colours:");

palette('./images/SmallerTest.jpg', function (smallColors) {
  smallColors.forEach(function(color){
    console.log(color);
  });
});
