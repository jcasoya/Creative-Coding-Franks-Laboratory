const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.lineWidth = 45;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 1.4);
ctx.stroke();
console.log(ctx);
 

