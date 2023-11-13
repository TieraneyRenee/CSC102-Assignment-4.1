function playCraps() {
    
    /*this is a function to play Craps in the game.html
    For Craps: sum of 7 or 11 loses. even doubles wins, everything else is a push 
    Tieraney Stewart
    TStewart38235@uat.edu
    October 2023*/

    console.log("playCraps() started");


    var die1 = Math.ceil(Math.random() * 6);//generates a random number, multiplies that number by 6, and rounds given number up
    console.log("die1 result = " + die1);
    document.getElementById("die1Result").innerHTML = "die1 result = " + die1; //Records and displays the result of die 1


    var die2 = Math.ceil(Math.random() * 6);//generates a random number, multiplies that number by 6, and rounds given number up
    console.log("die2 result = " + die2);
    document.getElementById("die2Result").innerHTML = "die2 result = " + die2; //Records and displays the result of die 2


    var sum = die1 + die2;
    console.log("sum result = " + sum); //one '=' is a demand, two '==' asks
    document.getElementById("sumResults").innerHTML = "sum result = " + sum; //Records and displays the result of the sum of the reults of die1 and die2


    if (sum == 7 || sum == 11) {
        document.getElementById("gameResults").innerHTML = "Well 'Craps'! You lost to the Dung Beetles.";//check for 7 or 11 - meaning a loss. Two '==' so it is asking if it is 7.
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameResults").innerHTML = "Yay! You won!";//Checking for doubles and if it is even
    } else {
        document.getElementById("gameResults").innerHTML = "You did not win or lose.";//Not a win, not a loss- so a push
    }
}





