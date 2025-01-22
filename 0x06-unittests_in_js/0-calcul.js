function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

function roundAwayFromZero(n) {
  return n < 0 ? Math.ceil(n - 0.5) : Math.floor(n + 0.5);
}

function calculateNumber(a, b) {
  return roundAwayFromZero(a) + roundAwayFromZero(b);
}

module.exports = calculateNumber;

