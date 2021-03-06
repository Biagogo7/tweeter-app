<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Meta Information -->
  <title>Tweeter - Home Page</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

  <!-- External CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    type="text/css" />
  <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Source+Sans+Pro:ital,wght@1,300;1,600&display=swap"
    rel="stylesheet">


  <!-- App CSS -->
  <link rel="stylesheet" href="/styles/layout.css" type="text/css" />
  <link rel="stylesheet" href="/styles/nav.css" type="text/css" />
  <link rel="stylesheet" href="/styles/header.css" type="text/css" />
  <link rel="stylesheet" href="/styles/new-tweet.css" type="text/css" />

  <!-- External JS -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


  <!-- App JS -->
  <script type="text/javascript" src="/scripts/client.js"></script>
  <script type="text/javascript" src="/scripts/composer-char-counter.js"></script>

</head>

<body>

  <!-- Top nav bar (fixed) -->

  <div class="container1">
    <nav class="container2">
      <span class="box a" style="font-family: 'Bungee', cursive">tweeter</span>
      <div class="tweet">
        <span class="box b"><strong> Write</strong> a new tweet </span>
        <i class="fas fa-angle-double-down"></i>
      </div>

    </nav>

    <header class="header">
      <div class="tweet">
        <div class=tweeto>
          <img src="/images/profile-hex.png">
        </div>
        <!--<br> -->
        <div class="tweeta">
          <h2>Ade Atayero</h2>
        </div>
      </div>
    </header>
  </div>
  <!-- Page-specific (main) content here -->


  <main class="container">

    <section class="new-tweet">
      <h2>Compose Tweet</h2>
      <form class="tweetform" action="/tweets" method="POST">
        <div>
          <label for="tweet-text">What are you humming about?</label>
          <div><textarea name="text" id="tweet-text"></textarea></div>
        </div>
        <div>
          <div class="tweet-bottom">
            <button id="tweetbutton" type="submit">Tweet</button>
            <output name="counter" class="counter" for="tweet-text">140</output>
          </div>
        </div>

      </form>
    </section>

    <section class="tweet-container"> 








    </section>

  </main>

</body>

</html>


<!-- <!--font-family: 'Bungee', cursive;

  maxlength="140" -->