// function message (type, string) {
//     let textElem = document.createTextNode(string);
//     if (type == error) {
//         error.style.display = "block";
//         error.appendChild(textElem);
//         setTimeout(function(){
//             document.body.removeChild(error);
//         }, 5000);
//     } else if (type == alert) {
//         alertHello.style.display = "block";
//         alertHello.appendChild(textElem);
//         setTimeout(function(){
//             document.body.removeChild(alertHello);
//         }, 5000);
//     } else if (type == msg) {
//         msg.style.display = "block";
//         msg.appendChild(textElem);
//         setTimeout(function(){
//             document.body.removeChild(msg);
//         }, 5000);
// }
// }

// let error = document.createElement('div');
// document.body.appendChild(error);


// error.style.width = '300px';
// error.style.height = '70px';
// error.style.backgroundColor = 'pink';
// error.style.borderRadius = "10px";
// error.style.color = "red";
// error.style.fontSize = "24px";
// error.style.fontWeight = "bold";
// error.style.paddingTop = "40px"
// error.style.textAlign = "center";
// error.style.position = "fixed";
// error.style.top = "20px";
// error.style.left = "40%";
// error.style.display = "none"


// let alertHello = document.createElement('div');
// document.body.appendChild(alertHello);


 
// alertHello.style.cssText = "position: fixed; top: 40px; left: 40%; background-color: #ccc; color: blue; width: 300px; height: 70px; border-radius:10px; font-size: 24px; font-weight: bold; padding-top: 40px; text-align: center; display: none"



// let msg = document.createElement('div');
// document.body.appendChild(msg);

 
// msg.style.cssText = "position: fixed; top: 40px; left: 40%; background-color: lightgreen; color: green; width: 300px; height: 70px; border-radius:10px; font-size: 20px; font-weight: bold; padding-top: 40px; text-align: center; display: none;"


// message (error,'Ошибка!');


// Другая версия

function message (type, string) {
    let textElem = document.createTextNode(string);
    div.style.display = "block";
    div.appendChild(textElem);
    if (type == 'error') {
        div.classList.add('error')
    } else if (type == 'alert') {
        div.classList.add('alert')
    } else if (type == 'msg') {
        div.classList.add('msg')
    }
    setTimeout(function(){
        document.body.removeChild(div);
    }, 5000);
    }

let div = document.createElement('div');
document.body.appendChild(div);

div.style.cssText = "position: fixed; top: 40px; left: 40%; width: 300px; height: 70px; border-radius:10px; font-size: 24px; font-weight: bold; padding-top: 40px; text-align: center; display: none"

let type = prompt('Введите error/alert/msg')

message (type,'Передаваемое сообщение!');