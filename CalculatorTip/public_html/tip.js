function calcTip() {
	var subtotalElem = document.getElementById("subtotal");
	var tipElem = document.getElementById("tip");
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = tipElem.value / 100;
	var total = tip*subtotal  + subtotal;
	totalElem.innerHTML = '$' + total;
}

