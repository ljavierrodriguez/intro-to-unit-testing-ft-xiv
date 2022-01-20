const { suma, resta } = require('../js/functions');

describe('Pruebas sobre las funciones de suma, resta, multiplicar y dividir', function(){
    test('Probando la operacion suma', function(){
        let resultado = suma(3, 4);
        expect(resultado).toBe(7);
    })

    test('Probando la operacion resta', function(){
        let resultado = resta(3, 4);
        expect(resultado).toBe(-1);
    })
});
