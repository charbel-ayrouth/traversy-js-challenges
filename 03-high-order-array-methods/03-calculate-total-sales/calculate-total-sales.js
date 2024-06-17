function calculateTotalSalesWithTax(products, taxRate) {
  //   const totalWithoutTax = products
  //     .map((product) => product.price * product.quantity)
  //     .reduce((total, num) => total + num, 0);

  const totalWithoutTax = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return totalWithoutTax + (totalWithoutTax * taxRate) / 100;
}

module.exports = calculateTotalSalesWithTax;
