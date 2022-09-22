const { checkBalance, checkSpecialLimit, checkBalanceSpecialLimit, checkWithdraw  } = require("../bankAccount");

describe("Given the available balance query", () => {
    test("It should return available balance.", () => {
        const availableBalance = checkBalance(1)

        expect(availableBalance).toBe(true);
    });
});

describe("Given the query special limit status.", () => {
    test("It should return 'active' status.", () => {
        const limiteAtivo = checkSpecialLimit(1);
    
        expect(limiteAtivo).toEqual('Your overdraftdes is activated');
    });
    test("It should return 'inactive' status.", () => {
        const limiteAtivo = checkSpecialLimit(2);
    
        expect(limiteAtivo).toEqual('Your overdraftdes deactivated');
    });
});


describe("Given the Special Limit query", () => {  
    test("Should return the value of the available", () => {
        const limite = checkBalanceSpecialLimit(1);
    
        expect(limite).toBe(true);
    });

    test("It should return that there don't value available", () => {
        const limite = checkBalanceSpecialLimit(2);
    
        expect(limite).toBe(false);
    });

});

describe("Given the withdrawal operation.", () => { 
    test("Should allow withdrawal using only the account balance", () => {
        const saque = checkWithdraw(1, 700);
    
        expect(saque).toBe(true);
    });

    test("Should allow withdrawal using special limit", () => {
        const saque = checkWithdraw(1, 1200);
    
        expect(saque).toBe(true);
    });

    test("It should not allow withdrawal due to insufficient balance.", () => {
        const saque = checkWithdraw(1, 1600);
    
        expect(saque).toBe(true);
    });


});

