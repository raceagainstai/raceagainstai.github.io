
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
let link1 = "Lib_Teacher.html";
let link2 = "Tracking_Teacher.html";
$(link1).hide();
$(userInterest).click(function(){
  $(aiTrust).hide();
  $(aiInterest).text("Duly Noted. Now processing your 2029 visualization...");
  if($(this).val() == 2) {
      $(".link").attr("href", "Lib_Teacher.html");
    } else if($(this).val() == 4) {
      $('.link').attr("href", "Tracking_Teacher.html");
    } else if($(this).val() == 6) {
      $('.link').window.location = "Tracking_Teacher.html";
    } else if($(this).val() == 8) {
      $('.link').window.location = "Lib_Teacher.html";
    }
          $('.link').show();
});
  // $('.link').each(function toLib(){
  //   var oldUrl = $(this).attr("href");
  //   var newUrl = oldUrl.replace(link1, link2);
  //   $(this).attr("href", link1);
  // });
  // $('.link').each(function toTracking(){
  //   var oldUrl = $(this).attr("href");
  //   var newUrl = oldUrl.replace(link1, link2);
  //   $(this).attr("href", link2);
  // });
  //
  // if($(this).val() == 2) {
  //   toLib();
  // } else if($(this).val() == 4) {
  //   toTracking();
  // } else if($(this).val() == 6) {
  //   toTracking();
  // } else if($(this).val() == 8) {
  //   toLib();
  // }

  // if($(this).val() == 2) {
  //   $(link1).show();
  //   $(link2).hide();
  // } else if($(this).val() == 4) {
  //   $(link2).show();
  //   $(link1).hide();
  // } else if($(this).val() == 6) {
  //   $(link2).show();
  //   $(link1).hide();
  // } else if($(this).val() == 8) {
  //   $(link1).show();
  //   $(link2).hide();
  // }



// $(userInterest).blur(function(){
//   if($(this).val() == 2) {
//     $('button').window.location = "Lib_Teacher.html";
//   } else if($(this).val() == 4) {
//     $('button').window.location = "Tracking_Teacher.html";
//   } else if($(this).val() == 6) {
//     $('button').window.location = "Tracking_Teacher.html";
//   } else if($(this).val() == 8) {
//     $('button').window.location = "Lib_Teacher.html";
//   }
// })
