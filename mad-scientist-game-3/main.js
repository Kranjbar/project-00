// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var sharkImageWidth = 160;
	var sharkImageHeight = 60;
	var image = document.getElementById("source");

	function Player( name, x, y ) {
		if (name) {
			this.name = name;
		} else {
			this.name = "Player";
		}
		this.position = [x,y];
		this.numOfWins = 0;
	}

	Player.prototype.move = function () {
			this.position[0] += 30;
		};

	var playerOne = new Player(prompt("What is Player 1's name?"), 0, canvas.height / 4);
	var playerTwo = new Player(prompt("What is Player 2's name?"), 0, 3 * canvas.height / 4 - 60);
	$("th").eq(0).text(playerOne.name + " Win Count");
	$("th").eq(1).text(playerTwo.name + " Win Count");

	function drawPlayers() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, playerOne.position[0], playerOne.position[1], sharkImageWidth, sharkImageHeight);
		ctx.drawImage(image, playerTwo.position[0], playerTwo.position[1], sharkImageWidth, sharkImageHeight);
	}
	
	function checkForMove(event) {
		if (event.which === 70) { // Check if "f" was pressed
			playerOne.move();
			drawPlayers();
			if (playerOne.position[0] === (canvas.width - 160) ) {
				playerOne.numOfWins += 1;
				$("h1").text(playerOne.name + " wins!");
				$("th").eq(2).text(playerOne.numOfWins);
				$(document).off("keyup", checkForMove);
			}
		} else if (event.which === 74) { // Check if "j" was pressed
			playerTwo.move();
			drawPlayers();
			if (playerTwo.position[0] === (canvas.width - 160) ) {
				playerTwo.numOfWins += 1;
				$("h1").text(playerTwo.name + " wins!");
				$("th").eq(3).text(playerTwo.numOfWins);
				$(document).off("keyup", checkForMove);
			}
		}
	}

	function initializeGame() {
		
		playerOne.position[0] = 0;
		playerTwo.position[0] = 0;
		$("h1").text("Race on!");
		drawPlayers();
		$(document).on("keyup", checkForMove); // Event listener for keypress
	}

	initializeGame();
	$("button").click(initializeGame); // Reset game
});