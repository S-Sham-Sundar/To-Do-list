// function add(inputId, elementsId) {
//     var inp = document.getElementById(inputId);
//     var ul = document.getElementById(elementsId);


//     var li = document.createElement("li");
//     li.innerHTML = inp.value + "<button onclick='remove(event)'>delete</button>";
//     ul.append(li);
//     inp.value = "";
// }
// function remove(event) { event.target.parentElement.remove() }
function add(inputId, elementsId) {
    var inp = document.getElementById(inputId);
    var ul = document.getElementById(elementsId);

    if (inp.value.trim() === "") return;

    var li = document.createElement("li");
    li.innerHTML = inp.value + " <button onclick='remove(event)'>Delete</button>";
    ul.appendChild(li);
    inp.value = "";
}

function remove(event) {
    event.target.parentElement.remove();
}
const text = "Complete Your Tasks";
const speed = 150; 
let index = 0;
let isDeleting = false;

function typeEffect() {
    const el = document.querySelector(".typewriter-text");

    if (!isDeleting) {
        el.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); 
            return;
        }
    } else {
        el.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
            setTimeout(typeEffect, 500); 
            return;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect(); 
