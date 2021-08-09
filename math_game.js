name1 = localStorage.getItem("Username 1:");
name2 = localStorage.getItem("Username 2:");
score1 = 0;
score2 = 0;

//Appending names into html elements
document.getElementById("display1").innerHTML = "Player 1: "+name1;
document.getElementById("display2").innerHTML = "Player 2: "+name2;
document.getElementById("score1").innerHTML = "Score: "+score1;
document.getElementById("score2").innerHTML = "Score: "+score2;

function ask(){
    //No need for exception handling because input type changed to numerical!
    number1 = document.getElementById("number_in1").value;
    number2 = document.getElementById("number_in2").value;
    answer = parseInt(number1)*parseInt(number2);

        
    answerLabel = "<b><p style='font-size: 45px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'>Answer Here: </p></b>";
    question =  '<b><span><h2 id="question_placeholder">'+number1+" x "+number2+'</h4></span></b>';
    toAnswer =  '<input type="text" id="user_answer" style="margin-right: 10px; width: 280px; height: 40px; font-size: 25px; border-color: black; border-radius: 20px; margin-left: 10px;"></input>';
    button = '<b><button id="button" onclick="check()" style="color: black; background-color: green; border-radius: 5px; width: 100px; height: 30px; border-color: black; font-size: 15px;">Check</button></b>';
    row = question+"<span>"+answerLabel+toAnswer+"</span>"+button;
    document.getElementById("answer").innerHTML = row;

    document.getElementById("number_in1").innerHTML = "";
    document.getElementById("number_in2").innerHTML = "";
}
