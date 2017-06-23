function troll_fight () {
	var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him or RUN?").toUpperCase();
	
	switch(troll) {
		case "FIGHT":
		var strong = prompt("How brave! Are you strong? (YES or NO)").toUpperCase();
		var smart = prompt("Are you smart? (YES or NO)").toUpperCase();
		if(strong === "YES" || smart === "YES") {
			document.getElementById("result").innerHTML="You only need one of the two! You defeat the troll, good job!";
		} else {
			document.getElementById("death").innerHTML="You're not strong or smart? <br>Guess you shouldn't have fought a troll. <br>You have died.";
		}
		break;
		
		case "PAY":
		var money = prompt("Do you have any money? (YES or NO)").toUpperCase();
		var dollars = prompt("Is your money in troll dollars? (YES or NO)").toUpperCase();
		if (money==="YES" && dollars==="YES") {
			document.getElementById("result").innerHTML="Great! You have paid the troll and live to tell about it!";
		} else {
			document.getElementById("death").innerHTML="Uh-oh! This troll only accepts troll dollars!! <br>You have died!";
		}
		break;
		
		case "RUN":
		var fast = prompt("You decide to run. Are you fast? (YES or NO)").toUpperCase();
		var headStart = prompt("Did you get a head start? (YES or NO)").toUpperCase();
		if (fast==="YES" || headStart==="YES"){
			document.getElementById("result").innerHTML="You manage to get away...barely!";
		} else {
			document.getElementById("death").innerHTML="You need to be quicker, or get a head start.<br> Guess you'll make a nice troll lunch.";
		}
		break;
		default:
		window.alert("I didn't understand your choice. Hit refresh and try again, this time please type FIGHT, PAY or RUN!");
	}
}

if (window.addEventListener) {
	window.addEventListener("load", troll_fight, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", troll_fight);
}














