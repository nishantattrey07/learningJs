let count = document.getElementById("count");
let incbtn = document.getElementById("increment");
let decbtn = document.getElementById("decrement");
let resbtn = document.getElementById("reset");

function increment() { 
    count.innerText = parseInt(count.innerText) + 1;
}

function decrement() { 
    count.innerText = parseInt(count.innerText) - 1;
}

incbtn.onclick = () => { 
    increment();
}

decbtn.onclick = () => { 
    decrement();
}

resbtn.onclick = () => { 
    count.innerText = 0;
}