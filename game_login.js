
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
    localStorage.setItem(player1_name, "p1");
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem(player2_name, "p2");
    window.location = "index.html";
}

