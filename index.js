// function add(inputId, elementsId) {
//     var inp = document.getElementById(inputId);
//     var ul = document.getElementById(elementsId);


//     var li = document.createElement("li");
//     li.innerHTML = inp.value + "<button onclick='remove(event)'>delete</button>";
//     ul.append(li);
//     inp.value = "";
// }
// function remove(event) { event.target.parentElement.remove() }
// --- Typewriter Effect ---
const text = "Stay Productive & Bloom 🌸"; 
const speed = 100; 
let index = 0;
let isDeleting = false;

function typeEffect() {
    const el = document.querySelector(".typewriter-text");
    if (!el) return; 

    const currentText = text.substring(0, index);
    el.textContent = currentText;

    if (!isDeleting) {
        if (index < text.length) {
            index++;
            setTimeout(typeEffect, speed);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 2000); 
        }
    } else {
        if (index > 0) {
            index--;
            setTimeout(typeEffect, speed / 2);
        } else {
            isDeleting = false;
            setTimeout(typeEffect, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);


function add(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    
    li.innerHTML = `
        <span>${input.value}</span>
        <button onclick="remove(event)" title="Delete Task">🗑️</button>
    `;
    
    list.prepend(li); 
    input.value = "";
}

function remove(event) {

    const listItem = event.target.closest('li');
    
    listItem.style.transition = "all 0.3s";
    listItem.style.opacity = "0";
    listItem.style.transform = "translateX(20px)";
    
    setTimeout(() => {
        listItem.remove();
    }, 300);
}

document.getElementById("input1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        add('input1', 'element1');
    }
});
