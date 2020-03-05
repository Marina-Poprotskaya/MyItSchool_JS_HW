function message (type) {
    if (type == error) {
        error.style.display = "block";
        setTimeout(function(){
            document.body.removeChild(error);
        }, 5000);
    } else if (type == alertHello) {
        alertHello.style.display = "block";
        setTimeout(function(){
            document.body.removeChild(alertHello);
        }, 5000);
    } else if (type == msg) {
        msg.style.display = "block";
        setTimeout(function(){
            document.body.removeChild(msg);
        }, 5000);
}
}

let error = document.createElement('div');
let textElem = document.createTextNode('Сообщение об ошибке');
document.body.appendChild(error);
error.appendChild(textElem);

error.style.width = '300px';
error.style.height = '70px';
error.style.backgroundColor = 'pink';
error.style.borderRadius = "10px";
error.style.color = "red";
error.style.fontSize = "24px";
error.style.fontWeight = "bold";
error.style.paddingTop = "40px"
error.style.textAlign = "center";
error.style.position = "fixed";
error.style.top = "20px";
error.style.left = "40%";
error.style.display = "none"


let alertHello = document.createElement('div');
let textElem2 = document.createTextNode('Привет, мир!');
document.body.appendChild(alertHello);
alertHello.appendChild(textElem2);

 
alertHello.style.cssText = "position: fixed; top: 40px; left: 40%; background-color: #ccc; color: blue; width: 300px; height: 70px; border-radius:10px; font-size: 24px; font-weight: bold; padding-top: 40px; text-align: center; display: none"



let msg = document.createElement('div');
msg.innerHTML = "Ваше сообщение отправлено!";
document.body.appendChild(msg);

 
msg.style.cssText = "position: fixed; top: 40px; left: 40%; background-color: lightgreen; color: green; width: 300px; height: 70px; border-radius:10px; font-size: 20px; font-weight: bold; padding-top: 40px; text-align: center; display: none;"



message (alertHello);