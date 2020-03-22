function toDoList() {
    document.getElementById('list').classList.remove('hidden');
    let mainBlock = document.getElementById('list');
    let addEvent = document.getElementById('task');
    let ulList = document.getElementById('ul-list');


    addEvent.addEventListener('keydown', function (event) {
        let task = document.getElementById('task').value.toString();

        if (task != '') {
            if (event.key == 'Enter') {

                addEvent.value = '';
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'checkbox';
                let span = document.createElement('span');
                let li = document.createElement('li');


                ulList.appendChild(li).appendChild(checkbox);
                ulList.appendChild(li).appendChild(span)
                span.innerHTML = task;


                let mainButton = document.querySelector('div>button');

                if (!mainButton) {
                    mainButton = document.createElement('button');
                    mainBlock.appendChild(mainButton);
                    mainButton.appendChild(document.createTextNode("Clear all"));
                    mainButton.id = 'button';
                }

                mainButton.addEventListener('click', function () {
                    li.remove();
                    mainButton.remove();
                })

                li.style.cssText = "width: 290px; height: auto;  padding-left: 10px; border-bottom: 1px solid gray;  word-wrap: break-word;"
                span.style.cssText = "padding-left: 20px; font-size: 20px; padding-bottom: 5px; font-weight: bold;"

                checkbox.addEventListener('change', function () {
                    span.classList.toggle('crossed')
                })

            }
        }
    })
}

toDoList();

