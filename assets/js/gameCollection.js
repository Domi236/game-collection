

var ajaxhttp = new XMLHttpRequest();  //generate a 
var url = "https://api.myjson.com/bins/1akjoi"; //it doesn't enable to use (assets/json/dats.json)//{}myjson http://myjson.com/ihhge 
var x = "";
var myObj = "";


function displayAllImages() {
  ajaxhttp.open("GET", url, true);  //get will be used to request dats//post will be used when the dats are more then 512Bytes //if the boolean is true it won'z be wainting for the request, but it is false it will(it is to be used for a Login field) 
  ajaxhttp.setRequestHeader("content-type", "application/json"); //Assigns the header a label or value pair, which is sent with the request
  ajaxhttp.onreadystatechange = function () {   //will be called by each change of the XHR-State
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) { //the number gives the state about it, if it ranges 4 it is done//ready state gives a state about the progress //sends the number of output code for example 200 for OK
            //debugger;
      myObj = JSON.parse(ajaxhttp.responseText); //change the data of the json file in a string with dats
        for (i in myObj.searchcriteria) {
          x += "<div class='card" + myObj.searchcriteria[i].tags.slice(-1) + "'><div class='front'><img class='image__Array ' src='" + myObj.searchcriteria[i].src + "'/></div><div class='back'><div class='back-content'><h2>" + 
          myObj.searchcriteria[i].name + "</h2><p class='tags'>" + myObj.searchcriteria[i].tags + "</p><a class='game__links' href='" + 
          myObj.searchcriteria[i].url + "' target='_blank'><i class='fab fa-youtube'></i><a/></div></div></div>";
        }
        document.getElementById('container__games--PC').innerHTML += x;
    console.log(myObj);

    }
  } 
  ajaxhttp.send(null); //sends the request, optional with a string or Dom-Object-Dats
}



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

