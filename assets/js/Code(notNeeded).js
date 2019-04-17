

/* ready for use with the JSON Object in js

var myObj, i, j, x = "";
myObj = {
  "searchcriteria": [
    {"name":"Agony", "src":"assets/images/Agony.jpg", "url": "https://youtu.be/0oPnKm4xpFM", "tags":
    ["Singleplayer", " Horror", " offline", " PC"]},
    
    {"name":"Blood and Bacon", "src":"assets/images/Blood and Backen.jpg", "url": "https://youtu.be/b2mwW2YnXGA", "tags":
    ["Singleplayer", " Multiplayer 4PL.", " Action", " Party", " online", " offline", " Ego Shooter", " PC"]},
    
    {"name":"Borderlands 2", "src":"assets/images/Borderlands2.png", "url": "https://youtu.be/kKVf5feSMEg", "tags":
    [" Multiplayer 2PL.", " Action", " online", " offline", " Ego Shooter", " PC"] },
    
    {"name":"BroForce", "src":"assets/images/broforce-cover.jpg", "url": "https://youtu.be/8mOAQ7t9JjY", "tags":	
    ["Multiplayer 4Pl.", " Action", " Party", " offline", " PC"]},
    
    {"name":"Unturned", "src":"assets/images/buy-unturned-permanent-gold-upgrade-cd-key-compare-prices.jpg", "url": "https://youtu.be/sjhig_ONjrI", "tags":				
    ["Singleplayer", " MMO", " Crafting", " Action", " Ego Shooter", " Party", " PC"]},
    
    {"name":"Counter Strike",  "src":"assets/images/counterStrike.jpg", "url": "https://youtu.be/p5VD49suIUw", "tags":				
    ["Singleplayer", " Action", " Ego Shooter", " online", " Hunger Games", " PC"]},
    
    {"name":"Dead By Daylight",  "src":"assets/images/deadByDaylight.jpg", "url": "https://youtu.be/JGhIXLO3ul8", "tags":				
    ["Singleplayer", " Horror", " Party", " online", " PC"]}
  ]
}

function displayAllImages() {
  for (i in myObj.searchcriteria) {
    x += "<div class='card'><div class='front'><img class='image__Array ' src='" + myObj.searchcriteria[i].src + "'/></div><div class='back'><div class='back-content'><h2>" + 
    myObj.searchcriteria[i].name + "</h2><p>" + myObj.searchcriteria[i].tags + "</p><a class='game__links' href='" + 
    myObj.searchcriteria[i].url + "' target='_blank'><i class='fab fa-youtube'></i><a/><p class='tags'></p></div></div></div>";
  }
  document.getElementById('container__games--PC').innerHTML += x;
  
} */


// var randomimages = new Array();
//       randomimages[0]="assets/images/Agony.jpg"
//       randomimages[1]="assets/images/Blood and Backen.jpg"
//       randomimages[2]="assets/images/Borderlands2.png"
//       randomimages[3]="assets/images/broforce-cover.jpg"
//       randomimages[4]="assets/images/buy-unturned-permanent-gold-upgrade-cd-key-compare-prices.jpg"
//       randomimages[5]="assets/images/counterStrike.jpg"
//       randomimages[6]="assets/images/deadByDaylight.jpg"
      // randomimages[7]="assets/images/Flatout ultimate.jpg"
      // randomimages[8]="assets/images/220px-Dirt_3.jpg"
      // randomimages[9]="assets/images/Isaac.png"
      // randomimages[10]="assets/images/StickFightTheGame.png"
      // randomimages[11]="assets/images/league of legends.jpg"
      // randomimages[12]="assets/images/lethal league.jpg"
      // randomimages[13]="assets/images/Mortal komabt XL.jpg"
      // randomimages[14]="assets/images/outlast.jpg"
      // randomimages[15]="assets/images/raceTheSun.jpg"
      // randomimages[16]="assets/images/rogue-legacy-cover.jpg"
      // randomimages[17]="assets/images/speed ruinner.jpg"
      // randomimages[18]="assets/images/star war Battlefront2.jpg"
      // randomimages[19]="assets/images/super Hexagon.jpg"
      // randomimages[20]="assets/images/terraria.jpg"
      // randomimages[21]="assets/images/Warframe.jpg"
      // randomimages[22]="assets/images/vijf-nachten-in-freddy-s-blacklight-behang-3554x1999-6025_53.jpg"
      // randomimages[23]="assets/images/worms armageddon.jpg"
      // randomimages[24]="assets/images/zombie army triology.jpg"




// var randomLinks = new Array();
//       randomLinks[0]="https://youtu.be/0oPnKm4xpFM"
//       randomLinks[1]="https://youtu.be/b2mwW2YnXGA"
//       randomLinks[2]="https://youtu.be/kKVf5feSMEg"
//       randomLinks[3]="https://youtu.be/8mOAQ7t9JjY"
//       randomLinks[4]="https://youtu.be/sjhig_ONjrI"
//       randomLinks[5]="https://youtu.be/p5VD49suIUw"
//       randomLinks[6]="https://youtu.be/JGhIXLO3ul8"
      // randomLinks[7]="https://youtu.be/7WlHry98-OI"
      // randomLinks[8]="https://youtu.be/MRyuKxYVJxg"
      // randomLinks[9]="https://www.youtube.com/watch?v=27Le3kOOFQk"
      // randomLinks[10]="https://www.youtube.com/watch?v=YBlEslDQSEQ"
      // randomLinks[11]="https://www.youtube.com/watch?v=vzHrjOMfHPY"
      // randomLinks[12]="https://www.youtube.com/watch?v=j78X5LluM5U"
      // randomLinks[13]="https://www.youtube.com/watch?v=bxFoRCvEjUA"
      // randomLinks[14]="https://www.youtube.com/watch?v=uKA-IA4locM"
      // randomLinks[15]="https://www.youtube.com/watch?v=QmjAg0e_YYU"
      // randomLinks[16]="https://www.youtube.com/watch?v=T0DKxOEikTs"
      // randomLinks[17]="https://www.youtube.com/watch?v=rWwUDenjkzs"
      // randomLinks[18]="https://www.youtube.com/watch?v=V2xp-qtUlsQ"
      // randomLinks[19]="https://www.youtube.com/watch?v=2sz0mI_6tLQ"
      // randomLinks[20]="https://www.youtube.com/watch?v=w7uOhFTrrq0&t=71s"
      // randomLinks[21]="https://www.youtube.com/watch?v=Q6cIRZlMQ3g"
      // randomLinks[22]="https://www.youtube.com/watch?v=hdHlIy0W4uU"
      // randomLinks[23]="https://www.youtube.com/watch?v=Xl2Oox2a58k"
      // randomLinks[24]="https://www.youtube.com/results?search_query=zombie+army+trilogy++trailer"
      // randomLinks[25]=""
      // randomLinks[26]=""
      // randomLinks[27]=""
      // randomLinks[28]=""
    

// var myGames = {
//   "games[0].name": "Agony",
//   "games[0].device": "PC",
//   "games[0].src": "assets/images/Agony.jpg",
//   "games[0].url": "https://youtu.be/0oPnKm4xpFM",
//   "games[0].tags[0]": "Singleplayer",
//   "games[0].tags[1]": "Horror",
//   "games[0].tags[2]": "offline",
//   "games[1].name": "Blood and Bacon",
//   "games[1].device": "PC",
//   "games[1].src": "assets/images/Blood and Backen.jpg",
//   "games[1].url": "https://youtu.be/b2mwW2YnXGA",
//   "games[1].tags[0]": "Singleplayer",
//   "games[1].tags[1]": "Multiplayer 4PL.",
//   "games[1].tags[2]": "Action",
//   "games[1].tags[3]": "Party",
//   "games[1].tags[4]": "online",
//   "games[1].tags[5]": "offline",
//   "games[1].tags[6]": "Ego Shooter",
//   "games[2].name": "Borderlands 2",
//   "games[2].device": "PC",
//   "games[2].src": "assets/images/Borderlands2.png",
//   "games[2].url": "https://youtu.be/kKVf5feSMEg",
//   "games[2].tags[0]": "Multiplayer 2PL.",
//   "games[2].tags[1]": "Action",
//   "games[2].tags[2]": "online",
//   "games[2].tags[3]": "offline",
//   "games[2].tags[4]": "Ego Shooter",
//   "games[3].name": "BroForce",
//   "games[3].device": "PC",
//   "games[3].src": "assets/images/broforce-cover.jpg",
//   "games[3].url": "https://youtu.be/8mOAQ7t9JjY",
//   "games[3].tags[0]": "Multiplayer 4Pl.",
//   "games[3].tags[1]": "Action",
//   "games[3].tags[2]": "Party",
//   "games[3].tags[3]": "offline",
//   "games[4].name": "Unturned",
//   "games[4].device": "PC",
//   "games[4].src": "assets/images/buy-unturned-permanent-gold-upgrade-cd-key-compare-prices.jpg",
//   "games[4].url": "https://youtu.be/sjhig_ONjrI",
//   "games[4].tags[0]": "Singleplayer",
//   "games[4].tags[1]": "MMO",
//   "games[4].tags[2]": "Crafting",
//   "games[4].tags[3]": "Action",
//   "games[4].tags[4]": "Ego Shooter",
//   "games[4].tags[5]": "Party",
//   "games[5].name": "Counter Strike",
//   "games[5].device": "PC",
//   "games[5].src": "assets/images/counterStrike.jpg",
//   "games[5].url": "https://youtu.be/p5VD49suIUw",
//   "games[5].tags[0]": "Singleplayer",
//   "games[5].tags[1]": "Action",
//   "games[5].tags[2]": "Ego Shooter",
//   "games[5].tags[3]": "online",
//   "games[5].tags[4]": "Hunger Games",
//   "games[6].name": "Dead By Daylight",
//   "games[6].device": "PC",
//   "games[6].src": "assets/images/deadByDaylight.jpg",
//   "games[6].url": "https://youtu.be/JGhIXLO3ul8",
//   "games[6].tags[0]": "Singleplayer",
//   "games[6].tags[1]": "Horror",
//   "games[6].tags[2]": "Party",
//   "games[6].tags[3]": "online"
// }*/


+




<!-- <input type="checkbox" id="singleplayerCheck" class="checkbox">
<input type="checkbox" id="multiplayer2Check" class="checkbox">
<input type="checkbox" id="multiplayer4Check" class="checkbox">
<input type="checkbox" id="egoShooterCheck" class="checkbox">
<input type="checkbox" id="thirdPersonCheck" class="checkbox">
<input type="checkbox" id="twoDGameCheck" class="checkbox">
<input type="checkbox" id="rollenspielCheck" class="checkbox">
<input type="checkbox" id="onlineCheck" class="checkbox">
<input type="checkbox" id="offlineCheck" class="checkbox">
<input type="checkbox" id="partyCheck" class="checkbox">
<input type="checkbox" id="rennspielCheck" class="checkbox">
<input type="checkbox" id="brainGamesCheck" class="checkbox">
<input type="checkbox" id="actionCheck" class="checkbox">
<input type="checkbox" id="horrorCheck" class="checkbox">
<input type="checkbox" id="craftingCheck" class="checkbox">
<input type="checkbox" id="mmoCheck" class="checkbox"> -->

<!--need to write a function which write a list with all tags who stands in the json and all game names-->
  

  
  <!-- <div class="content__wrapper">
      <div id="container__games--XboxOne"></div>
  </div/>
  <div class="content__wrapper">
      <div id="container__games--XBox360"></div>
  </div/>
  <div class="content__wrapper">
      <div id="container__games--PS4"></div>
  </div/>
  <div class="content__wrapper">
      <div id="container__games--Ps2"></div>
  </div/>
  <div class="content__wrapper">
      <div id="container__games--Wii"></div>
  </div/> -->

  +


  

// function search() {
//     var input, filter, div, h2, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase(); //the input value will be set to uppercase
//     div = document.getElementsByClassName("back-content");
//     h2 = div.getElementsByTagName("h2"); 
//     for (i = 0; i < h2.length; i++) { 
//         a = h2[i].getElementsByTagName("a")[0]; 
//         txtValue = a.textContent || a.innerText; // textContent/innerText that text which is in the tag
//         if (txtValue.toUpperCase().indexOf(filter) > -1) { //indexOf position where the text stands, 
//             h2[i].style.display = "";
//         } else {
//             h2[i].style.display = "none";
//         }
//     }
// }



+



  <!-- <div id="background">
    <div id="endProduct" class="endProduct">Der Switch ist <span id="status">inaktiv</span>.<div>
      <label class="toggle">
        <input id="toggleSwitch" type="checkbox">
        <span class="roundbutton"></span>
      </label>
  </div> -->



  +



    <!-- <ul id="myUL">
      <li><a id="singleplayer" href="#">Singleplayer</a></li>
      <li><a id="multiplayer2" href="#">Multiplayer 2PL.</a></li>
      <li><a id="multiplayer4" href="#">Multiplayer 4PL.</a></li>
      <li><a id="egoShooter" href="#">Ego Shooter</a></li>
      <li><a id="thirdPerson" href="#">Third Person</a></li>
      <li><a id="twoDGame" href="#">2D Game</a></li>
      <li><a id="rollenspiel" href="#">Rollenspiel</a></li>
      <li><a id="online" href="#">online</a></li>
      <li><a id="offline" href="#">offline</a></li>
      <li><a id="party" href="#">Party</a></li>
      <li><a id="rennspiel" href="#">Rennspiel</a></li>
      <li><a id="brainGames" href="#">Brain Games</a></li>
      <li><a id="action" href="#">Action</a></li>
      <li><a id="horror" href="#">Horror</a></li>
      <li><a id="crafting" href="#">Crafting</a></li>
      <li><a id="mmo" href="#">MMO</a></li>
    </ul> -->




    +





    


/*toogle Switch for the night mode*/
/*////////////////////*/
/* 
.endProduct {
  font-size: 2rem;
  font-family: sans-serif;
  padding: 2rem 0 2rem 2rem;
}
.toggle {
  margin: 0 0 0 2rem;
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
}
.toggle input {
  display: none;
}
.roundbutton {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #495A72;
  display: block;
  transition: all 0.3;
  border-radius: 3.4rem;
  cursor: pointer;
}
.roundbutton:before {
  position: absolute;
  content: "";
  height: 2.4rem;
  width: 2.5rem;
  border-radius: 100%;
  display: block;
  left: 0.5rem;
  bottom: 0.5rem;
  background-color: white;
  transition: all 0.3s;
}
input:checked + .roundbutton {
  background-color: #ff6e48;
}
input:checked + .roundbutton:before {
  transform: translate(2.6rem, 0)
}
.red{
  background-color: red;
  border-radius: 20%;
}
.blue{
  background-color: blue;
  border-radius: 20%;
} */

<!-- <div id="background">
    <div id="endProduct" class="endProduct">Der Switch ist <span id="status">inaktiv</span>.<div>
      <label class="toggle">
        <input id="toggleSwitch" type="checkbox">
        <span class="roundbutton"></span>
      </label>
  </div> -->