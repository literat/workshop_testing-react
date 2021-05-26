let cityDatabase = [];

export const isCity = (city: string): boolean =>
  !!cityDatabase.find((element) => city === element);

export const initializeCityDatabase = (): void => {
  cityDatabase = ['Vienna', 'San Juan'];
};

export const clearCityDatabase = (): void => {
  cityDatabase = [];
};
