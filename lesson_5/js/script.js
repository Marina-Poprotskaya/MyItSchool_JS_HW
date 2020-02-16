//Функции
//Упражнение 1
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
// передаются параметром.

function getNumber (a, b, c) {
  let result = (a-b)/c;
  console.log(result);
}
getNumber (20,2,3);


//Упражнение 2
//Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
//параметром.

function getNumber1(x) {
    let result=Math.pow(x, 2);
    let result1=Math.pow(x, 3);
    console.log(result);
    console.log(result1);
}
getNumber1(4);


//Упражнение 3
// Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function getMin(a,b){
    if (a<b) {
        return a;
    } else {
        return b;
    }
};
console.log(getMin(10,15));


function getMax(a,b){
    if (a>b) {
        return a;
    } else {
        return b;
    }
};
console.log(getMax(10,15));


//Упражнение 4
// Напишите две функции: первая ф-ция должна возвращать массив с числовыми
// значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
// – выводить полученный массив.


arr = [];
function getArray() {
while(true) {
    let num = prompt('Введите числo', '');
    if(num===' ' || num === null || !isFinite(num)) break; 
    arr.push(+num);
}   
};
getArray();


function showArray() {
 console.log(arr);
}
showArray();


//Упражнение 5
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
// число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
// если нечетное - false.

function isEven(a) {
    if (a % 2 == 0){
        return true;
    } else {
        return false;
    }
};
console.log(isEven(8));


//Упражнение 6
// Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
// массив, где останутся лежать только четные из этих чисел. Для этого используйте
// вспомогательную функцию isEven из предыдущей задачи.

let arrEven = [];
function getEven(arr) {
    for (i=0; i < arr.length; i++){
    if (isEven(arr[i])) { 
        arrEven.push(arr[i]);
}
}
 } ;
getEven([2,4,6,8,0,9,3]);
console.log(arrEven);


//Упражнение 9
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
// цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию.

function sumNumber(num) {
num = String(num);
let sum = 0;
console.log(num + ': ' + typeof num);

for  (let i=0; i<num.length; i++) {
    //console.log(num[i] +': '+ typeof num[i]);

    sum+=+num[i];
}
console.log(sum);

if (sum > 9) {
    sumNumber(sum);
}
}

sumNumber(4653);
// sumNumber(prompt('Введите число'));



//Упражнение 1, ДЗ_5

// 1. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
// выводящую введённые данные в следующем виде:
// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************
// Размер рамки должен определятся автоматически по самой длинной строке. Рамку
// вывести в консоль.

function card() {
let name = prompt('Введите имя', '');
let lastName = prompt('Введите фамилию', '');
let secondName = prompt('Введите фамилию', '');
let group = prompt('Введите группу', '');
strArr=[];
    
strArr.push('Домашняя работа: «Функции»');
strArr.push('Выполнил: студент гр.' + group);
strArr.push(lastName + ' ' + name + ' ' + secondName);

console.log(strArr);

// let maxLength = Math.max(strArr[0].length,strArr[1].length,strArr[2].length);   ----Можно и так

let maxLength = 0;
for (let i = 0; i < strArr.length; i++) {
    if(strArr[i].length > maxLength) {
        maxLength = strArr[i].length;
    }
}
console.log(strArr);
console.log(maxLength);

for (let i = 1; i <= strArr.length + 2; i++) {
    if (i==1 || i == strArr.length+2) {
        console.log('*'.repeat(maxLength+4));
    } else {
        console.log('* '+ strArr[i-2] + ' '.repeat(maxLength-strArr[i-2].length) + ' *');
    }
}
}
card();