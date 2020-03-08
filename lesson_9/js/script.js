
function message(type, string) {
    let div = document.createElement('div')

    div.style.cssText = "width: 300px; height: 70px; border-radius:10px; font-size: 24px; font-weight: bold; padding-top: 40px; text-align: center; display: none"

    div.style.display = "block";

    if (type == 'error') {
        div.classList.add('error')

    } else if (type == 'alert') {
        div.classList.add('alert')

    } else if (type == 'msg') {
        div.classList.add('msg')
    }

    div.innerHTML = string;

    let divMain = document.querySelector('body > div');

    if (!divMain) {
        divMain = document.createElement('div');
        divMain.style.cssText = "width: 700px; height: 700px;"
        divMain.style.display = "block";
        document.body.appendChild(divMain);
    }

    divMain.appendChild(div);

    setTimeout(function () {
        div.remove();
        let divChild = document.querySelectorAll('div > div')
        if (divChild.length == 0) {
        divMain.remove();
    }
    }, 5000);

    }

    setTimeout(function () {
        message(type, string);
    }, 1000);

    let loc = location.search.toString()
    loc = loc.split('&');
    let type = loc[0];
    type = type.split('=')[1];
    let string = loc[1];
    string = string.split('=')[1];



