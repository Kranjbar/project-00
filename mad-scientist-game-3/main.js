// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var pOneXPos = 0;
	var pOneYPos = canvas.height / 4;
	var pTwoXPos = 0;
	var pTwoYPos = 3 * canvas.height / 4 - 60;
	var imageWidth = 160;
	var imageHeight = 60;
	var changeInPos = 60;
	var image = document.getElementById("source");
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, pOneXPos, pOneYPos, imageWidth, imageHeight);
		ctx.drawImage(image, pTwoXPos, pTwoYPos, imageWidth, imageHeight);
	}

	function checkKeyCode(event) {
		if (event.which === 70) { // Check if "f" was pressed
			pOneXPos += changeInPos;
			draw();
			if (pOneXPos === (canvas.width - 160) ) {
				$("h1").text("Player 1 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		} else if (event.which === 74) { // Check if "j" was pressed
			pTwoXPos += changeInPos;
			draw();
			if (pTwoXPos === (canvas.width - 160) ) {
				$("h1").text("Player 2 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		}
	}

	function initializeGame() {
		pOneXPos = 0;
		pTwoXPos = 0;
		$("h1").text("Race on!");
		draw();
		$(document).on("keyup", checkKeyCode); // Event listener for keypress
	}

	initializeGame();
	$("button").click(initializeGame); // Reset game
});