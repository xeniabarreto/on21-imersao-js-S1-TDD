//Considere um objeto que represente uma conta bancária
//Objeto deve ter: nome do titular, o saldo e o limite da conta

//Checar se possui o nome do titular?
//Checar saldo 
//Checar o limite da conta

//Tem que ser possível consulta de saldo 
//Tem que ser possível saque
//Tem que ser possível depósito

//No caso de saque é necessário verificar se existe saldo suficiente para retirada
//Caso o cliente não tenha saldo suficiente, mas possua limite disponível (e suficiente), o saque poderá ocorrer
//Nesses como o acima casos o saldo do cliente ficará negativo após o saque.
//O limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.


const checkSaldo = (num1) => {
    if(num1 > 0){
        return true;
    } else {
        return false;
    }
};

const checkLimite = () => {

    const dadosDoCliente = {
        "nome":"Debora",
        "Saldo": 2000,
        "Limite": true,
        "valorLimite": 500
    };

    if(dadosDoCliente.Limite === true){
        return true;
    } else {
        return false;
    }
};

const checkSaldoLimite = () => {
    const dadosDoCliente = {
        "nome":"Debora",
        "Saldo": 2000,
        "Limite": true,
        "valorLimite": 500
    };

    if(dadosDoCliente.valorLimite > 0){
        console.log(`Você tem o limite de ${dadosDoCliente.valorLimite}.`);
        return true
    } else {
        console.log("Você não tem limite disponivel");
        return false
    }
};

const checkSaque = (valorDoSaque) => {
    const dadosDoCliente = {
        "nome":"Debora",
        "Saldo": 2000,
        "Limite": true,
        "valorLimite": 500
    };

    const somaSaldoLimite = dadosDoCliente.Saldo + dadosDoCliente.valorLimite;

    if(valorDoSaque < dadosDoCliente.Saldo ){
        console.log(`Saque aprovado no valor de ${valorDoSaque}`);
        return true;
    } else if(valorDoSaque > dadosDoCliente.Saldo && valorDoSaque < somaSaldoLimite ){
        console.log(`Saque aprovado com o uso do cheque especial.`);
        return true;
    } else if(valorDoSaque > dadosDoCliente.Saldo && valorDoSaque > somaSaldoLimite ){
        console.log(`Você não tem saldo e não tem limite disponível`)
        return true;
    }
}

module.exports = { checkSaldo, checkLimite, checkSaldoLimite, checkSaque };