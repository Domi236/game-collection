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

  function displayAllImages() {
    for (n=0;n<randomimages.length;n++) {
    for (n=0;n<randomLinks.length;n++) {
      document.getElementById('container__games--PC').innerHTML += "<a href='" + randomLinks[n] + "' target='_blank'><img class='image__Array' src='" + randomimages[n] + "'/><a/>";
      }
    }
  }
