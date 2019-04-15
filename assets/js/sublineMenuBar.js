//submenubar checkboxes//
//we need this function 16teen times



document.getElementById("singleplayer").addEventListener("click", singleplayer);

function singleplayer() {
document.getElementById("singleplayerCheck").checked = true;
}
document.getElementById("multiplayer2").addEventListener("click", multiplayer2);

function multiplayer2() {
document.getElementById("multiplayer2Check").checked = true;
}


document.getElementById("multiplayer4").addEventListener("click", multiplayer4);

function multiplayer4() {
document.getElementById("multiplayer4Check").checked = true;
}


document.getElementById("egoShooter").addEventListener("click", egoShooter);

function egoShooter() {
document.getElementById("egoShooterCheck").checked = true;
}


document.getElementById("thirdPerson").addEventListener("click", thirdPerson);

function thirdPerson() {
document.getElementById("thirdPersonCheck").checked = true;
}


document.getElementById("twoDGame").addEventListener("click", twoDGame);

function twoDGame() {
    x = document.getElementById("twoDGameCheck")
    if (x.checked = false) {
        document.getElementById("twoDGameCheck").checked = true;
    }
    else {
    x.checked = false;
    }
}


document.getElementById("rollenspiel").addEventListener("click", rollenspiel);

function rollenspiel() {
document.getElementById("rollenspielCheck").checked = true;
}


document.getElementById("online").addEventListener("click", online);

function online() {
document.getElementById("onlineCheck").checked = true;
}


document.getElementById("offline").addEventListener("click", offline);

function offline() {
document.getElementById("offlineCheck").checked = true;
}


document.getElementById("party").addEventListener("click", party);

function party() {
document.getElementById("partyCheck").checked = true;
}


document.getElementById("rennspiel").addEventListener("click", online);

function rennspiel() {
document.getElementById("rennspielCheck").checked = true;
}


document.getElementById("brainGames").addEventListener("click", brainGames);

function brainGames() {
document.getElementById("brainGamesCheck").checked = true;
}


document.getElementById("action").addEventListener("click", action);

function action() {
document.getElementById("actionCheck").checked = true;
}


document.getElementById("horror").addEventListener("click", online);

function horror() {
document.getElementById("horrorCheck").checked = true;
}


document.getElementById("crafting").addEventListener("click", crafting);

function crafting() {
document.getElementById("craftingCheck").checked = true;
}


document.getElementById("mmo").addEventListener("click", mmo);

function mmo() {
document.getElementById("mmoCheck").checked = true;
}