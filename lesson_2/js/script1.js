//Контрольная работа.«Условный оператор if…else. Вложенные условия. Операторвыбора switch.»

// Упражнение 1

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);



//Упражнение 2

let hour = 12;
let min = 36;
let sec = 59;
let time = hour + ':' + min + ':' + sec;
document.write(time);



//Упражнение 3

let str3 = 'abcde';
if (str3[0] == 'a') {
    console.log('Верно');
} else {
    console.log('Неверно');
}



//Упражнение 4

let str4 = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек';
console.log(str4.slice(47,60));



//Упражнение 5

let string = '999';
console.log(+string[0] + +string[1] + +string[2]);



// Упражнение 6

let a = 10;
let result6 = (a == 10) ? 'Верно': 'Неверно';
alert(result6);



//Упражнение 7

let w = 'test';
if (w == 'test') {
    console.log('Верно');
} else {
    console.log('Неверно');
}



//Упражнение 8

let z = -3;
    x = 5;
if (z >= 1 && x >=3) {
    console.log(z+x);
} else {
    console.log(z-x);
}



//Упражнение 9

let name = prompt('Ваше имя','');
let login = prompt('Введите логин','');
let pass = prompt('Ваш пароль','');

if (login == 'admin' && pass == 'nimba') {
    document.write('Добро пожаловать, ' +  name +  '. Вы успешно вошли на сайт.');
} else {
    document.write(name  + ', вы неверно ввели логин или пароль!');
}



//Упражнение 10

let month10 = prompt('Введите номер месяца', '');
let season;

if (month10 == 1 || month10 == 2 || month10 == 12) {
    console.log(season = 1);
} else if (month10 == 3 || month10 == 4 || month10 == 5) {
    console.log(season = 2);
} else if (month10 == 6 || month10 == 7 || month10 == 8) {
    console.log(season = 3);
} else if  (month10 == 9 || month10 == 10 || month10 == 11) {
} else {
    console.log('В году 12 месяцев!');
}

let seasonName = season;
    switch(seasonName) {
            case 1:
                console.log('Зима');
            break;
            case 2:
                console.log('Весна');
            break;
            case 3:
                console.log('Лето');
            break;
            case 4:
                console.log('Oсень');
            break;
            default:
                console.log('В году 12 месяцев!!!');
    }





