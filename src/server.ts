/*
INFORMAÇÕES ANTERIORES AO INÍCIO DO PROJETO:

rodei npm i typescript@5.5.4 @types/node@20.14.12 -D

npm i   <<<< para instalar
typescript@5.5.4   <<<< instala a biblioteca versão 5.5.4 do typescript no projeto
@types/node@20.14.12   <<<< para adicionar também a typagem do node para utilizar o typescript para o node, e o 20.14.12 é a versão dessa typagem
-D   <<<< é para instalar as duas dependencias(bibliotecas) como bibliotecas de DESENVOLVIMENTO, eu seja, ele vai apenas usar o node enquanto estamos em ambiente de DESENVOLVIMENTO. e quando for em produção não precisar mais. 
pois no fim das contas tudo  é convertido em javascript.  o typescript no fim das contas converte todo o código para javascript então não precisaremos dessas duas dependencias se tudo no fim é convertido para javascript.

no fim, o typescript aqui no ambiente de desenvolvimento é apenas para auxiliar na tipagem e reduzir os erros como passar um número no lugar de uma string, por exemplo.



rodei npx tsc src/server.ts

isso serve para converter os arquivos typescript que eu estou codando para arquivos javascritp. pois o node não tem um bom suporte para entender typescript
então eu apenas converto todo o arquivo typescript para ele conseguir rodar.
isso explica primeira anotação la em cima que diz que o typescript é apenas para o ambiente de desenvolvimento,
afinal, ele não é muito compativel com o node, então precisamos converter para javascript antes de colocar em produção.
o typescript é apenas para conseguirmos fazer tudo muito bem estruturado e não deixar erros.

npm = node package manager = gerenciador de pacotes
npx = node package execute = "executa pacotes"


npx tsc src/server.js   <<<< esse comando simplesmente executa o binário  da pasta node_modules/.bin/tsc
e esse binário é reponsavel por converter o arquivo.

como o npx é um "rodador" de pacotes, ao invés de usar o npx tsc src/server.ts,
poderiamos simplesmente rodar no terminal o caminho do arquivo binario:  node_modules/.bin/tsc src/server.ts  <<<< isso ja converteria o código


obs: o npx também consegue executar pacotes que estão registrados la no npm, e não necessariamente pacotes que estejam só na minha maquina.



---------------------------------------------------------------------------------------------------------------------------

TSX:
ficar sempre compilando o typescript para javascript é pouco prático, então o tsx serve para nos ajudar com isso

npm i tsx@4.16.2 -D

criamos logo em seguida no package.json:
  "scripts": {
    "dev": "tsx watch src/server.ts"
  }

  "watch" server para observar o arquivo src/server.ts





npm tsc --init

cria o arquivo de configuração do TypeScript (tsconfig.json)

*/

function sum(a: number, b: number): number {
  return a + b;
}

const result: number = sum(7, 3);

console.log(result);
