"use strict";
console.log("ad mati pong");
function test123() {
    return true;
}
// let p1 = document.getElementById('p1'); 
// window.addEventListener('keydown',seeifworks);
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
var canvas = document.getElementById('theArea');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(20, 10, 30, 100);
document.addEventListener('keydown', logKey);
function logKey(e) {
    p1.textContent += ` ${e.keyCode}`;
    //two importand keys w = 87 s = 83 && upkey = 38 downkey = 40
    if (e.keyCode === 87 || e.keyCode === 83) {
        console.log('player one moves!');
    }
    if (e.keyCode === 38 || e.keyCode === 40) {
        console.log('player two moves!');
    }
}
