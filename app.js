//alert('yo js works');

user_score=0;
comp_score=0;

var playing = parseInt(prompt("Do you want to play rock paper scissors? Enter 1 for yes, 2 for no"));
while (playing<2){
	var choices = ["rock", "paper", "scissors"];
	var rand = choices[Math.floor(Math.random() * choices.length)];
	var player_choice = parseInt(prompt("Which do you want to play: 1) rock, 2) paper, or 3) scissors? Select the # that goes with your choice."));
	if (rand == "rock" && player_choice == "1"){
		alert("it's a tie! I picked " + rand);
		user_score=user_score;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "paper" && player_choice == "1"){
		alert("you lose, I picked " + rand);
		user_score=user_score;
		comp_score=comp_score + 1;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));	}
	else if(rand == "scissors" && player_choice == "1"){
		alert("you win, I picked " + rand);
		user_score=user_score + 1;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "rock" && player_choice == "2"){
		alert("you win, I picked " + rand);
		user_score=user_score + 1;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "paper" && player_choice == "2"){
		alert("it's a tie! I picked " + rand);
		user_score=user_score;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "scissors" && player_choice == "2"){
		alert("you lose, I picked " + rand);
		user_score=user_score;
		comp_score=comp_score + 1;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "rock" && player_choice == "3"){
		alert("you lose, I picked " + rand);
		user_score=user_score;
		comp_score=comp_score + 1;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "paper" && player_choice == "3"){
		alert("you win, I picked " + rand);
		user_score=user_score + 1;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
	else if(rand == "scissors" && player_choice == "3"){
		alert("it's a tie! I picked " + rand);
		user_score=user_score;
		comp_score=comp_score;
		alert("Your score is " + user_score + ". The computer score is " + comp_score);
		var playing = parseInt(prompt("Do you want to keep playing rock paper scissors? Enter 1 for yes, 2 for no"));
	}
}
alert("Your final score is " + user_score + ". The computer score is " + comp_score + ".")