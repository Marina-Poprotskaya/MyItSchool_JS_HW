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
