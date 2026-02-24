
let d = document.getElementById("d");
let r = document.getElementById("r");
let i = document.getElementById("i");

let counter = document.getElementById("p")
let count =0;

d.onclick = function(){
    count--;
    counter.textContent =count;
}
r.onclick = function(){
    count =0;
    counter.textContent =count;
}
i.onclick = function(){
    count++;
    counter.textContent =count;
}
