//Score counter
var weightCounter = 0;
var nextPageUrl1 = "file:///C:/Users/will/Desktop/RAAI/survey1/video/video1.html"
var nextPageUrl2 = "file:///C:/Users/will/Desktop/RAAI/survey1/video/video2.html"


var button = document.querySelector('button');
button.addEventListener('click', function(e) {
  e.preventDefault();
  var selects = document.querySelectorAll('select');
  selects.forEach(function(elt) {
    weightCounter += elt.selectedIndex;
  });
  console.log(weightCounter);
  // if(totalCounter >= 4) {
  //     location.href = nextPageUrl1;
  //   } else {
  //     location.href = nextPageUrl2;
  //   }

});
