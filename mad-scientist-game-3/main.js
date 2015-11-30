// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var sharkImageWidth = 160;
	var sharkImageHeight = 60;
	var image = document.getElementById("source");

	function Player( x, y ) {
		this.position = [x,y];
		this.numOfWins = 0;
	}

	Player.prototype.move = function () {
			this.position[0] += 60;
		};

	var playerOne = new Player(0, canvas.height / 4);
	var playerTwo = new Player(0, 3 * canvas.height / 4 - 60);

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, playerOne.position[0], playerOne.position[1], sharkImageWidth, sharkImageHeight);
		ctx.drawImage(image, playerTwo.position[0], playerTwo.position[1], sharkImageWidth, sharkImageHeight);
	}
	
	function checkForMove(event) {
		if (event.which === 70) { // Check if "f" was pressed
			playerOne.move();
			draw();
			if (playerOne.position[0] === (canvas.width - 160) ) {
				$("h1").text("Player 1 wins!");
				$(document).off("keyup", checkForMove);
			}
		} else if (event.which === 74) { // Check if "j" was pressed
			playerTwo.move();
			draw();
			if (playerTwo.position[0] === (canvas.width - 160) ) {
				$("h1").text("Player 2 wins!");
				$(document).off("keyup", checkForMove);
			}
		}
	}

	function initializeGame() {
		
		playerOne.position[0] = 0;
		playerTwo.position[0] = 0;
		$("h1").text("Race on!");
		draw();
		$(document).on("keyup", checkForMove); // Event listener for keypress
	}

	initializeGame();
	$("button").click(initializeGame); // Reset game
});