// backend/validators.js

function validateETHAmount(amount) {
  const eth = parseFloat(amount);
  return !isNaN(eth) && eth > 0 && eth < 100;
}

module.exports = { validateETHAmount };
