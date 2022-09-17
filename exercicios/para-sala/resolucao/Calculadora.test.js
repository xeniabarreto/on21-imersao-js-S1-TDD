const {Calculadora} = require ('../resolucao.js'); 


/**
 * 8) Usando TDD:
Crie uma classe chamada Calculadora;
Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.
 */


describe("Teste para a classe calculadora", () => {

    test("Se o método soma está funcionando", () => {

    expect(Calculadora.soma(4,5)).toEqual(9)
}); 

