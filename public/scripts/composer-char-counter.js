
$(document).ready(function() {
  // --- our code goes here ---

const charCount = function() {
  const charUsed = this.value;
  const charLeft = 140 - this.value.length;
  console.log("Characters left to type:", charLeft);
  return charLeft;
};

$('#tweet-text').on('input', function() {
  const charUsed = this.value;
  const charLeft = 140 - this.value.length;
  //console.log("Characters left to type:", charLeft);
  let counter = $(".counter");
  //console.log("counter___", counter[0]);
  counter[0].innerHTML = charLeft;

  if (charLeft < 0) {
    counter.addClass("toggleRed");
   
  } else {
    counter.removeClass("toggleRed");
  }
});


// $('#tweet-text').on('input', charCount);

});



