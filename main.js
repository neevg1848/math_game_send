function addUser(){
    username1 = document.getElementById("name1").value;
    username2 = document.getElementById("name2").value;

    localStorage.setItem("Username 1:", username1);
    localStorage.setItem("Username 2:", username2);

    window.location.href = "math_game.html";
}