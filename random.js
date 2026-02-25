
const btn = document.getElementById("btn");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

let min=1;
let max=6;

let r1;
let r2;
let r3;

btn.onclick = function(){
    r1 = Math.floor(Math.random() *max)+min;
    r2 = Math.floor(Math.random() *max)+min;
    r3 = Math.floor(Math.random() *max)+min;

    p1.textContent = r1;
    p2.textContent = r2;
    p3.textContent = r3;

}

