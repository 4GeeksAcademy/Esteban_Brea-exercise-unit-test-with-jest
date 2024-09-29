// Funcion para convertir de euros a dolares
const fromEuroToDollar = (valueInEuro) => valueInEuro * 1.07

// Función para convertir de dólares a yenes
const fromDollarToYen = (valueInDollar) => (valueInDollar / 1.07) * 156.5

// Función para convertir de yenes a libras esterlinas
const fromYenToPound = (valueInYen) => valueInYen * (0.87 / 156.5)

// Función para sumar dos números
const sum = (a, b) => a + b;

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

