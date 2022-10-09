# NPM - Node Package Managem (gerenciador de pacotes)

verifica se tem NPM instalado:  npm -v  
iniciando um pacote: npm init ou npm init -y (sim para todas as perguntas)

## 'npm i'
instala dependências. Pode ser instalado várias ao mesmo tempo  

ex: npm i cfonts

- -D

     indica que será usado a dependência somente no ambiente de desenvolvimento (se outras pessoas forem usar o arquivo, não será necessário instalar)

     ex: npm i cfonts -D

### Ao instalar as dependencias a ser utilizadas, criar um arquivo com nome '.gitignore' na pasta node_modules para não subir essa pasta que foi criada ao github. Ao puxar para a máquina o conteúdo do gitgub, executar no terminal 'node instal' que irá baixar sozinho as dependencias contidas no package.json
Não tem problema excluir pasta node_modules e package-lock mas esta última é preferível não excluir pois ele mapeia e faz manutenção das dependencias instaladas

## 'npm update'
atualiza dependências
<br>
<br>

## Rodando scripts
Para rodar script via npm, em package.json no obsjeto scripts, na linha onde há test substituir por ("start": "node index.js") que irá executar o arquivo selecionado.

obs: não precisa ser comando "start", "dev" e "test" também funciona. Para rodar usar no terminal "npm run NOMECOMANDO" ex: npm run start
<br>
<br>
<br>

## Instalando dependências globais
Dependencia global, é uma dependencia que não é especifica para um projeto e sim para todos

- npm i opn -g

    instala dependencia opn global

- npm root -g

    mostra caminho onde está salvo as dependencias globais

- npm unistall opn -g

    remove dependencia global opn

## Gerenciando versões das dependências
### ex: "cfonts": "^3.1.1"
3.1.1 -> major.minor.patch
- patch (1) -> correção de bug
- minor (1) -> alterações maiores mas que não tem possibilidade de bugar o pacote 
- major (3) -> alterações que tem chances de bugar a porra toda de der merda

'^' -> atualiza minor e patch
'~' -> atualiza somente patch
'*' -> atuliza todas as versões
''  -> não atualiza

### Instalando versão específica
- npm i moment@1.5.1    -> instala pacote moment na versão 1.5.1
- npm outdated          -> mostra versão instalada, versão desejada e última versão dos pacotes instalados
- npm upgrade           -> atualiza versão de todos os pacotes para versão desejada (package não se altera mas fica mapeado atualização)

### Removendo pacote
- npm uninstall moment  -> desinstala moment