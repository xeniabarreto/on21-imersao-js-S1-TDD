const { convertCelsiusToFahrenheit , checkEvenNumber, sum, revert } = require('../index');

describe("Função de conversão", () => {
    
    test ("deve converter de celsius para fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140) 
    })
});

describe("Função ímpar ou par", () =>{
    test("deve retornar se é parâmetro número", () => {
        const resultado = checkEvenNumber("banana")

        expect(resultado).toBeNaN()
    
    }) 
})


describe("Função de Soma", () => {
    test("(5, 1) => 6)", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});


// Considere o teste abaixo e escreva a função para que o teste passe.
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});



//se usar it, costuma-se escrever: it("should return banana", () => {}) 
//é mais semântica - na linha 5
//https://jestjs.io/docs/getting-started