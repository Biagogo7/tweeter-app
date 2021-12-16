
$(document).ready(function() {
  // --- our code goes here ---

  $('#tweet-text').on('input', function() {
    const charUsed = this.value;
    const charLeft = 140 - this.value.length;
    
    let counter = $(".counter");
    
    counter.text(charLeft);
    //counter[0].innerHTML = charLeft;

    // if (charUsed < 0) {
    //   alert("No tweet entered!")
    // }

    if (charLeft < 1) {
      counter.addClass("toggleRed");
      alert("Tweet length exceeded!")
      //$('#tweetbutton').attr("disabled", true);
    
    } else {
      counter.removeClass("toggleRed");
    }
      
  });



  $("#tweetbutton").on('click', function() {
    if (!$("#tweet-text").val()) {
      alert("No tweet entered!");
    }

  })


});



