const canvas = document.getElementById('canvas-area');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const inputData = document.getElementById('inputData');

let nodes = [];

function drawNode(x, y, value, withArrow = true) {
  const width = 60;
  const height = 40;

  // Node box
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(x, y, width, height);

  // Text
  ctx.fillStyle = 'white';
  ctx.font = '18px Arial';
  ctx.fillText(value, x + 20, y + 25);

  // Arrow to next
  if (withArrow) {
    ctx.beginPath();
    ctx.moveTo(x + width, y + height / 2);
    ctx.lineTo(x + width + 20, y + height / 2);
    ctx.lineTo(x + width + 15, y + height / 2 - 5);
    ctx.moveTo(x + width + 20, y + height / 2);
    ctx.lineTo(x + width + 15, y + height / 2 + 5);
    ctx.strokeStyle = '#0f172a';
    ctx.stroke();
  }
}

function animateNodes(data) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let x = 50;
  let y = 100;

  let i = 0;

  const interval = setInterval(() => {
    if (i < data.length) {
      drawNode(x, y, data[i], i !== data.length - 1);
      x += 100;
      i++;
    } else {
      clearInterval(interval);
    }
  }, 500);
}

startBtn.addEventListener('click', () => {
  const input = inputData.value.trim();
  if (!input) return alert('Vui lòng nhập dãy số cách nhau bởi dấu cách');

  const data = input.split(/\s+/);
  animateNodes(data);
});

resetBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
