// Sanity check that JS is working
console.log("JS works");

$(document).ready(function() {
	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var a = canvas.width / 4;
	var b = canvas.height / 4;
	var c = canvas.width / 4;
	var d = canvas.height / 2;
	var da = 1;
	var dc = 1;

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
		drawPlayer1();
		drawPlayer2();
	}

	initializePlayers();

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlayer1();
		drawPlayer2();
	}

	$(window).keyup(checkKeyCode);

	function checkKeyCode(event) {
		if (event.which === 70) { // Check if "f" was pressed
			a += da;
			draw();
		} else if (event.which === 74) {
			c += dc;
			draw();
		}
	}

});