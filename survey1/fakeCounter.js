  var totalCounter = 0;
  var nextPageUrl1 = "file:///C:/Users/will/Desktop/RAAI/video/video1.html"
  var nextPageUrl2 = "file:///C:/Users/will/Desktop/RAAI/video/video2.html"


  var calculate = document.querySelector('button');
  calculate.addEventListener('click', function() {
    var selects = document.querySelectorAll('select');
    selects.forEach(function(elt) {
      totalCounter += elt.selectedIndex;
    });

    console.log(totalCounter);
  });


  var toVideo = document.getElementById('toVideo');
  toVideo.addEventListener('click', function() {
    if(totalCounter >= 4) {
        window.location = nextPageUrl1;
      } else {
        window.location = nextPageUrl2;
      }
    });

    // function marriageVal() {
      //   var q1 = $("#marriage").val();
      //   var marriageCounter = 0;
      //   if(q1 === "1") {marriageCounter = 1;}
      //   else if(q1 === "2") {marriageCounter = 2;}
      //   else if(q1 === "3") {marriageCounter = 3;}
      //   totalCounter += marriageCounter;
      //   console.log(totalCounter);
      // }
      //
      // function kidsVal() {
        //     var q2 = $("kids").val();
        //     var kidsCounter = 0;
        //     if(q2 === "10") {kidsCounter = 10;}
        //     else if(q2 === "1") {kidsCounter = 1;}
        //     else if(q2 === "2") {kidsCounter = 2;}
        //     else if(q2 === "3") {kidsCounter = 3;}
        //     else if(q2 === "4") {kidsCounter = 4;}
        //     totalCounter += kidsCounter;
        //     console.log(totalCounter);
        // }
        //
        // $("#sample").html("Current Counter: " + totalCounter);
        //
        // $("#marriage").change(marriageVal);
        // $("#kids").change(kidsVal);
