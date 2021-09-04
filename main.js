const canvas = document.getElementById('freshmint');
const button = document.getElementById('roll');

const colors = [
    '#92b372', // mint
    '#6cabcd', // aqua
    '#5b73c4', // blue
    '#aa876a', // brown
    '#9d9d9d', // grey
    '#db9d61', // orange
    '#c76199', // pink
    '#8c6ec9', // purple
    '#c15b58', // red
    '#c8ac69', // sand
    '#5aaa9a', // teal
    '#e7bc0d', // yellow
];

const resetCanvas = (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
};

const punchCircle = (ctx, w, h, r) => {
    let x = w / 2,
        y = h / 2,
        p = Math.PI * 2;

    ctx.fillStyle = '#fff';

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, 0, p, false);
    ctx.fill();
};

const drawBaum = (ctx, w, h, r, i, a) => {
    let x = w / 2,
        y = h / 2,
        j = i + 1,
        p = Math.PI,
        k = 2 / colors.length,
        o = 0.5 + 1 / colors.length;

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '' + colors[i] + a;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, p * (i * k - o), p * (j * k - o), false);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.stroke();
};

const drawRoulette = (active) => {
    let opacity = false,
        context = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height,
        radius = Math.min(canvas.width, canvas.height) / 2;

    resetCanvas(context, width, height);

    for (let i = 0; i < colors.length; i++) {
        opacity = i === active ? 'ff' : '33';
        drawBaum(context, width, height, radius * 0.85, i, opacity);
    }

    punchCircle(context, width, height, radius * 0.45);
};

drawRoulette();

button.addEventListener('click', () => {
    let currentPos = 0,
        incrementer = 0.01,
        startColor = parseInt(Math.random() * colors.length);

    const animation = (elapsed) => {
        if (elapsed > 2000) incrementer += 0.0035;
        currentPos += 1 / incrementer;
        drawRoulette(parseInt((startColor + currentPos / 100) % colors.length));
    };

    let elapsed, start;

    const step = (timestamp) => {
        if (start == null) start = timestamp;
        elapsed = timestamp - start;

        animation(elapsed);
        if (elapsed < 5000) {
            previousTimestamp = timestamp;
            window.requestAnimationFrame(step);
        } else {
            button.removeAttribute('disabled');
        }
    };

    button.setAttribute('disabled', true);
    window.requestAnimationFrame(step);
});
