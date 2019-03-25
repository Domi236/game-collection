var randomimages = new Array();
      randomimages[0]="assets/images/Agony.jpg"
      randomimages[1]="assets/images/Blood and Backen.jpg"
      randomimages[2]="assets/images/Borderlands2.png"
      randomimages[3]="assets/images/broforce-cover.jpg"
      randomimages[4]="assets/images/buy-unturned-permanent-gold-upgrade-cd-key-compare-prices.jpg"
      randomimages[5]="assets/images/counterStrike.jpg"
      randomimages[6]="assets/images/deadByDaylight.jpg"
      randomimages[7]="assets/images/Flatout ultimate.jpg"
      randomimages[8]="assets/images/220px-Dirt_3.jpg"
      randomimages[9]="assets/images/Isaac.png"
      randomimages[10]="assets/images/StickFightTheGame.png"
      randomimages[11]="assets/images/league of legends.jpg"
      randomimages[12]="assets/images/lethal league.jpg"
      randomimages[13]="assets/images/Mortal komabt XL.jpg"
      randomimages[14]="assets/images/outlast.jpg"
      randomimages[15]="assets/images/raceTheSun.jpg"
      randomimages[16]="assets/images/rogue-legacy-cover.jpg"
      randomimages[17]="assets/images/speed ruinner.jpg"
      randomimages[18]="assets/images/star war Battlefront2.jpg"
      randomimages[19]="assets/images/super Hexagon.jpg"
      randomimages[20]="assets/images/terraria.jpg"
      randomimages[21]="assets/images/Warframe.jpg"
      randomimages[22]="assets/images/vijf-nachten-in-freddy-s-blacklight-behang-3554x1999-6025_53.jpg"
      randomimages[23]="assets/images/worms armageddon.jpg"
      randomimages[24]="assets/images/zombie army triology.jpg"




var randomLinks = new Array();
      randomLinks[0]="https://youtu.be/0oPnKm4xpFM"
      randomLinks[1]="https://youtu.be/b2mwW2YnXGA"
      randomLinks[2]="https://youtu.be/kKVf5feSMEg"
      randomLinks[3]="https://youtu.be/8mOAQ7t9JjY"
      randomLinks[4]="https://youtu.be/sjhig_ONjrI"
      randomLinks[5]="https://youtu.be/p5VD49suIUw"
      randomLinks[6]="https://youtu.be/JGhIXLO3ul8"
      randomLinks[7]="https://youtu.be/7WlHry98-OI"
      randomLinks[8]="https://youtu.be/MRyuKxYVJxg"
      randomLinks[9]="https://www.youtube.com/watch?v=27Le3kOOFQk"
      randomLinks[10]="https://www.youtube.com/watch?v=YBlEslDQSEQ"
      randomLinks[11]="https://www.youtube.com/watch?v=vzHrjOMfHPY"
      randomLinks[12]="https://www.youtube.com/watch?v=j78X5LluM5U"
      randomLinks[13]="https://www.youtube.com/watch?v=bxFoRCvEjUA"
      randomLinks[14]="https://www.youtube.com/watch?v=uKA-IA4locM"
      randomLinks[15]="https://www.youtube.com/watch?v=QmjAg0e_YYU"
      randomLinks[16]="https://www.youtube.com/watch?v=T0DKxOEikTs"
      randomLinks[17]="https://www.youtube.com/watch?v=rWwUDenjkzs"
      randomLinks[18]="https://www.youtube.com/watch?v=V2xp-qtUlsQ"
      randomLinks[19]="https://www.youtube.com/watch?v=2sz0mI_6tLQ"
      randomLinks[20]="https://www.youtube.com/watch?v=w7uOhFTrrq0&t=71s"
      randomLinks[21]="https://www.youtube.com/watch?v=Q6cIRZlMQ3g"
      randomLinks[22]="https://www.youtube.com/watch?v=hdHlIy0W4uU"
      randomLinks[23]="https://www.youtube.com/watch?v=Xl2Oox2a58k"
      randomLinks[24]="https://www.youtube.com/results?search_query=zombie+army+trilogy++trailer"
      // randomLinks[25]=""
      // randomLinks[26]=""
      // randomLinks[27]=""
      // randomLinks[28]=""

  function displayAllImages() {
    for (n=0;n<randomimages.length;n++) {
    for (n=0;n<randomLinks.length;n++) {
      document.getElementById('container__games--PC').innerHTML += "<a href='" + randomLinks[n] + "' target='_blank'><img class='image__Array' src='" + randomimages[n] + "'/><a/>";
      }
    }
  }

//so solls ca aussschauen mit den suchverhalten von der Game Collection
        /*"Name": "Borderlands 2",
        "Device": "PC",
        "Tags": [
            "Singleplayer",
            "Multiplayer 4 or more",
            "Horror",
            "Action",
            "Party",
            "online",
            "offline"    
        ]
        */