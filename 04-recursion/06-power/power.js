function power(base, exponent) {
  if (base === 0 || base === 1) {
    return base;
  }

  if (exponent == 1) {
    return base;
  }

  return base * power(base, exponent - 1);
}

module.exports = power;
