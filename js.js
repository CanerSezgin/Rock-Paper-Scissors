var computerScore = 0;
var userScore = 0;
var weapons = ["Rock", "Paper", "Scissors"];
var roundNo = 0;

// Random Choice for Computer
function computerPlay () {
	let compChoice = Math.floor(Math.random()*3);
	return compChoice;
}
	
	function rock()		 	{
	let userChoice = 0;
	round(userChoice);
	}

	function paper() 		{
	let userChoice = 1;
	round(userChoice);
	}

	function scissors() {
	let userChoice = 2;
	round(userChoice);
	}

function round(userChoice){
    let computer = computerPlay();
    let user = userChoice;
    document.getElementById("roundtext").innerHTML = "Round Result";

if(roundNo < 5) {
	roundNo++;
	// Picture 
	if (user === 0) 
		{document.getElementById("img_user").innerHTML = '<img src="images/rock.png" alt="Rock" id="img_rock">';}
	else if (user === 1)
		{document.getElementById("img_user").innerHTML = '<img src="images/paper.png" alt="Paper" id="img_paper">';}
	else 
		{document.getElementById("img_user").innerHTML = '<img src="images/scissors.png" alt="Scissors" id="img_scissors">';}

	if (computer === 0) 
		{document.getElementById("img_computer").innerHTML = '<img src="images/rock.png" alt="Rock" id="img_rock">';}
	else if (computer === 1)
		{document.getElementById("img_computer").innerHTML = '<img src="images/paper.png" alt="Paper" id="img_paper">';}
	else 
		{document.getElementById("img_computer").innerHTML = '<img src="images/scissors.png" alt="Scissors" id="img_scissors">';}
	
    if (user === 0	&& computer === 2	||
        user === 1	&& computer === 0	||
        user === 2	&& computer === 1) 	{
        userScore++;
    document.getElementById("round_number").innerHTML += roundNo + "<br>";
    document.getElementById("round_choices").innerHTML += "You: " + weapons[user] + 
    ", Computer: " + weapons[computer] + "<br>";
    document.getElementById("round_R").innerHTML += " WON!" + "<br>";
    document.getElementById("round_result").innerHTML = "You Won :)";
	}
    else if  (computer === 0	&& user === 2	||
              computer === 1	&& user === 0	||
              computer === 2	&& user === 1) 	{
        computerScore++;
    document.getElementById("round_number").innerHTML += roundNo + "<br>";
    document.getElementById("round_choices").innerHTML += "You: " + weapons[user] + 
    ", Computer: " + weapons[computer] + "<br>";
    document.getElementById("round_R").innerHTML += " LOST!" + "<br>";
    document.getElementById("round_result").innerHTML = "Computer Won :(";
    } else {
    document.getElementById("round_number").innerHTML += roundNo + "<br>";
    document.getElementById("round_choices").innerHTML += "You: " + weapons[user] + 
    ", Computer: " + weapons[computer] + "<br>";
    document.getElementById("round_R").innerHTML += "DRAW!" + "<br>";
    document.getElementById("round_result").innerHTML = "It's a Draw !";
    }
} 
	document.getElementById("game_info").innerHTML = "Round Number: " + roundNo + "/5";
	document.getElementById("left").innerHTML = userScore;
	document.getElementById("right").innerHTML = computerScore;
	if (roundNo == 5) {winner()}
}

// Final Decision for Winner of the Game
	function winner() {
    if (userScore > computerScore) { document.getElementById("finaltext").innerHTML = "YOU WON ! "; }
    else if (userScore < computerScore) { document.getElementById("finaltext").innerHTML = "YOU LOST ! "; }
    else { document.getElementById("finaltext").innerHTML = "A BORING DRAW"; }
	}

	function restart() {
		computerScore = 0;
		userScore = 0;
		roundNo = 0;
		document.getElementById("finaltext").innerHTML = "";
		document.getElementById("right").innerHTML = "";
		document.getElementById("left").innerHTML= "";
		document.getElementById("game_info").innerHTML= "";
		document.getElementById("round_R").innerHTML= "";
    	document.getElementById("round_result").innerHTML= ""; 
    	document.getElementById("round_choices").innerHTML= "";
    	document.getElementById("round_number").innerHTML= "";
    	document.getElementById("roundtext").innerHTML = "";
    	document.getElementById("img_computer").innerHTML = "";
    	document.getElementById("img_user").innerHTML = "";
	}
