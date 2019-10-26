let map = [
    ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],
    ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
    ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
    ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4']
];

function draw(map) {
    let pixel = document.getElementById('pixel');
    let ctx = pixel.getContext('2d');
    let x = 0;
    let y = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            ctx.fillStyle = '#' + map[i][j];
            ctx.fillRect(x, y, 128, 128);
            if (x < 384) {
                x += 128;
            } else {
                x = 0;
                y += 128;
            }
        }
    }
}

document.getElementById('foгr').addEventListener('click', () => {
    draw(map);
});