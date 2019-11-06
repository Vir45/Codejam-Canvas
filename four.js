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
//You have some troubles with id. It includes a Russian letter inside.

document.getElementById('foгr').addEventListener('click', () => {
    draw(map);
});

/*
Everything is fine and works well but there are some ways to improve "draw()" method.
The main idea that we should make our method so generic as possible:


function draw(map) {
    const pixel = document.getElementById('pixel');
    const ctx = pixel.getContext('2d');

// It's better not to hardcode any numbers inside of the function. We can take width and hight directly from the canvas.
// In this case, if we decided to change the canvas size, we could do it only in one place at the html file.

    const width = pixel.width;
    const heigth = pixel.height;
    
// the same case for the step size. This size depends on the array size.

    const xStep = width / map[0].length;
    const yStep = heigth / map.length;

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            ctx.fillStyle = '#' + map[i][j];
            ctx.fillRect(xStep * j, yStep * i, xStep, yStep);
        }
    }
}

*/
