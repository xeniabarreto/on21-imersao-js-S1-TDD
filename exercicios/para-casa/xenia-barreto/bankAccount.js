//Vide iNotes_Homework.txt
const { dataBase } = require("./__test__/dataBase.Mock")

const checkBalance = (clientId) => {
    let idCliente = dataBase.find((x) => x.id == clientId);
    console.log(`Seu saldo é R$ ${idCliente.balance}.`)
    return true
};

const checkSpecialLimit = (clientId) => {   
    let idCliente = dataBase.find((x) => x.id == clientId);
    
    if(idCliente.limit === true){
        return 'Your overdraftdes is activated';
    } else if (idCliente.limit === false){
        return 'Your overdraftdes deactivated'

    }
};

const checkBalanceSpecialLimit = (clientId) => {
    let idCliente = dataBase.find((x) => x.id == clientId);

    if(idCliente.limit_value > 0){
        console.log(`Your available special limit is ${idCliente.limit_value}.`);
        return true
    } else {
        console.log("You don't have special limit available."); 
        return false
    }
};

const checkWithdraw = (clientId, valorDoSaque) => {
    let idCliente = dataBase.find((x) => x.id == clientId);

    const somaSaldoLimite = idCliente.balance + idCliente.limit_value;

    if(valorDoSaque < idCliente.balance ){
        console.log(`Approved withdrawal in the amount of ${valorDoSaque}`); 
        return true; 
    } else if(valorDoSaque > idCliente.balance && valorDoSaque < somaSaldoLimite ){
        console.log(`Approved withdrawal using special limit.`);
        return true;
    } else if(valorDoSaque > idCliente.balance && valorDoSaque > somaSaldoLimite ){
        console.log(`You don't have balance and special limit for this operation..`)
        return true;
    }
}

module.exports = { checkBalance, checkSpecialLimit, checkBalanceSpecialLimit, checkWithdraw };