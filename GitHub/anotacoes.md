## Criando chave SSH
-   ssh-keygen -t rsa -b 4096 -c "luisfelipe22lf@gmail.com"
mesmo email do github

## Pegando chave SSH publica
- cd ~/.ssh/id_rsa
- cat ~/.ssh/id_rsa.pub (copiar chave e colar no github)

## Adicionando chave ao gerenciador local SSH Agent
- eval `ssh-agent -s`
- ssh_add ~/.ssh/id_ed25519

## Linkando repositório remoto com local
após criar pasta local e dar git init e após criar repositório no github
- git remote add origin github.com:... (link SSH de preferência)
- git branch -M main (mudando branch principal de master para main)
- git push -u origin main (enviando dados para remoto, na primeira vez vai pedir confirmação)

### Enviando dados
- git push (quando só há a branch principal, não há necessidade de especificar)

### puxando dados
- git pull (quando só há a branch principal, não há necessidade de especificar)

## Corrigindo conflitos ao tentar commitar
usar git pull, abrir arquivo com conflito no vs code, corrigir e prosseguir com git commit novamente

## Clonando repositório
- git clone linkDoRepositorio