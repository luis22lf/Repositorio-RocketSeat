// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
    incomes: [500, 4200, 230.69],
    expenses: [300, 300, 700, 120, 49.99]
}

function calculaGastos (family) {
    let totalLucro = 0.0
    let totalGasto = 0.0
    let saldo = 0.0
    for (let gain of family.incomes)
        totalLucro += gain
    for (let lost of family.expenses)
        totalGasto += lost

    saldo = totalLucro - totalGasto

    console.log(`total ganho: ${totalLucro}\n total gasto: ${totalGasto}
    saldo: ${saldo}`)
    if (saldo < 0)
        console.log('saldo negativo')
    else    
    console.log('saldo positivo')
}

calculaGastos(family)