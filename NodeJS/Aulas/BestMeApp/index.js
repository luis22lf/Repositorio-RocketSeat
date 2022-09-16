//process.stdout.write('alguma coisa para escrever na saída')

//array com perguntas
const questions = [
    'O que aprendi hoje?',
    'O que me aborreceu?',
    'No que eu poderia melhorar?',
    'O que me alegrou?',
    'Quantos ajudei hoje?',
]

//exibe mensagem
const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

//array de respostas
const answers = []

process.stdin.on("data", data => {
    //adiciona no array answers a entrada
    answers.push(data.toString().trim())
    
    if (answers.length < questions.length)
        ask(answers.length)
    else
    {
        console.log(answers)
        process.exit()
    }
})

//monitora encerramento do programa e, ao encerrar executa por último esta função
process.on('exit', () => {
    process.stdout.write(
        `Fechou Lega!
         Ficou assim então:
         ${questions[0]} > ${answers[0]}
         ${questions[1]} > ${answers[1]}
         ${questions[2]} > ${answers[2]}
         ${questions[3]} > ${answers[3]}
         ${questions[4]} > ${answers[4]}
         Vamos refletir mais numa próxima...
        `
    )
})