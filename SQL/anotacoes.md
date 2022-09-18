# SQL

## Tipos de dados
- text (texto)
- number (numero)
- datatime (data e hora)

## primary key
- dado único que não se repete (preferencialmente número)

## nome de campo e tabela
- Deve começar por letra
- não pode caracteres especiais (underline é permitido)
- não pode ter espaços

## Comandos
### SELECT
- busca informações

SELECT * FROM aluno (busca todas as informações de aluno)

SELECT nome, responsavel FROM aluno (busca somente dados de nome e responsavel)

SELECT * FROM aluno WHERE matricula = 1 (mostra todos os dados do aluno cuja matricula é = 1)

SELECT * FROM aluno WHERE nome like "j%" (mostra tudo de alunos com nome iniciado com letra 'j')

SELECT * FROM aluno WHERE nome like "%j%" (mostra tudo de alunos com nome que tenha letra 'j' no meio do nome)

### INSERT INTO
- inserir novos dados

INSERT INTO aluno (nome, cpf, responsavel) VALUES ("Lega", 12345678912, "Lega")
##### caso não queira preencher algum valor basta omitir o nome da coluna. Os valores devem ser preenchido na ordem das colunas que foram declaradas na função


### UPDATE
- modifica dados já inseridos

UPDATE aluno SET nome="Mariano Soares, responsavel="Joaquim Nabuco" WHERE matricula = 2

### DELETE
- apaga dados

DELETE FROM aluno WHERE matricula = 3

## Operadores relacionais
### =
- funciona somente para dados numéricos

SELECT * FROM aluno WHERE matricula = 1

### like
- usado apenas para textos

SELECT * FROM aluno WHERE nome like "ronaldo" (procura em aluno dados de "ronaldo")

SELECT * FROM aluno WHERE nome like "M" (procura em aluno dados de alunos começados com "M")

### >
- usado em números

SELECT * FROM aluno WHERE matricula > 1 (retorna dados de alunos com matricula maior que 1)

### <
- usado em números

SELECT * FROM aluno WHERE matricula < 2 (retorna dados de alunos com matricula menor que 2)

### >=

### <=

### <> não igual a
SELECT * FROM aluno WHERE matricula <> 2 (retorna dados de alunos com matricula diferente de 2)

### !=
SELECT * FROM aluno WHERE matricula != 2 (retorna dados de alunos com matricula diferente de 2)

## Operadores matemáticos
- +
- -
- /
- %

## Operadores lógicos
### AND
SELECT * FROM aluno WHERE nome like "j%" AND matricula < 2

### OR
SELECT * FROM aluno WHERE nome like "j%" AND matricula < 2

### BETWEEN (entre)
SELECT * FROM funcionario WHERE id_funcionario BETWEEN 5 and 9

### NOT BETWEEN (não entre)
SELECT * FROM funcionario WHERE id_funcionario NOT BETWEEN 5 and 9 

### IN e NOT IN (contém e não contém)
SELECT * FROM funcionario WHERE id_funcionario IN (1,2,5) (mostra dados de funcionarios com id que tenham 1, 2 ou 5)

NOT IN faz o contrário

### IS NULL e IS NOT NULL (vazio e não vazio)
SELECT * FROM funcionario WHERE id_departamento IS NULL

SELECT * FROM funcionario WHERE id_departamento IS NOT NULL