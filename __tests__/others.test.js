const isOdd = require('../js/others');

describe('Probando otras funciones', () => {
    it('Probar si 5 es impar', () => {
        expect(isOdd(5)).toBe(true);
    });

    it('Probar si 5 es par', () => {
        expect(isOdd(5)).toBe(false);
    });
});