/*Внимание! Т.к. урок посвящен функциям, 
то для удобства вывода все функции с заданиями обернуты в 
дополнительные функции "function taskN", чтобы постоянно 
не переходить между страницами HTML и Scripts5.js
*/

//Task 1
function task1() {
	document.write(`Создаем функцию с 3-мя аргументами (number1...number3),
		в теле функции сразу же вызываем оператор return и
		возвращаем наше значение<br>
		(number1 - number2) / number3), обратите внимание на порядок действий согласно условию. <br><br>`)
	function numbers3(number1,number2,number3) {
		return document.write('(' + number1 + ' - ' + number2 + ') / ' + number3 + ' = ' + //запись примера текстом
		(number1 - number2) / number3) //само решение
	};
	numbers3(10,2,2);//аргументы функции
};

//Task 2
function task2() {
	document.write(`Ситуация аналогична предыдущему заданию, однако аргумент у функции один.<br>
		Переменную Х с помощью метода Math.pow возводим во 2-ю и 3-ю степень.<br>
		Полученные значения отображаем на экране.<br><br>`)
	function degree(x) {
		return document.write(`${x}<sup>2</sup> = ${Math.pow(x, 2)}<br>
			${x}<sup>3</sup> = ${Math.pow(x, 3)}<br>`)
	};
	degree(5);//аргумент функции
};

//Task 3
function task3() {
	document.write(`Сделано 3 разные функции:<ol><br>`);
		
	//Функция поиска максимального числа с 2 аргументами
	document.write(`<li>Поиск максимального числа из 2-х чисел:<br>
	(функция имеет 2 аргумента A и B, вводим для удобства переменную C,
	записываем в переменную C максимальное значение с
	помощью тернарного оператора (при этом равенство не проверяется),
	возвращаем с помощью оператора return переменную С)
	</li><ul>`);
	function max(a,b) {
		a > b ? c = document.write(`<li>${a}</li>`) : c = document.write(`<li>${b}</li>`);
		document.write (`<br></ul>`);
		return c;
	};
	max(10,5);
	
	//Функция поиска минимального числа с 2 аргументами
	document.write(`<li>Поиск минимального числа из 2-х чисел:<br>
	(разница с предыдущей функцией лишь в том, что используется знак "<");
	</li><ul>`);
	function min(a,b) {
		a < b ? c = document.write(`<li>${a}</li>`) : c = document.write(`<li>${b}</li>`);
		document.write (`<br></ul>`);
		return c;
	};
	min(10,5);
	
	//Функция сравнения 2 чисел
	document.write(`<li>Задание усложнено. Функция сравнивает 2 аргумента и выводит строку
		являются ли числа больше, меньше или равны между собой:<br>
	(проверка производится оператором if, сравнивается равенство A и B, 
	иначе проверяется A > B, в противном случае действует третий вариант.
	Для удобства в переменную С записываем только строковое значение "больше", "меньше", "равно".
	В документе выводим строку из переменных А и B с указанием равенства записанного в переменной C в сл.порядке [a-c-b]);
	</li><ul>`);
	function equal(a,b) {
		let c;
		if (Number(a) === Number(b)) {
			c = 'равно';
		} else if (Number(a) > Number(b)) {
			c = 'больше';
		} else {
			c = 'меньше';
		}
		document.write (`<li>${a} ${c} ${b}</li>`);
		return c;
	};
	equal(10,5);
	document.write(`</ul></ol>`);
};

//Task 4
//глобальные переменные вне функции
let arrayInput;
let arr = [];
//функция возврата строки пользователя и создания массива на основе разделителя пробела
function task4ArrayInput() {
	document.write(`Создано 2 глобальные переменные (arrayInput и arr = []), затем создано 2 функции:<br>
	<ol><li>
	Task4ArrayInput() - вовращает строку пользователя и задает массив значений с разделением через метод 
	split на основе пробела "arrayInput.split(' ')"
	</li><li>
	Task4ArrayOutput() - выводит массив через цикл for на экран с помощью таблицы, 
	предварительно обрабатывая взятые значения массива.
	</li></ol>
	<p>Сначала переписываем значение массива с помощью объекта Number(). 
	Затем проверяем с помощью тернарного оператора значение на тип "Not a Number" 
	с помощью метода Number.isNaN(), если значение массива не является NaN (NaN = false), 
	то показываем его.<br>
	(если не совсем ясна запись тернарного оператора в 
	комментариях скрыт аналог через логический оператор if)<br>
	<ul><li>
	В процессе отлова ошибок нашлось проскальзывающее в конечный массив значение 
	"бесконечность" (Infinity), дополнительно объявили проверку на это значение с помощью метода 
	Number.isFinite().
	</li><li>
	Ещё "баг" получался вводом множества пробелов подряд (они возвращались со значением 0, 
	что попадало в массив), решено использованием проверки if перед записью в массив, 
	условием является - значение не равно пустому, т.е. ' '
	</li></ul>`);
	arrayInput = prompt('Задание №4. Введите массив чисел через пробел');
	arr = arrayInput.split(' ');
};
//функция логической обработки и вывода массива
function task4ArrayOutput() {
	document.write(`<table><tr><td>Массив значений</td>`);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== '') {
			arr[i] = Number(arr[i]);
		}
		(Number.isNaN(arr[i]) == false) && (Number.isFinite(arr[i])) 
		? document.write(`<td>${arr[i]}</td>`) : false;
		//аналог написанного выше тернарного оператора через лог.оператор if:
		//if ((Number.isNaN(arr[i]) == false) && (Number.isFinite(arr[i]))){
		//document.write(`<td>${arr[i]}</td>`)}
	};
	document.write(`</tr></table>`);
};

//Task 5
function task5() {
	document.write(`Создаем функцию isEven с 1 аргументом(а),
		в теле функции создаем переменную result, с помощью тернарного оператора
		проверяем остаток деления на 2 ((a % 2) == 0), 
		в зависимости от результата присваиваем значение переменной result - true/false<br>
		Выводим с помощью оператора return значение переменной result, 
		приправленное текстом.<br>
		Для проверки вызвали функцию isEven() 2 раза с разными значениями аргумента - 5 и 10.<br><br>`)
	function isEven(a) {
		let result;
		(a % 2) == 0 ? result = true : result = false;
		return document.write(`<p>Число ${a} делится на 2?</p>
		<ul><li>${result}</li></ul>`);
	};
	isEven(5);
	isEven(10);
};

//Task 6
//т.к. я не совсем понимаю как вызвать вложенную функцию, 
//пришлось создать отдельную функцию для работы, 
//аналогичную из предыдущего задания и возвращающую только true/false
function isEven2(a) {
		let result;
		(a % 2) == 0 ? result = true : result = false;
		return result;
};
function task6() {
	document.write(`Создаем функцию task6() с 1 аргументом(а),
		создаем переменные для записи нового массива arr[] и
		переменная для счета элементов нового цикла j.<br>
		Создаем массив A и вносим в него значения. 
		Создаем цикл for от 0 до размера массива, внутри создаем логический оператор if,<br>
		каждую итерацию вызываем функцию проверки из предыдущего задания,
		проверяем является ли значение true (логика JS позволяет при проверке не записывать дополнительно "<значение> == true"), тогда добавляем его в массив и увеличиваем j на 1 
		(это позволит отдельный счетчик позволит заполнять каждый элемент массива.<br>
		Выводим результат.<br><br>`)
	let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	let arr = [];
	let j = 0;
	for (i = 0; i < a.length; i++) { //логика JS позволяет при проверке не записывать дополнительно "<значение> == true"
		if (isEven2(a[i])) {
			arr[j] = a[i];
			j++;
		};
	};
	document.write(`В массиве чисел от ${a[0]} до ${a[a.length-1]} четными являются:<br>`)
	return document.write(`<ul><li>${arr}</li></ul>`)
};

//Task 7
function task7() {
	document.write(`Я понял условия задания так, 
		поэтому выполнил такую логику:<br>
		<ul>
		<li>если нет 2-го аргумента функции - то пирамидка строится из чисел, 
		с высотой равной числу, и приращиванием чисел в ряду,</li>
		<li>если 2-й аргумент функции есть - символ или эмодзи, 
		то пирамидка строится на высоту первого аргумента из символов из 2-го аргумента.</li>
		</ul><p><br>
		Создаем функцию (pyramid) с 1 аргументом (height),
		а также 1 переменную (string).<br>
		Создаем цикл от 1 до высоты пирамиды (height) со счетчиком итераций i - 
		это будущие ряды пирамиды.<br>
		Внутри создаем ещё цикл от 1 до i со счетчиком итераций j -
		это будущее количество значков в строке.<br>
		Внутри циклов проверяем - есть ли 2-й аргумент у функции?<br>
		- Если да - приращиваем к переменной строки (string) значения i 
		(самих итераций первого цикла).<br>
		- Если нет - приращиваем к переменной строки (string) значения 
		2-го аргумента (именно значка).<br>
		В конце внутреннего цикла в переменную string добавляем перенос строки тэг "br".<br>
		Для красоты появляемые пирамидки обернуты в div с уникальным классом, прописанным в style.css
		<br><br>`)
		
	function pyramid (height) {
		let string = '<div class = "pyramid">';
		for (let i = 1; i <= height; i++) {
			for (let j = 1; j <= i; j++) {
				arguments[1] == undefined ? string += i : string += arguments[1];
			};
			string += '<br>';
		};
		string += '</div>';
		return document.write(string);
	};
	//СТАРОЕ ИСПОЛНЕНИЕ (оптимизация кода наше ВСЁ!)
	//обратите внимание на повторение одних и тех же действий внутри логических операторов
	//это ЗЛО для программиста (фактически 2 части функции отличаются 1 строчкой)
	//Поэтому решено было оптимизировать код. Получилось 10 строк кода против 19
	/*
	function pyramid (height) {
		let string = '<div class = "pyramid">';
		if (arguments[1] == undefined) {
			for (let i = 1; i <= height; i++) {
				for (let j = 1; j <= i; j++) {
					string += i;
				};
			string += '<br>'
			};
		} else {
			for (let i = 1; i <= height; i++) {
				for (let j = 1; j <= i; j++) {
					string += arguments[1];
				};
			string += '<br>'
			};
		};
	string += '</div>'
	return document.write(string);
	};
	*/
	pyramid(9);
	pyramid(15);
	pyramid(15,'€');
	pyramid(13,'₿');
	pyramid(10,'💲');
	pyramid(12,'☢️');
	pyramid(10,'❤️');
};

//Task 8
function task8() {
	document.write(`Код в JS-файле, уже подобное выполнял, поэтому комментировать не стану.<br>
		Перевернутый треугольник появляется автоматически с помощью развернутого цикла while
		<br<br>`);
	let i = 0, j = 0, max = 0;
	let space = "", pyramid = "";

	//проверка на число
	while (true) {
		max = +prompt('№8. Укажите высоту треугольника')
		if (Number.isNaN(max)) {
			alert ('Укажите число!');
		} else {
			break;
		};
	};

	//построение треугольника
	document.write (`<div class = "pyramid">`);//обертка с уникальным классом
	while (i < max) { //цикл от 0  до высоты треугольника
	  space = "", pyramid = ""; //обнуляем параметры переменных
	  for (j = 0; j < max - i; j++) space += "&nbsp;&nbsp;"; //набираем в строку неразрывные пробелы
	  for (j = 0; j < 2*i + 1; j ++) pyramid += "*"; //набираем в строку звездочки
	  document.write (space + pyramid + '<br>'); //выводим строку и переходим на сл.строку
	  i++; //итерация +1
	};
	document.write (`</div>`);//обертка с уникальным классом

	//построение обратного треугольника
	document.write (`<div class = "pyramid">`);//обертка с уникальным классом
	i = max-1; //устанавливаем i от высоты треугольника минус 1, чтобы 2 треугольника были равны
	while (i >= 0) { //цикл от высоты треугольника до 0
	  space = "", pyramid = ""; //обнуляем параметры переменных
	  for (j = 0; j < max - i; j++) space += "&nbsp;&nbsp;"; //набираем в строку неразрывные пробелы
	  for (j = 0; j < 2*i + 1; j++) pyramid += "*"; //набираем в строку звездочки
	  document.write (space + pyramid + '<br>'); //выводим строку и переходим на сл.строку
	  i--; //итерация -1
	};
	document.write (`</div>`);//обертка с уникальным классом
};
//Task 9
//Task 10
//Task 11
//Task 12
//Task 13