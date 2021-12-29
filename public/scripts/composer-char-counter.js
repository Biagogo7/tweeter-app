
$(document).ready(function() {
  // --- our code goes here ---

  $(".error").hide();
  $(".error1").hide();


  $('#tweet-text').on('input', function() {
    const charUsed = this.value;
    const charLeft = 140 - this.value.length;
    
    let counter = $(".counter");
    
    counter.text(charLeft);
    //counter[0].innerHTML = charLeft;

    //hides the error message unless more than 140 characters are typed.
    
    if (charLeft < 1) {
      counter.addClass("toggleRed");
      $(".error").show();
      $('#tweetbutton').prop('disabled', true);
      //alert("Tweet length exceeded!");
    
    } else {
      counter.removeClass("toggleRed");
      $('#tweetbutton').prop('disabled', false);
    }
      
  });



  $("#tweetbutton").on('click', function() {
    if (!$("#tweet-text").val()) {
      $(".error1").show();
      //alert("No tweet entered!");
    }

  })


});


