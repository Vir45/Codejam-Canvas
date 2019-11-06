function draw3() {
    // Please, use const
    let pixel = document.getElementById('pixel');
    let ctx = pixel.getContext('2d');
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
    img.src = "./image/image.png";

}

document.getElementById('five-hundred-twelve').addEventListener('click', () => {
    draw3();
});
