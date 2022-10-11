//Скрипт позволяющий переключать стиль элемента при нажатии на чек-бокс "Задание проверено"
//Этот скрипт дело моих рук + помощь интернета. 
//Конкретно помощь интернета заключалась в способе поиска элемента по id и принцип замены стиля.
//Я же в свою очередь сделал удобную функцию поиска по аргументу.
function approved(i) {
let chbox = document.getElementById(`div${i}`);
let chAppr = document.getElementById(`checkAproved${i}`);
chbox.classList.toggle('approved');
chAppr.classList.toggle('checkAproved');
}

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
	arrayInput = prompt('Задание №4. Введите массив чисел через пробел', '1A 2B 3 4C 5D 6 7 ABC 12 14     AD 1 2 3');
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
	document.write(`Код в JS-файле, уже подобное выполнял, "комменты" внутри.<br>
		Перевернутый треугольник появляется автоматически с помощью развернутого цикла while
		<br<br>`);
	let i = 0, j = 0, max = 0;
	let space = "", pyramid = "";

	//проверка на число
	while (true) {
		max = +prompt('№8. Укажите высоту треугольника', '12');
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
function task9() {
	document.write(`Создана функция с 1 аргументом (a). 
		Аргумент позволит узнать до какого числа нужно посчитать числа Фибоначчи.<br>
		Из математики узнаем, что числа Фибоначчи - это сумма 2-х предыдущих чисел.<br>
		Объявлена переменная-массив (fibonacciNumber) и 3 числовые переменные (number1...number3).<br>
		Стартовыми значениями для подсчета чисел Фибоначчи берем number1 = 0 и number2 = 1.<br>
		Создаем цикл while от переменной number3 до аргумента (а) 
		- это позволит нам выявить все числа в данном диапазоне.<br>
		В начале цикла добавляем в массив значение переменной number3 с помощью метода "push".<br>
		Далее считаем число Фибоначчи, как number3 = number1 + number2.<br>
		После этого смещаем значения переменных. 
		Number3 становится на порядок ниже, т.е. number2, а number2 становится number1, само значение number1 при этом пропадает.<br>
		После чего цикл повторяется: проверка, подсчет числа Фибоначчи, перестановка значений.<br>
		В конце для красоты создаем 2 цикла для построения таблицы с порядковыми номерами и непосредственно числами Фибоначчи 
		<br><br>`)
	let fibonacciNumber = [];
	function fibonacci(a) {
		let number1 = 0;
		let number2 = 1;
		let number3 = 0;
		while (number3 <= a) {
			fibonacciNumber.push(number3);
			number3 = number1 + number2;
			number1 = number2;
			number2 = number3;
		};
	};
	fibonacci(1000);
	document.write(`<table><tr><td>№ п/п</td>`);
	for (i = 1; i <= fibonacciNumber.length; i++){
		document.write(`<td>${i}</td>`);
	};
	document.write(`</tr><tr><td>число<br>Фибоначчи</td>`);
	for (i = 0; i < fibonacciNumber.length; i++){
		document.write(`<td>${fibonacciNumber[i]}</td>`);
	};
	document.write(`</tr></table>`);
};

//Task 10
function task10() {
	document.write(`Создаем функцию sumNumber() с 1 аргументом(а),
		создаем переменные для записи массива чисел arr[] и
		переменную для подсчета суммы.<br>
		Заносим в массив arr[] числа с помощью метода 
		split (посимвольное разделение строки) и map (конвертация обратно в числа).<br>
		Создаем цикл for от 0 до размера массива, считаем сумму чисел в переменную sum.<br>
		Устанавливаем аргумент a равный переменной sum.<br>
		Проверяем с помощью тернарного оператора является ли сумма больше 9? Если да - возвращаем функции саму себя - рекурсию, иначе даем итоговое значение.<br>
		Выводим результат.<br><br>`)
	function sumNumber(a) {
		let arr = [];
		let sum = 0;
		arr = (""+a).split("").map(Number)
		for (let i = 0; i < arr.length; i++) sum += arr[i];
		a = sum
		return sum > 9 ? sumNumber(a) : a
	};
	document.write('Все работает верно: начальное число - 9999999, итоговое значение - ' + sumNumber(9999999));
	
};

//Task 11
function task11() {
	document.write(`Создаем функцию array() с 1 аргументом(а),
		создаем переменные для записи строки str и
		переменную для поиска значения массива i равную изначально 0.<br>
		Проверяем является ли i (положение элемента в массиве) 
		меньше размера массива (с помощью метода length)?<br>
		Если да, то записываем в строку значение i-го элемента массива a (a[i]).<br>
		Увеличиваем переменную i на 1 (i++).<br>
		Т.к. i-й элемент масссива меньше размера строки мы запускаем функцию заново (делаем рекурсию).
		После выполненной функции создаем строку со значением переменной str.
		<br><br>`);
	let str = "";
	let i = 0;
	function array(a) {
		if (i < a.length) {
			str += '<td>' + a[i] + '</td>';
			i++;
			return array(a);
		};
	document.write(`Результат обработки введенного в аргумент массива:
		<br><table><tr>${str}</tr></table>`);
	};
	array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
};

//Task 12
function task12() {
	document.write(`Выполнено не самым лучшим образом.<br>
		Хотелось сделать равномерные отступы с обеих сторон рамки.<br>
		Однако работа с пробелами - дело неблагодарное.<br>
		Требуется оптимизация.
		<br><br>`);
		let surname = prompt('№12. Ваша фамилия?', 'Марков');
		let name = prompt('№12. Ваше имя?', 'Андрей');
		let middlename = prompt('№12. Ваше отчество?', 'Валерьевич');
		let group =  prompt('№12. Какая учебная группа?', 'BE107');
		let string0 = '';
		let string1 = 'Домашняя работа: «Функции»';
		let string2 = 'Выполнил: студент гр. ' + group;
		let string3 = surname + ' ' + name + ' ' + middlename;
		let fram;
		let len;
		let nbsp = ' ';
		if (string1.length >= string2.length) {
			len = string1.length;
		}
		if (string2.length >= string3.length) {
			len = string2.length;
		}
		if (string3.length >= string1.length) {
			len = string3.length;
		}
		len += 10; // добавил +10 для теста
		for (let i = 0; i <= len; i++) {
			string0 += '*';
		};
		console.log(string0); // строка0
		for (i = 0; i < len - string1.length; i++) {
			string1 += nbsp;
			string1 = nbsp + string1;
		};
		for (i = 0; i < len - string2.length; i++) {
			string2 += nbsp;
			string2 = nbsp + string2;
		};
		for (i = 0; i < len - string3.length; i++) {
			string3 += nbsp;
			string3 = nbsp + string3;
		};
		//string1 += ' ';			//* сзади пробел
		string1 = '*' + string1; //* спереди
		string1 += '*';			//* сзади
		console.log(string1); // строка1
		string2 = '*' + string2; //* спереди
		string2 += '*';			//* сзади
		console.log(string2); // строка2
		string3 = '*' + string3; //* спереди
		string3 += '*';			//* сзади
		console.log(string3); // строка3
		console.log(string0);// строка0
		
		document.write(`Задание выполнено в console.log`)
};

//Task 13
function task13() {
	document.write(`Решение этого задания было позаимствовано у Чайко Виталия и<br>
		доработано с помощью вызова вспомогательных функций с установленным аргументом.<br>
		Повторяющиеся конструкции в коде вынесены в отдельные функции.<br>
		Таким образом упрощается работа с кодом (потенциальный ввод новых параметров).<br>
		А также визуально красивее выглядит для других разработчиков.
		<br><br>`);
    while (true) {
		//функция проверки на более 1 спецсимвола
		function mailSplit(a) {
			if (mail.split(a).length - 1 > 1) {
				alert('Почта не должна содержать более одного спецсимвола "' + a + '". Введите почту заново');
				return true;
			} else {return false};
		};
		//
		//функция проверки на спецсимвол вначале и в конце строки
		function mailIndexOf(a) {
			if (mail.indexOf(a) == 0 || mail.indexOf(a) == mail.length - 1) {
				alert('Почта не должна начинаться или заканчиваться знаком "' + a + '". Введите почту заново');
				return true;
			} else {return false};
		};
		//
		//функция проверки на спецсимволы рядом друг с другом
		function indexOf(a) {
			if (
                mail.indexOf(a) + 1 == mail.indexOf('.') || mail.indexOf(a) - 1 == mail.indexOf('.') ||
                mail.indexOf(a) + 1 == mail.indexOf('_') || mail.indexOf(a) - 1 == mail.indexOf('_') ||
                mail.indexOf(a) + 1 == mail.indexOf('-') || mail.indexOf(a) - 1 == mail.indexOf('-')) {
                alert('Почта не должна содержать несколько спец. символов "' + a + '" подряд. Введите почту заново');
				return true;
			} else {return false};
		};
		//
		function indexOf(a) {
			if (
                mail.indexOf(a) + 1 == mail.indexOf('.') || mail.indexOf(a) - 1 == mail.indexOf('.') ||
                mail.indexOf(a) + 1 == mail.indexOf('_') || mail.indexOf(a) - 1 == mail.indexOf('_') ||
                mail.indexOf(a) + 1 == mail.indexOf('-') || mail.indexOf(a) - 1 == mail.indexOf('-')) {
                alert('Почта не должна содержать несколько спец. символов "' + a + '" подряд. Введите почту заново');
				return true;
			} else {return false};
		};
		//
        let mail = prompt('Введите почту', 'andremarkov@icloud.com');
        switch (true) {
            case (mail.search(/[А-яЁё]/) !== -1):
                alert('Почта должна состоять из латичнских букв. Введите почту заново');
                continue;
            case (mail.search(/[,!&?]/) !== -1):
                alert('Почта не должна содержать спец. символы. Введите почту заново');
                continue;
				
			//используем ф-ию mailSplit с нужным аргументом
            case (mailSplit('@')):
                continue;
            case (mailSplit('.')):
                continue;
            case (mailSplit('_')):
                continue;
            case (mailSplit('-')):
                continue;
				
			//используем ф-ию mailIndexOf с нужным аргументом
            case (mailIndexOf('@')):
                continue;
            case (mailIndexOf('.')):
                continue;
            case (mailIndexOf('_')):
                continue;
            case (mailIndexOf('-')):
                continue;
				
			//используем ф-ию indexOf с нужным аргументом
            case (indexOf('@')) :
                continue;
            case (indexOf('.')) :
                continue;
            case (indexOf('_')) :
                continue;
            case (indexOf('-')) :
                continue;

            case (mail.split('@')[1].length <= 3):
                alert('После знака "@" должно быть более 2-х символов. Введите почту заново');
                continue;
            case (mail.split('@')[1].length > 11):
                alert('После знака "@" должно быть менее 11 символов. Введите почту заново');
                continue;
            case (mail.split('@')[0].length < 2):
                alert('Перед знаком "@" должно быть более 2-х символов. Введите почту заново');
                continue;

            case true:
				document.write(`<ul><li>EMAIL: ${mail}</li></ul>`);
                break;
        };
        break;
    };
};