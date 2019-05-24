// let submit = document.getElementById("submit");
// let newPara = document.createElement("P");
// let userInput= document.getElementById("userInput").value();
// let feedbackSection = document.getElementById("feedbackSection");
// $(submit).click(function submit(){
//   feedbackSection.appendChild(newInput);
// });



let submit = document.getElementById("submit");
let feedbackSection = document.getElementById("feedbackSection");
// let userInput= document.getElementById("userInput").val();

$(document).ready(function (){
  $(submit).click(function submit(){
    $(feedbackSection).append("<p id='otherFeedback'>" + $('#userInput').val() + "</p>");
  });
});
