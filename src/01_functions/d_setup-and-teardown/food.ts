let foodDatabase = {};

export const initializeFoodDatabase = (): void => {
  foodDatabase = { Vienna: 'Wiener Schnitzel', 'San Juan': 'Mofongo' };
};

export const isValidCityFoodPair = (city: string, food: string): boolean =>
  foodDatabase[city] === food;
