const canvas = document.getElementById('freshmint');
const roll = document.getElementById('roll');

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

const drawBaum = (ctx, w, h, r, i) => {
  const x = w / 2,
    y = h / 2,
    j = i + 1,
    p = Math.PI,
    k = 2 / colors.length,
    o = 0.5 + 1 / colors.length;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, r, p * (i * k - o), p * (j * k - o), false);
  ctx.lineTo(x, y);
  ctx.fillStyle = colors[i];
  ctx.fill();
};

const drawRoulette = () => {
  const context = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height,
    radius = Math.min(canvas.width, canvas.height) / 2;

  resetCanvas(context, width, height);

  for (let i = 0; i < colors.length; i++) {
    drawBaum(context, width, height, radius, i);
  }
};

drawRoulette();

roll.addEventListener('click', () => drawRoulette());
