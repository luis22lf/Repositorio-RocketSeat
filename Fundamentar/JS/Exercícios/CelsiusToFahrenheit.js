// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function temperatureConversion(temp) {
    const itsCelsius = temp.toUpperCase().includes('C')
    const itsFahrenheit = temp.toUpperCase().includes('F')

    temp = temp.replace("C","")
    temp = temp.replace("F","")
    if (itsCelsius)
        temp = (Number(temp) * 9/5 + 32) + 'F'
    else if (itsFahrenheit)
        temp = ((Number(temp) - 32) * 5/9 ) + 'C'
    else
        throw new Error('erro de unidade')

    return temp
}

try {
    temperatureConversion('50G')
}
catch(e) {
    console.log(e)
}