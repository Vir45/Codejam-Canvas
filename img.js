function drawCanvasImage() {
    const pixel = document.getElementById('pixel');
    const ctx = pixel.getContext('2d');
    const width = pixel.width;
    const height = pixel.height;
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = "./image/image.png";

}

document.getElementById('five-hundred-twelve').addEventListener('click', () => {
    drawCanvasImage();
});