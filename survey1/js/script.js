var input= document.querySelectorAll('input');
for(i=0; i<input.length; i++){
  input[i].setAttribute('width',input[i].getAttribute('placeholder').length);
}


// $(document).ready(function() {
//  $('#marriage').change(function(){
//     $("#hidden-option").html($('#marriage option:selected').text());
//     $(this).width($("#hidden-select").width());
//  });
// });
