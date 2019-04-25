

var ajaxhttp = new XMLHttpRequest();
var url = "https://api.myjson.com/bins/10083k"; //it doesn't enable to use (assets/json/games.json)//{}myjson http://myjson.com/ihhge
var x = "";
var myObj = "";


function displayAllImages() {
  ajaxhttp.open("GET", url, true);  //get will be used to request dats//post will be used when the dats are more then 512Bytes //if the boolean is true it won'z be wainting for the request, but it is false it will(it is to be used for a Login field)
  ajaxhttp.setRequestHeader("content-type", "application/json"); //Assigns the header a label or value pair, which is sent with the request
  ajaxhttp.onreadystatechange = function () {   //will be called by each change of the XHR-State
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) { //the number gives the state about it, if it ranges 4 it is done//ready state gives a state about the progress //sends the number of output code for example 200 for OK
            //debugger;
      myObj = JSON.parse(ajaxhttp.responseText); //change the data of the json file in a string with dats

      generateMenu();
      generateSubMenu();
      filterElements();
      activeTarget();
    }
  }
  ajaxhttp.send(null); //sends the request, optional with a string or Dom-Object-Dats
}

function generateMenu() {
  var consoleArray = [];
  var consoleList = "";

  for (var i in myObj.searchcriteria) {
    if (consoleArray.indexOf(myObj.searchcriteria[i].console) == -1) {
      consoleArray.push(myObj.searchcriteria[i].console);
    }
  }

  for (var i in consoleArray) {
    consoleList += "<li class='content__header-menu-toggle' data-filter='" + consoleArray[i] + "'>" + consoleArray[i] + "<span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span></li>";
  }
  document.getElementById('content__header-menu').innerHTML = "<li class='content__header-menu-toggle' data-filter='all'> Show all<span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span></li>" + consoleList;
}


function generateSubMenu() {
  var tagArray = [];
  var tagList = "";

  for (var i in myObj.searchcriteria) {
    for (var j in myObj.searchcriteria[i].tags) {
      if (tagArray.indexOf(myObj.searchcriteria[i].tags[j]) == -1) {
        tagArray.push(myObj.searchcriteria[i].tags[j]);
      }
    }
  }
  tagArray.sort();

  for (var i in tagArray) {
    tagList += "<li class='content__header-sub-menu-toggle content__header-menu-toggle' data-filter='" + tagArray[i] + "'>" + tagArray[i] + "</li>";
  }
  document.getElementById('content__header-sub-menu').innerHTML = tagList;
}


function filterElements() {
  var menuBtn = document.querySelectorAll('.content__header-menu-toggle');

  menuBtn.forEach(function(item) {               //[...z] change a nodelist into an array (need to look)
    item.addEventListener('click', function(e){ //e = event
      var filter = e.target.dataset.filter; // the event from the element which is choosen with the data-filter

      var gameCards = document.getElementById("content__container-games");
      var filteredGameCards = '';
      gameCards.innerHTML = '';

      if (filter === "all") {
        for (var i in myObj.searchcriteria) {
          filteredGameCards += generateGameCard(myObj.searchcriteria[i]);
        }
        gameCards.innerHTML = filteredGameCards;

      } else {
        myObj.searchcriteria.forEach(function(item) {
          if (item.console === filter) {
            filteredGameCards += generateGameCard(item);
          }

          var tags = item.tags;
          tags.forEach(function(tag) {
            if (tag === filter) {
              filteredGameCards += generateGameCard(item);
            }
          });
        });
        gameCards.innerHTML = filteredGameCards;
      }
    });
  });
} 

function generateGameCard(item) {
  var element = "<div class='content__container-games-card'><div class='content__container-games-card-front'><img class='content__container-games-card-images ' src='" + item.src + "'/></div><div class='content__container-games-card-back'><div class='content__container-games-card-back-content'><h2 class='content__container-games-card-back-headline'>" +
  item.name + "</h2><p class='content__container-games-card-back-text'>" + item.tags.concat().sort().join(', ') + ", " + item.console + "</p><a class='content__container-games-card-back-links' href='" +
  item.url + "' target='_blank'><i class='fab fa-youtube'></i><a/></div></div></div>";
  return element;
}

function activeTarget() {
  var menu = document.querySelectorAll('.content__header-menu-toggle');
  menu.forEach(function(menuItem) {               //[...z] change a nodelist into an array (need to look)
    menuItem.addEventListener('click', function(event){
      menu.forEach(function(menuItem) {   //loop throw the menus and remove this class
        menuItem.classList.remove('content__header-menu--active');
      });
      var target = event.target.classList.add('content__header-menu--active'); //and add this class on which the user click
    });
  });
}



//todos: make a sort btn
//place all games in Json with their content
//look git-hub

//hover to onclick ändern bei den Karten
// loop throw the json and give all cards the eventlistener(onclick) instead of hover/active 
// if another card is clicked the card which is clicked return back
// you need on the title a title img
// all you should change the filter, the filter should loop throw the json file not throw the classes

// function activeCard() {
//   var activeCard = document.querySelectorAll('.content__container-games-card');
//   activeCard.forEach(function(activeCardItem) {             
//     activeCardItem.addEventListener('click', function(ev){
//       activeCard.forEach(function(activeCardItem) {   
//         activeCardItem.classList.remove('content__container-games-card--active');
//       });
//       var target = ev.target.classList.add('content__container-games-card--active');
//     });
//   });
// }
