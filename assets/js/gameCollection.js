

var ajaxhttp = new XMLHttpRequest();  //generate a 
var url = "https://api.myjson.com/bins/9m2mc"; //it doesn't enable to use (assets/json/dats.json)//{}myjson http://myjson.com/ihhge 
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
          x += "<div class='content__container-games-card" + myObj.searchcriteria[i].tags.slice(-1) + myObj.searchcriteria[i].tags.slice(-2) + myObj.searchcriteria[i].tags.slice(-3) +
          myObj.searchcriteria[i].tags.slice(-4) + myObj.searchcriteria[i].tags.slice(-5) + myObj.searchcriteria[i].tags.slice(-6) + myObj.searchcriteria[i].tags.slice(-7) + 
          myObj.searchcriteria[i].tags.slice(-8) + myObj.searchcriteria[i].tags.slice(-9) + myObj.searchcriteria[i].tags.slice(-10) + 
          "'><div class='content__container-games-card-front'><img class='content__container-games-card-images ' src='" + myObj.searchcriteria[i].src + "'/></div><div class='content__container-games-card-back'><div class='content__container-games-card-back-content'><h2 class='content__container-games-card-back-headline'>" + 
          myObj.searchcriteria[i].name + "</h2><p class='content__container-games-card-back-text'>" + myObj.searchcriteria[i].tags + "</p><a class='content__container-games-card-back-links' href='" + 
          myObj.searchcriteria[i].url + "' target='_blank'><i class='fab fa-youtube'></i><a/></div></div></div>";
        }
        document.getElementById('content__container-games').innerHTML += x;
    console.log(myObj);

    }
  } 
  ajaxhttp.send(null); //sends the request, optional with a string or Dom-Object-Dats
}

//todos: make a sort btn
//make a nightmode Btn
//place all games in it with their content
//bring all on Bem status
//delete or change bad css
//change the css in scss
