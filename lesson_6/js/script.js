//Регулярные выражения

//Упражнение 1
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'))


//Упражнение 2
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в
// формат '31/12/2025'

let date = "2025-12-31";
date = date.replace(/(2025)-(12)-(31)/, "$3/$2/$1");
console.log(date);

//Упражнение 3
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными
// способами (через substr, substring, slice).

let str3 = 'я учу javascript!';

console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));

console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));

console.log(str3.slice(2,6));
console.log(str3.slice(6, 16));


//Упражнение 4
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
// кубов его элементов. Для решения воспользуйтесь циклом for

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
let result = 0;
for (let i = 0; i<arr.length; i++){
 sum+= Math.pow(arr[i],3);
 result = Math.sqrt(sum);
}
console.log(result);


//Упражнение 5 
//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.


function summ(a, b) {
    let c=0;
    if(a<b) {
        return c = -(a-b);
    } else {
        return c = a-b;
    }
}
console.log(summ(3,5));


//Упражнение 6
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой
// задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
// состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).


let now = new Date();
let hour = now.getHours(); 
let min = now.getMinutes();
let sec = now.getSeconds();
let day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

function number() {

    if(day < 10 && month > 9) {
        return console.log(hour + ":" + min + ":" + sec + ' '+ '0' + day + '.' + month + '.'+ year + '.');
    } else if (month < 10 && day > 9) {
        return console.log(hour + ":" + min + ":" + sec + ' ' +  day + '.' + '0' + month + '.'+ year + '.');       
    } else if (month > 9 && day > 9) {
        return console.log(hour + ":" + min + ":" + sec + ' ' + '0' + day + '.' + '0' + month + '.'+ year + '.');
    } else {
        return console.log(hour + ":" + min + ":" + sec + ' ' + day + '.'+ month + '.'+ year + '.');
    }
}
number();


//Упражнение 7
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет
// строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'


let str7 = 'aa aba abba abbba abca abea';
let regexp = /ab+a/gi
console.log(str7.match(regexp));


//Упражнение 8
// Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код
// страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого
// номера с кодом и без него. Функция должна возвращать true или false.

let phone = prompt('Введите номер телефона с кодом', '375** *** ** **');

function check() {
let regexp = /^\d[\d\(\)\ \-]{7,15}\d$/;
let correct = regexp.test(phone);
if (correct==true) {
    alert ('Телефон введен верно');
} else {
     alert ('Телефон введен неверно!');
}
}
check();




