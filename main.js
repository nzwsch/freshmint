const canvas = document.getElementById('freshmint')
const roll = document.getElementById('roll')

const resetCanvas = (ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const centerPosition = () => [canvas.width / 2, canvas.height / 2]

const drawRoulette = () => {
  const ctx = canvas.getContext('2d')

  resetCanvas(ctx)

  console.log(centerPosition())
}

drawRoulette()

roll.addEventListener('click', () => drawRoulette())
