// HW_4 Упражнение 1

let i=1;
while(i<=50) {
    document.write(i++ +' '); 
    }

    document.write('<br>');



for(let i=35; i>=8; i--) {
    document.write(i + ' ');
}

document.write('<br>');

// Упражнение 2

for(let k = 89; k>=11; k--) {
    document.write(k + '<br>');
}


// Упражнение 3

let sum = 0;
for(let i=1; i<=4; i++) {
    sum+=i;
    console.log(sum);
}
console.log(sum);

console.log('----------------');

// Упражнение 4

let sum1 = 0;
for(let i = 1; i<=5; i++) {
    sum1 += i;
}
console.log(sum1);

let sum2 = 0;
for(let i = 1; i<=4; i++) {
    sum2 += i;
}
console.log(sum2);

let sum3 = 0;
for(let i = 1; i<=3; i++) {
    sum3 += i;
}
console.log(sum3);

let sum4 = 0;
for(let i = 1; i<=2; i++) {
    sum4 += i;
}
console.log(sum4);

let sum5 = 0;
for(let i = 1; i<=1; i++) {
    sum5 += i;
}
console.log(sum5);

console.log('----------------');


// Упражнение 5

for (let i=8; i <= 56; i++) {      //Можно и так
    if(i % 2 == 1) continue;
    console.log(i);
}
console.log('----------------');

// for (let i=8; i <= 56; i++) {         // и так
//     if(i % 2 == 0) {
//     console.log(i);
//     }
// }


let l=8
while(l<=56) {
    if(l % 2 == 0) {
    console.log(l);  
    
    }  
 l++;                   // почему за скобками работает корректно?? а в-нет?
}

console.log('----------------');


// Упражнение 6

for (i = 2; i <= 9; i++) {
    for (j = 2; j <= 9; j++) {
    document.write('<div>'+ i + '*' + j +'=' + (j*i) + '</div>');
    }
    document.write('<br>');
}


console.log('----------------');

// Упражнение 7

let n = 1000;
let num = 0;
while(n > 50) {
   n/=2;
   num++;
}
console.log(n);
console.log(num);

console.log('----------------');


// Упражнение 8

let summ = 0;
let q = 0;
let aver = 0;
while (true) {
let mes = prompt('Введите число', '');
if(mes==0 || mes == " " || mes == false ) {
break; 
}  else if(!isFinite(mes)) {
 alert('Это не число');
}  else {
    summ += +mes; 
    q++;
    aver=summ/q++;
}
} 
console.log(aver);
console.log(summ);


// Упражнение 9

let str9 = '1 98 4 6 4 32 4 65 4 -3 5 3 89 7 101 1 36 8 57';
let arr9 = str9.split(' ');
let biggestNumber=0;
let smallestNumber=arr9[0];
for (let i=0; i < arr9.length; i++) {
    if(+arr9[i] > biggestNumber){
        biggestNumber=arr9[i]; 
    } if (arr9[i] < smallestNumber) {
        smallestNumber=arr9[i];
    }
}
console.log(biggestNumber);
console.log(smallestNumber);



// let arr9 = str9.split(' ');      //Корявый способ, но работает
// console.log(arr9);         
// arr9.sort(function (a, b) {
//     return a-b;
// });
// console.log(arr9);
// let first = arr9[0];
// let last = arr9[arr9.length-1];
// console.log(first);
// console.log(last);


// Упражнение 10

let m = 45678;
let number = 0;
let summ=0;
for(let char of "45678"){     //выводит отдельно каждую цифру
console.log(char);
}


m=String(m);
for (i=0; i < m.length; i++) {
    number++;
}
console.log('Количество цифр в числе равно ' + number);     //показывает, сколько цифр в числе


let arr10 = m.split('');            //Переворачиваем число 
arr10.reverse();
console.log(arr10);


for (i=0; i < arr10.length; i++) {                     //Вычисляем сумму цифр в числе
    summ+= +arr10[i]; 
}
console.log('Сумма цифр в числе равна ' + summ);