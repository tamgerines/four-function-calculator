var buttons = document.getElementsByClassName("button");
for (var i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", handleButtonClick, false);
}

var left = null;
var operator = null;
var right = null;
var result = null;

function handleButtonClick(e) {
	console.log(e); //for testing
	if (e.target.className == "number button") {
		handleNumber(e.target.id);
	}
	else {
		handleOperator(e.target.id);
	}
}

function handleNumber(num) {
	if (left == null) {
		//store left
		left = num;
		document.getElementById("display").innerText = left;
	}
	else if (operator == null) {
		//concatenate left
		left += num;
		document.getElementById("display").innerText = left;
	}
	else if (right == null) {
		//store right
		right = num;
		document.getElementById("display").innerText = right;
	}
	else {
		//concatenate right
		right += num;
		document.getElementById("display").innerText = right;
	}
}

function handleOperator(op) {
	switch (op) {
		case "C":
			left = null;
			operator = null;
			right = null;
			document.getElementById("display").innerText = "0";
			break;
		case "=":
			if (right != null) {
				//evaluate
				evaluate();
				left = result;
				operator = null;
				right = null;
			}
			break;
		default:
			if (left == null) {
				//store 0 in left and store operator
				left = 0;
				operator = op;
			}
			else if (right != null) { //multiple operations
				evaluate();
				left = result;
				operator = op;
				right = null;
			}
			else {
				//store operator
				operator = op;
			}
			break;
	}
}

function evaluate() {
	switch (operator) {
		case "+":
			result = Number(left) + Number(right);
			break;
		case "-":
			result = left - right;
			break;
		case "*":
			result = left * right;
			break;
		case "/":
			result = left / right;
			break;
		default:
			break;
	}
	document.getElementById("display").innerText = result;
}

$(document).keypress(function(event) {
	console.log(event); //for testing
	switch (event.which) {
		case 48:
			handleNumber("0");
			break;
		case 49:
			handleNumber("1");
			break;
		case 50:
			handleNumber("2");
			break;
		case 51:
			handleNumber("3");
			break;
		case 52:
			handleNumber("4");
			break;
		case 53:
			handleNumber("5");
			break;
		case 54:
			handleNumber("6");
			break;
		case 55:
			handleNumber("7");
			break;
		case 56:
			handleNumber("8");
			break;
		case 57:
			handleNumber("9");
			break;
		case 43:
			handleOperator("+");
			break;
		case 45:
			handleOperator("-");
			break;
		case 42:
			handleOperator("*");
			break;
		case 47:
			handleOperator("/");
			break;
		case 61:
			handleOperator("=");
			break;
		case 13: //enter
			handleOperator("=");
			break;
		case 99: //lowercase c
			handleOperator("C");
			break;
		default:
			break;
	}
});