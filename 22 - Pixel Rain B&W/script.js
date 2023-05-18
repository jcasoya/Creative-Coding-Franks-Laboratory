const myImage = new Image();
myImage.src = 'image.png';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 625;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

    let = particlesArray = [];
    const numberOfParticles = 5000;

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 1.5 + 1;
        }
        update() {
            this.y += this.velocity;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
    }
});