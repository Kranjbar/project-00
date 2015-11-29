// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var a = 0;
	var b = canvas.height / 4;
	var c = 0;
	var d = canvas.height / 2;
	var da = 10;
	var dc = 10;

	function drawPlayer1() {
		ctx.beginPath();
		ctx.rect(a, b, 50, 50);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
	}

	function drawPlayer2() {
		ctx.rect(c, d, 50, 50);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
	}

	function initializePlayers() {
		a = 0;
		c = 0;
		draw();
		$("h1").text("Race on!");
		$(document).on("keyup", checkKeyCode); // Event listener for keypress
	}

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlayer1();
		drawPlayer2();
	}

	function checkKeyCode(event) {
		if (event.which === 70) { // Check if "f" was pressed
			a += da;
			draw();
			if (a === (canvas.width - 50) ) {
				$("h1").text("Player 1 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		} else if (event.which === 74) { // Check if "j" was pressed
			c += dc;
			draw();
			if (c === (canvas.width - 50) ) {
				$("h1").text("Player 2 wins!");
				$(document).off("keyup", checkKeyCode);
			}
		}
	}

	initializePlayers(); // Start game
	$("button").click(initializePlayers); // Reset game
});