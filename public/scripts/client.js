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

  //function to create the tweets received from the get request from the server.
  const createTweetElement = function(tweet) { 

      const $tweet = $(`
        <article class="tweet-artcle">
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

  //function to render the tweets to the page
  const renderTweets = function(tweets) {
      for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  }

// listener for the form submission
  $(".tweetform").on('submit', function(event){

  event.preventDefault();
  
  //capturing the value of the form
  const tweetStr = $("#tweet-text").val();
 
    //post method using jQuery
  $.post( "/tweets", $( "#tweet-text" ).serialize(), reLoadpage);  
    
  })

  //  reloads pages automatically after submitting tweets.
  const reLoadpage = (function() {
    location.reload();
  });
  
});