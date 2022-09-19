//Vide iNotes_Homework.txt
const { dataBase } = require("./dataBase.Mock")

const checkBalance = (clientId) => {
    let idCliente = dataBase.find((x) => x.id == clientId);
    return `Seu saldo é R$ ${idCliente.balance}.`
};

const checkSpecialLimit = (clientId) => {   
    let idCliente = dataBase.find((x) => x.id == clientId);
    
    if(idCliente.limit === true){
        return 'Seu cheque especial está Ativado';
    } else if (idCliente.limit === false){
        return 'Seu cheque especial está Desativado'

    }
};

const checkSaldoLimite = () => { //TERMINAR
    const dataBase = {
        "nome":"Debora",
        "Saldo": 2000,
        "Limite": true,
        "valorLimite": 500
    };

    if(dataBase.valorLimite > 0){
        console.log(`Você tem o limite de ${dataBase.valorLimite}.`);
        return true
    } else {
        console.log("Você não tem limite disponivel");  // TESTAR ESSE CENARIO PARA COVERAGE
        return false  // TESTAR ESSE CENARIO PARA COVERAGE
    }
};

const checkSaque = (valorDoSaque) => {//TERMINAR
    const dataBase = {
        "nome":"Debora",
        "Saldo": 2000,
        "Limite": true,
        "valorLimite": 500
    };

    const somaSaldoLimite = dataBase.Saldo + dataBase.valorLimite;

    if(valorDoSaque < dataBase.Saldo ){
        console.log(`Saque aprovado no valor de ${valorDoSaque}`); // TESTAR ESSE CENARIO PARA COVERAGE
        return true; // TESTAR ESSE CENARIO PARA COVERAGE
    } else if(valorDoSaque > dataBase.Saldo && valorDoSaque < somaSaldoLimite ){
        console.log(`Saque aprovado com o uso do cheque especial.`); // TESTAR ESSE CENARIO PARA COVERAGE
        return true; // TESTAR ESSE CENARIO PARA COVERAGE
    } else if(valorDoSaque > dataBase.Saldo && valorDoSaque > somaSaldoLimite ){
        console.log(`Você não tem saldo e não tem limite disponível`)
        return true;
    }
}

module.exports = { checkBalance, checkSpecialLimit, checkSaldoLimite, checkSaque };