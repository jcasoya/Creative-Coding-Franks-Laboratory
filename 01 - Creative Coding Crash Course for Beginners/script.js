const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 800;

ctx.fillStyle = 'red';
ctx.fillRect(100, 150, 200, 150);
ctx.lineWidth = 10;
ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 150, 200, 150);

//global settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';

class Line {
    constructor(){
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = Math.random() * canvas.width;
        th
        this.endY = Math.random() * canvas.height;
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
    }
}