const myImage = new Image();
myImage.src = 'image.png';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 625;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
});