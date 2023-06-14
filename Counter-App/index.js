let count = document.getElementById("count");
let incbtn = document.getElementById("increment");
let decbtn = document.getElementById("decrement");
let resbtn = document.getElementById("reset");
let records = document.getElementById("records");

let counter = 0;

function increment() { 
    count.textContent = parseInt(count.textContent) + 1;
    counter++;
}

function decrement() { 
    count.textContent = parseInt(count.textContent) - 1;
    counter--;
} 

function reset() { 
    if (records.textContent !== "") {
    records.textContent += ", ";
    }
    records.textContent += counter.toString();
    count.textContent = 0;
    counter = 0;
}

incbtn.onclick = () => { 
    increment();
}

decbtn.onclick = () => { 
    decrement();
}

resbtn.onclick = () => { 
    reset();
}