//Упражнение 1

let arr = [];
for (let i=0; i < 5; i++) {
    arr[i]=i+1;
}
console.log(arr);


console.log('--------------');


//Упражнение 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i=0; i < arr2.length; i++) {
   if(arr2[i]> -10 && arr2[i] < -3) {
       console.log(arr2[i]);
   }
}

console.log('--------------');


//Упражнение 3

let arr3 = [];
for (let i = 23; i <= 57; i++) {
    arr3.push(i);
} 
console.log(arr3);


let arr3_1 = [];
let i = 57;
while ( i >= 23) {
    arr3_1.unshift(i--);
    
}
console.log(arr3_1);

let result=0;
for (i=0; i<arr3.length; i++) {
    result +=  arr3[i];
}
console.log(result);


console.log('--------------');


//Упражнение 4

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i=0; i< arr4.length; i++) {
    if(arr4[i][0] == '1' || arr4[i][0] == '2' || arr4[i][0] == '5') {
        console.log(arr4[i]);
    }
}


console.log('--------------');


//Упражнение 5

let arr5 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вскр'];
for(let i = 0; i < arr5.length; i++) {
    if (arr5[i]==(arr5[arr5.length-2]) || arr5[i] == (arr5[arr5.length-1])) {
        document.write(arr5[i].bold() + ' ');
    } else {
        document.write(arr5[i]+ ' ');
    }   
}

console.log('--------------');


//Упражнение 6 

let arr6 = ['жигули', 'мерседес', 'киа', 'ситроен'];
console.log(arr6);
arr6.push('фольксваген');
console.log(arr6);
console.log(arr6[arr6.length-1]);


console.log('--------------');


//Упражнение 7  

    let arr7 = [];  
    while (true) { 
      let num = prompt("Введите число", '');
      if (num === "" || num === null || !isFinite(num)) break;
  
      arr7.push(+num);
    }
    console.log(arr7);

    arr7.sort(function(a,b) {
    return a-b;
    });

    console.log(arr7);

    console.log('--------------');
 

// let arrNum=[];       ВЕРНОЕ РЕШЕНИЕ, Другая запись

// while(true) {
//     let value =  prompt("Введите число", '');
//      if (value === '0' || value !=false) {
//         arrNum.push(+value);
//      } else {
//          break;
//      }
// }
// console.log(arrNum);
// arrNum.sort(function(a,b) {
//     return a-b;
// });
// console.log(arrNum);


//Упражнение 8

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
arr8.reverse();
console.log(arr8);


let arr8_1 = [12, false, 'Текст', 4, 2, -5, 0];
let k = arr8_1.length;
while(k-- != 0) {
    console.log(arr8_1[k]);
}


console.log('--------------');


//Упражнение 9 

let arr9 =  [5, 9, 21, , , 9, 78, , , , 6];
let num0 = 0;

for (i=0; i<arr9.length; i++) {
    if(arr9[i] == undefined) {        //только undefined, потому что пустое значение в массиве-это undefined, 2 или 3 равно-без разницы
        num0++
    }   
}
console.log(num0);


    console.log('---------------------------');

//Упражнение 10

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,4,13,2];
sum=0;

let fNull = arr10.indexOf(0);
let lNull = arr10.lastIndexOf(0);

if(fNull!=-1 && lNull!=-1) {    //это мы делаем для того, чтобы определить, нашелся ли 0 в массиве
for(i=fNull+1; i < lNull; i++) {
    sum+=arr10[i];
}
}
console.log(sum);


//Упражнение 11

let h = prompt('Высота треугольника');
console.log(h);
 
for (let i=1; i<=h; i++) {
    let s = '';
    // s=' '.repeat(h-i);              //это первый вариант  

    for (let j = 1; j <=h-i; j++) {      // это второй вариант
        s+=' ';                          // второй вариант
    }

    for (let j = 1; j <=i+i-1; j++) {
        s+='^';
    }
    console.log(s);
}



// Упражнение 9

// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

