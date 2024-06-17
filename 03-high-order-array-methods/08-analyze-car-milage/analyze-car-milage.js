function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce((highest, car) => {
    return highest.mileage < car.mileage ? car : highest;
  }, cars[0]);

  const lowestMileageCar = cars.reduce((lowest, car) => {
    return lowest.mileage > car.mileage ? car : lowest;
  }, cars[0]);

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
