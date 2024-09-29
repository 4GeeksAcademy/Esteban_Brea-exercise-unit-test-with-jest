// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Converts dollars to yen correctly based on current exchange rates", function() {

    const { fromDollarToYen } = require('./app.js');

    const dollars = fromDollarToYen(3.5);

    const expected = (3.5 / 1.07) * 156.5;
    
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("Converts yen to pounds using the yen to pound exchange rate", function() {

    const { fromYenToPound } = require('./app.js');

    const dollars = fromYenToPound(3.5);

    const expected = 3.5 * (0.87 / 156.5);
    
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665);
})