const { checkBalance, checkSpecialLimit, checkSaldoLimite, checkSaque  } = require("../index");

describe("Verificar saldo", () => {
    test("Deve retornar saldo disponível", () => {
        const availableBalance = checkBalance(2)

        expect(availableBalance).toBe(`Seu saldo é R$ 0.`);
    });
});

describe("Verificar status Limite para Cheque Especial", () => {
    test("Deve retornar limite 'Ativo'", () => {
        const limiteAtivo = checkSpecialLimit(1);
    
        expect(limiteAtivo).toEqual('Seu cheque especial está Ativado');
    });
    test("Deve retornar limite 'Desativado'", () => {
        const limiteAtivo = checkSpecialLimit(2);
    
        expect(limiteAtivo).toEqual('Seu cheque especial está Desativado');
    });
});


describe("Verificar saldo do Limite Cheque Especial", () => {  //TERMINAR
    test("deve ter um valor no limite", () => {
        const limite = checkSaldoLimite();
    
        expect(limite).toBe(true);
    });

});

describe("Verificar se é possível Saque", () => {  //TERMINAR
    test("deve avaliar se é possivel sacar", () => {
        const saque = checkSaque(3700);
    
        expect(saque).toBe(true);
    });
});

