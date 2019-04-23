

var ajaxhttp = new XMLHttpRequest();   
var url = "https://api.myjson.com/bins/bsui0"; //it doesn't enable to use (assets/json/games.json)//{}myjson http://myjson.com/ihhge 
var x = "";
var myObj = "";


function displayAllImages() {
  ajaxhttp.open("GET", url, true);  //get will be used to request dats//post will be used when the dats are more then 512Bytes //if the boolean is true it won'z be wainting for the request, but it is false it will(it is to be used for a Login field) 
  ajaxhttp.setRequestHeader("content-type", "application/json"); //Assigns the header a label or value pair, which is sent with the request
  ajaxhttp.onreadystatechange = function () {   //will be called by each change of the XHR-State
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) { //the number gives the state about it, if it ranges 4 it is done//ready state gives a state about the progress //sends the number of output code for example 200 for OK
            //debugger;
      myObj = JSON.parse(ajaxhttp.responseText); //change the data of the json file in a string with dats

      generateGames();
      generateMenu();
      generateSubMenu();
      filterElements();
      activeTarget();
    }  
  }
  ajaxhttp.send(null); //sends the request, optional with a string or Dom-Object-Dats
} 

function generateGames() {
  for (i in myObj.searchcriteria) { 
    x += "<div class='content__container-games-card " + myObj.searchcriteria[i].tags.join(' ') + ' ' + myObj.searchcriteria[i].console +
    "'><div class='content__container-games-card-front'><img class='content__container-games-card-images ' src='" + myObj.searchcriteria[i].src + "'/></div><div class='content__container-games-card-back'><div class='content__container-games-card-back-content'><h2 class='content__container-games-card-back-headline'>" + 
    myObj.searchcriteria[i].name + "</h2><p class='content__container-games-card-back-text'>" + myObj.searchcriteria[i].tags.sort().join(', ') + ", " + myObj.searchcriteria[i].console + "</p><a class='content__container-games-card-back-links' href='" + 
    myObj.searchcriteria[i].url + "' target='_blank'><i class='fab fa-youtube'></i><a/></div></div></div>";
  }
  document.getElementById('content__container-games').innerHTML += x;
}

/* generate the main Menu (but it isn't able to use (i need to loop only one time not 2 times, then it will func))*/ 
function generateMenu() {
  var consoleArray = [];
  var consoleList = "";

  for (i in myObj.searchcriteria) {
    if (consoleArray.indexOf(myObj.searchcriteria[i].console) == -1) {
      consoleArray.push(myObj.searchcriteria[i].console);
    }
  }

  for (i in consoleArray) {
    consoleList += "<li class='content__header-menu-toggle' data-filter='" + consoleArray[i] + "'>" + consoleArray[i] + "<span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span></li>";
  }
  document.getElementById('content__header-menu').innerHTML = "<li class='content__header-menu-toggle' data-filter='all'> Show all<span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span><span class='content__header-menu-border'></span></li>" + consoleList;
}


function generateSubMenu() {
  var tagArray = [];
  var tagList = "";

  for (i in myObj.searchcriteria) {
    for (j in myObj.searchcriteria[i].tags) {
      if (tagArray.indexOf(myObj.searchcriteria[i].tags[j]) == -1) {
        tagArray.push(myObj.searchcriteria[i].tags[j]);
      }
    }
  } 
  tagArray.sort();

  for (i in tagArray) {
    tagList += "<li class='content__header-sub-menu-toggle content__header-menu-toggle' data-filter='" + tagArray[i] + "'>" + tagArray[i] + "</li>";
  }
  document.getElementById('content__header-sub-menu').innerHTML = tagList;
}


function filterElements() {
  var menuBtn = document.querySelectorAll('.content__header-menu-toggle'); 
  console.log(menuBtn);
  menuBtn.forEach(function(item) {               //[...z] change a nodelist into an array (need to look)
    item.addEventListener('click', function(e){ //e = event
      var filter = e.target.dataset.filter; // the event from the element which is choosen with the data-filter 

      var gameCards = document.getElementsByClassName("content__container-games-card");
      if (filter == "all") {
        filter = "";
      }
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (var i = 0; i < gameCards.length; i++) {
        gameCards[i].classList.remove("show");

        if (gameCards[i].className.indexOf(filter) > -1) { //if card on the position 0 the className be there then add the class show
          gameCards[i].classList.add("show");
        }
      }
    });
  });
}
      
function activeTarget() {
  var menu = document.querySelectorAll('.content__header-menu-toggle'); 
  menu.forEach(function(menuItem) {               //[...z] change a nodelist into an array (need to look)
    menuItem.addEventListener('click', function(event){ 
      menu.forEach(function(menuItem) {   //loop throw the menus and remove this class
        menuItem.classList.remove('content__header-menu--active');
      });
      target = event.target.classList.add('content__header-menu--active'); //and add this class on which the user click
    });
  });
}

     

//todos: make a sort btn
//make a nightmode Btn
//place all games in Json with their content
//bring all on Bem status
//delete or change bad css
//change the css in scss
//look git-hub
//refactor js functions


