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
	deleteText(div)
	var h4 = document.createElement('h4');
	h4.innerText = `Результат: ${firstCounterTask2 + secondCounterTask2}`
	div.append(h4);
}

function resultTask3(){
	var arr = [];
	var div = document.getElementById("values")
	console.warn(div.getElementsByTagName("input"))
	for (i = 0; i < 5; i++)
	if (isNaN(div.getElementsByTagName("input")[i].value)) arr.push(0)
	else arr.push(div.getElementsByTagName("input")[i].value)
	deleteText(document.getElementById("task3"))
	var h4 = document.createElement('h4');
	h4.innerText = `Результат: ${arr.map((digit) => digit*digit)}`
	document.getElementById("task3").append(h4);
	console.log(arr.map((digit) => digit*digit))
}

function InformationTask4() {
	var div1 = document.getElementById('task4')
	var div2 = document.getElementById('task41')
	var p1 = document.createElement('p');
	var p2 = document.createElement('p');
	deleteText(div1)
	deleteText(div2)
	p2.innerText = `МГТУ СТАНКИН \n 09.03.01 \n Программное обеспечение средств вычислительной техники и автоматизированных систем`
	p1.innerText = `University \n Spetialty \n Direction `
	div1.append(p1);
	div2.append(p2);
}
function InformationTask41() {
	var div = document.getElementById('task4')
	deleteText(div)
	var div = document.getElementById('task41')
	deleteText(div)
}

function deleteText(div) {
	while(div.firstChild) div.removeChild(div.firstChild);
}