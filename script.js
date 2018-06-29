"use strict";

function trollBattle() {
	var action = window.prompt("You're walking through a forest, minding your own business, and suddenly a troll appears! Do you FIGHT the troll, BRIBE the troll or RUN for your life?").toUpperCase();
	
	//switch statement to handle initial action
	switch(action) {
		case "FIGHT":
			var strong = window.prompt("Wow, how brave! Are you strong? (YES or NO)").toUpperCase();
			var smart = window.prompt("Are you smart? (YES or NO)").toUpperCase();
			if(strong === "YES" || smart === "YES") {
				document.getElementById("result").innerHTML="You only need to be either stronger or smarter to beat a troll.</br> You win, good job!";
			} else {
				document.getElementById("death").innerHTML="You're not strong or smart? </br> I guess you shouldn't have fought a troll.</br> You have died.";
			}
		break;
		
		case "BRIBE":
			var money = window.prompt("You have to pay the troll toll, do you have any money? (YES or NO)").toUpperCase();
			var dollars = window.prompt("This troll only accepts troll bucks. Is your money in troll dollars? (YES or NO)").toUpperCase();
			if (money === "YES" && dollars === "YES") {
				document.getElementById("result").innerHTML = "Great job.</br> You have paid the troll and lived to tell about it!";
			} else {
				document.getElementById("death").innerHTML = "You fool, you need troll dollars to pay off a troll!</br> You have died!";
			}
		break;
		
		case "RUN":
			var speed = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if (speed === "YES") {
				document.getElementById("result").innerHTML = "Your speed allowed you to get away and live another day.</br> But can you still live with yourself?";
			} else {
				document.getElementById("death").innerHTML = "You coward, if you choose to run, make sure you're at least faster than a troll. </br> You have died!";
			}
		break;
		
		default: window.alert("Please type FIGHT, BRIBE or RUN to play the game");	
		trollBattle();
	} // end of switch statement	
}

document.getElementById("button").addEventListener("click", trollBattle, false);