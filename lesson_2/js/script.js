//Домашнее задание.«Условный оператор if…else. Вложенные условия. Оператор выбора switch.

//Упражнение 1

let name = prompt('Как вас зовут?','');
let age = prompt('Сколько вам лет?','');
let city = prompt('В каком городе вы проживаете?','');
let phone = prompt('Ваш номер телефона?','');
let email = prompt('Адрес вашей электронной почты?')
let company = prompt('В какой компании вы работаете?','');

document.write ('Меня зовут '+ name + '. Мне '+ age + ' лет.' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + 'телефон ' + phone + ', почта ' + email + '. ');



//Упражнение 2

let year = (2020 - age);
document.write (name + ' родилась/родился в ' + year + ' году.');



//Упражнение 3

 let str = '126450';

 if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5]))
 {
     alert ('Да');
}else {
    alert ('Нет');}



// Упражнение 4

let c = -3;
let result = (c > 0) ? 'Верно': 'Неверно';
alert(result);



//Упражнение 5

let a = 10;
    b = 2;

let plus = a + b;
console.log(plus);
if (plus > 1) {
    console.log(plus**2);
}

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);


let divide = a/b;
console.log(divide);
 


//Упражнение 6


      
(a > 2 && a < 11 || 6 <= b && b < 14 ) ? console.log('Верно') : console.log('Неверно');


 
//Упражнение 7

let n = 16;
 if (1 <= n && n < 16) {
     console.log ('Число попадает в первую четверть часа');
 } else if (15 < n && n < 31) {
    console.log ('Число попадает во вторую четверть часа');
 } else if (30 < n && n < 46) {
    console.log ('Число попадает в третью четверть часа');
 } else if (45 < n && n <= 59) {
    console.log ('Число попадает в четвертую четверть часа');
 } else { console.log ('Неверное значение');
}



//Упражнение 8


let day = 99;
if ( 1 <= day && day <=10) {
    alert ('Число попадает в первую декаду месяца');
} else if ( 10 < day && day <=20) {
    alert ('Число попадает во вторую декаду месяца');
} else if ( 20 < day && day <=31) {
    alert ('Число попадает в третью декаду месяца');
} else { alert ('Неверное значение');
}



//Упражнение 9

let days = 700
let dayInYear = day/365;
console.log(dayInYear);
let dayInMonth = day/31;
console.log(dayInMonth);
let dayInWeek = day/7;
console.log(dayInWeek);
let hours = day*24;
console.log(hours);
let minute = day*1440;
console.log(minute);
let second = day*86400;
console.log(second);



    let result1 = (day < 365) ? ('Меньше года'):(day + ' дней - это ' + dayInYear + ' года');
    console.log(result1);
    let result2 = (day < 31) ? ('Меньше месяца'):(day + ' дней - это ' + dayInMonth + ' месяца');
    console.log(result2);
    let result3 = (day < 7) ? ('Меньше недели'):(day + ' дней - это ' + dayInWeek + ' недель');
    console.log(result3);




//Упражнение 10

let month;

if (1 <= day && day <= 31) {
    alert (month=1);
} else if (32 <= day && day <= 59) {
    alert (month=2);
} else if (60 <= day && day <= 90) {
    alert (month=3);
} else if (91 <= day && day <= 120) {
    alert (month=4);
} else if (121 <= day && day <= 151) {
    alert (month=5);
} else if (152 <= day && day <= 181) {
    alert (month=6);
} else if (182 <= day && day <= 212) {
    alert (month=7);
} else if (213 <= day && day <= 243) {
    alert (month=8);
} else if (244 <= day && day <= 273) {
    alert (month=9);
} else if (274 <= day && day <= 304) {
    alert (month=10);
} else if (305 <= day && day <= 334) {
    alert (month=11);
} else if (335 <= day && day <= 365) {
    alert (month=12);
} else {
    alert ('Такого числа нет!')
}




switch(month) {
    case 12:
    case 1:
    case 2:
        console.log('зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
    break;
    default:
        console.log('В году 12 месяцев!!!');
}




