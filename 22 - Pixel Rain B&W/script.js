const myImage = new Image();
myImage.src = 'image1.png';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 625;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let = particlesArray = [];
    const numberOfParticles = 10000;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++){
        let row = [];
        for (let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 100;
            this.speed = 0.2;
            this.velocity = 0.7;
            this.size = 0.6;
            this.position1 = 1;
            this.position2 = 1;
        }
        update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'yellow';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle); 
        }
    }
    init();
    function animate(){
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});  