'use strict';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function checkInput(start, end) {
    if (start === end) {
        end.x = end.x + 1;
        end.y = end.y + 1;
    }
}

export function line(start, end, color) {
    checkInput(start, end);
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

export function rectangel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 2, 2);
}

export function circle(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
}
