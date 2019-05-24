// DECLARATIONS //
const quiz = document.getElementById('quiz');
/////////////////////////////////////////////////////////////////////////////
//Converting document elements into js declarations so I can add animations


let userName = document.getElementById('userName');
let aiName = document.getElementById('aiName');

let userAge = document.getElementById('userAge');
let aiAge = document.getElementById('aiAge');

let userMarriage = document.getElementById('marriage');
let aiMarriage = document.getElementById('aiMarriage');

let userChildren = document.getElementById('children');
let aiChildren = document.getElementById('aiChildren');

let userIndustries = document.getElementById('industries');
let aiIndustries = document.getElementById('aiIndustries');

let userRoles = document.getElementById('roles');
let aiRoles = document.getElementById('aiRoles');

let userSociety = document.getElementById('society');
let aiSociety = document.getElementById('aiSociety');

let userAffect = document.getElementById('affect');
let aiAffect = document.getElementById('aiAffect');

let userTrust = document.getElementById('trust');
let aiTrust = document.getElementById('aiTrust');

let userInterest = document.getElementById('interest');
let aiInterest = document.getElementById('aiInterest');
//Name animation ///////////////////////////////////////////////////////////////
$(userName).keyup(function() {
  var value = $(this).val();
  $(aiName).text("Nice to meet you " + value + ". And what's your age? Type it in please!");
  this.className='blueText';
  $(".age").show();
}); //disable after filling
$(userName).blur(function(){
  $(userName).attr("disabled", "disabled");
});

//Age animation ///////////////////////////////////////////////////////////////
$(userAge).keyup(function() {
  $(aiName).hide();
  $(aiAge).show();
  $(".marriage").show();
  this.className='blueText';
  var age = $(this).val();
  $(aiAge).text(age + " years young. Are you in a relationship?");
}); //disable after filling
$(userAge).blur(function(){
  $(userAge).attr("disabled", "disabled");
  $("#warning").show();
});

//MARRIAGE animation ///////////////////////////////////////////////////////////////
$(userMarriage).click(function() {
  this.className = 'blueText';

});
$(userMarriage).blur(function(){
  $(userMarriage).attr("disabled", "disabled");
});

//# of CHILDREN ///////////////////////////////////////////////////////////////
$(userChildren).click(function(){
  $(aiAge).hide();
  $(aiMarriage).show();
  this.className = 'blueText';
  $(".industries").show();
  if($(this).val() == 0){
    $(aiMarriage).text("I respect that. We only have the future to look forward to.");
  } else {
    $(aiMarriage).text("That's beautiful, I'm sure it's lovely.");
  }
});
$(userChildren).blur(function(){
  $(userChildren).attr("disabled", "disabled");
  $(userMarriage).attr("disabled", "disabled");
  $(aiMarriage).text("So what kind of role do you work in? And which industry?");
});
//Work ROLE ///////////////////////////////////////////////////////////////
$(userRoles).click(function(){
  $(aiMarriage).hide();
  $(aiIndustries).show();
  this.className = 'blueText';
  if($(this).val() == 2){
    $(aiIndustries).text("Hard, honest work. But, you might be in for a ride here.");
  } else if($(this).val() == 4){
    $(aiIndustries).text("Interesting. Let me get to know you a bit better in the following questions.");
  } else if($(this).val() == 6){
    $(aiIndustries).text("Ah, the leader type. I don't mean to brag, but I'm technically a visionary.");
  } else if($(this).val() == 8){
    $(aiIndustries).text("Malcom X once said \"Education is the passport to the future\". ");
  }
});
//Work INDUSTRY ///////////////////////////////////////////////////////////////

$(userIndustries).change(function(){
  this.className = 'blueText';
  if($(this).val() == 2){
    location.href='paths/transport/transport.html';
  } else if($(this).val() == 4){
    location.href='paths/manu/manu.html';
  } else if($(this).val() == 6){
    location.href='paths/retail/retail.html';
  } else if($(this).val() == 8){
    location.href='paths/service/service.html';
  } else if($(this).val() == 10){
    location.href='paths/construct/construct.html';
  } else if($(this).val() == 12){
    location.href='paths/finTech/finTech.html';
  } else if($(this).val() == 14){
    location.href='paths/finTech/finTech.html';
  } else if($(this).val() == 16){
    location.href='paths/edu/edu.html';
  }

});
$(userRoles).blur(function(){
  $(userRoles).attr("disabled", "disabled");
  $(aiIndustries).hide();
  $(aiSociety).show();
});
