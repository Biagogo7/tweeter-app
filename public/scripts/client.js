/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---


  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (moreTweets) {
      console.log('Success: ', moreTweets);
      renderTweets(moreTweets);    

    });   
  }
  

  
  loadTweets();

  //tweetObj = loadTweets();
  // [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png",
  //       "handle": "@SirIsaac"
  //     },

  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
      
  //     "created_at": 1639391659307
  //   },

  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },

  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },

  //     "created_at": 1639478059307
  //   }
  // ]

  const createTweetElement = function(tweet) { 


      const $tweet = $(`
        <article>
          <form class="tweet-contform" ></form>
            <header>
            
              <div class="user-logo">
                <div>
                  <img src="${tweet.user.avatars}" style="width:28px; height:28px;">
                  <label>${tweet.user.name}</label>
                </div> 
                <div> 
                  <output name="userhandle" class="userhandle" for="tweet-body">${tweet.user.handle}</output>
                </div> 
              </div>
              <br>
          
              <div>
                <label for="tweet-body">${tweet.content.text}</label>
                <textarea name="text" id="tweet-body"> </textarea>
              </div>
            </header>
          
            <footer class="article-footer">
              <span>
                <label>${timeago.format(tweet.created_at)}</label> 
              </span> 

              <span>
                <div>
                  <i class="fas fa-flag" id="a"></i>
                  <i class="fas fa-retweet" id="b"></i>
                  <i class="fas fa-heart" id="c"></i>
                </div>
              </span>
                      
            </footer>

            <br>
            <br>

          </form>

        </article> 
      
      
      `)

      $("#tweet-container").prepend($tweet);
    }

  const renderTweets = function(tweets) {
    console.log('tweets', tweets)
    for (const tweet of tweets) {
      createTweetElement(tweet);
      console.log('tweets', tweet)
    }
  }



  $(".tweetform").on('submit', function(event){

  event.preventDefault();

  const tweetStr = $("#tweet-text").val();
 
    //post method using jQuery
  $.post( "/tweets", $( "#tweet-text" ).serialize() );
  
  })




  
});











// $('.tweetform').submit(function(e){
//   e.preventDefault();
//   const tweetStr = $("#tweet-text").val();
 
//   $.ajax({
//    type: 'POST',
//    url: "/tweets",
//    data: { 
//      //You dont need to send user data becaues you are setting the user variable with $_SESSION in php file
//      message: userMessage     
//    },
//     success: function(msg){
 
 
//     alert('Message Sent');
 
//        }
//     });
 
//  return false;
//  });


