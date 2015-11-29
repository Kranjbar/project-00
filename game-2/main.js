// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var pOneXPos = canvas.width / 4;
	var pOneYPos = 40;
	var pTwoXPos = 3 * canvas.width / 4;
	var pTwoYPos = 40;
	var changeInYPos = 20;

	function drawPlayerOne() {
		ctx.beginPath();
		ctx.arc(pOneXPos,pOneYPos,40,0,2*Math.PI);
		ctx.fillStyle = "#FFFFFF";
		ctx.fill();
		ctx.stroke();
	}

	function drawPlayerTwo() {
		ctx.beginPath();
		ctx.arc(pTwoXPos,pTwoYPos,40,0,2*Math.PI);
		ctx.fillStyle = "#FFFFFF";
		ctx.fill();
		ctx.stroke();
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlayerOne();
		drawPlayerTwo();
	}

	function initializeGame() {
		pOneYPos = 40;
		pTwoYPos = 40;
		$("h1").text("Race on!");
		draw();
		$(document).on("keyup", checkKeyCode); // Event listener for keypress
	}

	function checkKeyCode(event) {
		if (event.which === 81) { // Check if "q" was pressed
			pOneYPos += changeInYPos;
			draw();
			if (pOneYPos === (canvas.height - 40) ) {
				$("h1").text("Player 1 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		} else if (event.which === 221) { // Check if "]" was pressed
			pTwoYPos += changeInYPos;
			draw();
			if (pTwoYPos === (canvas.height - 40) ) {
				$("h1").text("Player 2 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		}
	}

	initializeGame();
	$("button").click(initializeGame); // Reset game
});