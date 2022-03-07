# Lib markdown

## Resumo

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem simples de marcação originalmente criada por John Gruber e Aaron Swartz. 
Markdown converte seu texto em HTML válido. Markdown é frequentemente usado para formatar arquivos README, 
para escrever mensagens em fóruns de discussão online e para criar rich text usando um editor de texto simples.

Os arquivos `Markdown` podem conter _links_, e esses _links_ poderão estar quebrados ou inválidos,
prejudicando assim o conteúdo do texto.

Com esta lib é possivel:
- analisar o arquivo com extensão .md;
- verificar se nele há links;
- não encontrando, emitir uma mensagem avisando que não há links;
- caso encontre, analisar se os links funcionam;
- retornar uma lista com os links identificados;
- retornar com o status http de cada link encontrado;

## Instalação

### NPM

No terminal, executar o comando:

`npm i lib-md`

Após a instalação, execute a lib com o comando `npx lib-md <path-to-file>`

Para avaliar cada link e receber a lista com os seus status http, executar o comando:

`npx lib-md <path-to-file> validar`

***  É recomendado usar o caminho relativo ao diretório de onde você está executando a lib, mas também pode ser usado o caminho absoluto.
