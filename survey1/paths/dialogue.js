
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
/////////////////////////////////////////////////////////////////////////////

$(userSociety).click(function(){
  if($(this).val() == 2){
    $(aiSociety).text("Hmm... Interesting.");
  } else if($(this).val() == 4){
    $(aiSociety).text("Hmm... Interesting.");
  }
  $(".affect").show();
});
$(userSociety).blur(function(){
  $(userSociety).attr("disabled","disabled");
  $(aiSociety).hide();
  $(aiAffect).show()
  $(userAffect).show();
  $(aiAffect).text("And how has AI affected you?");
});

//AI AFFECT on me /////////////////////////////////////////////////////////////
$(userAffect).click(function(){
  if($(this).val() == 2) {
    $(aiAffect).text("Not everyone has a passionate opinion, and that's OK too.");
  } else if($(this).val() == 4) {
    $(aiAffect).text("I'm glad to hear that.");
  } else if($(this).val() == 6) {
    $(aiAffect).text("I'm sorry to hear that.");
  }
  $(".trust").show();
});
$(userAffect).blur(function(){
  $(userAffect).attr("disabled","disabled");
  $(aiAffect).hide();
  $(aiTrust).show();
  $(userTrust).show();
  $(aiTrust).text("In terms of retraining, who do you trust to have your back?");
});

//TRUST //////////////////////////////////////////////////////////////////////
$(userTrust).click(function(){
  if($(this).val() == 2) {
    $(aiTrust).text("But how well do you really know yourself in these changing times?");
  } else if($(this).val() == 4) {
    $(aiTrust).text("But how do you know you'll be prioritized over profit when that time comes?");
  } else if($(this).val() == 6) {
    $(aiTrust).text("But who's held accountable if the systems don't work?");
  }
});
$(userTrust).blur(function(){
  $(aiTrust).text("I'm just playing devil's advocate.");
  $(".interest").show();
  $(aiInterest).show();
});
//INTEREST  ///////////////////////////////////////////////////////////////////
$(userInterest).click(function(){
  $(aiTrust).hide();
  if($(this).val() == 2) {
    $(aiInterest).text("Duly Noted. Now processing your 2029 visualization...");
  } else if($(this).val() == 4) {
    $(aiTrust).text("Duly Noted. Now processing your 2029 visualization...");
  } else if($(this).val() == 6) {
    $(aiTrust).text("Duly Noted. Now processing your 2029 visualization...");
  }
  $('#nextPage').show();
});
