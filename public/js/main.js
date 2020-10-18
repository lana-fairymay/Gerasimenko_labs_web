var firstCounterTask1 = 0;
var firstCounterTask2 = 0;
var secondCounterTask2 = 0;

function resultTask1(fDigitTask1) {
	   console.warn(`Ты передал: ${fDigitTask1}`)
	   var div = document.getElementById('task1')
	   while(div.firstChild) div.removeChild(div.firstChild);
	   var h4 = document.createElement('h4');
	   h4.innerText = `You click: ${fDigitTask1} times`
	   firstCounterTask1 = 0;
	   div.append(h4)
}

function resultTask2(){
	firstCounterTask2 = parseInt(document.getElementById("firstCounterTask2").value)
	secondCounterTask2 = parseInt(document.getElementById("secondCounterTask2").value)
	console.warn(`Ты передал: ${firstCounterTask2}, ${secondCounterTask2}`)
	var div = document.getElementById('task2')
	while(div.firstChild) div.removeChild(div.firstChild);
	var h4 = document.createElement('h4');
	h4.innerText = `Результат: ${firstCounterTask2 + secondCounterTask2}`
	div.append(h4);
}

function resultTask3(){
	var arr = new Array(5);
	arr[0] = parseInt(document.getElementById("First").value)
	
	arr[1] = parseInt(document.getElementById("Second").value)
	arr[2] = parseInt(document.getElementById("Third").value)
	arr[3] = parseInt(document.getElementById("Forth").value)
	arr[4] = parseInt(document.getElementById("Fifth").value)
	for( var  i = 0; i < 5; i++){
		if (isNaN(arr[i])) arr[i] = 0
	}
	var div = document.getElementById('task3')
	while(div.firstChild) div.removeChild(div.firstChild);
	var h4 = document.createElement('h4');
	h4.innerText = `Результат: ${arr.map((digit) => digit*digit)}`
	div.append(h4);
}

function InformationTask4() {
	var div1 = document.getElementById('task4')
	var div2 = document.getElementById('task41')
	var p1 = document.createElement('p');
	var p2 = document.createElement('p');
	while(div1.firstChild) div1.removeChild(div1.firstChild);
	while(div2.firstChild) div2.removeChild(div2.firstChild);
	p2.innerText = `МГТУ СТАНКИН \n 09.03.01 \n Программное обеспечение средств вычислительной техники и автоматизированных систем`
	p1.innerText = `University \n Spetialty \n Direction `
	div1.append(p1);
	div2.append(p2);
}
function InformationTask41() {
	var div = document.getElementById('task4')
	while(div.firstChild) div.removeChild(div.firstChild);
	var div = document.getElementById('task41')
	while(div.firstChild) div.removeChild(div.firstChild);
}