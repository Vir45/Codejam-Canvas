const canvasFour = [
    ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],
    ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
    ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
    ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4']
];


function drawCanvasFour(map) {
    const pixel = document.getElementById('pixel');
    const ctx = pixel.getContext('2d');
    const width = pixel.width;
    const height = pixel.height;
    const xStep = width / map[0].length;
    const yStep = height / map.length;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            ctx.fillStyle = '#' + map[i][j];
            ctx.fillRect(xStep * i, yStep * j, xStep, yStep);
        }
    }
}


document.getElementById('forr').addEventListener('click', () => {
    drawCanvasFour(canvasFour);
});