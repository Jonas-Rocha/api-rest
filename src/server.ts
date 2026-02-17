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
* A ferramenta tsx (ou o módulo ts-node de forma geral) é amplamente utilizada para executar arquivos TypeScript diretamente no ambiente Node.js, sem a necessidade de uma etapa de compilação manual prévia. Ela faz a transcompilação em tempo real, agilizando o processo de desenvolvimento e teste.

npm i tsx@4.16.2 -D

criamos logo em seguida no package.json:
  "scripts": {
    "dev": "tsx watch src/server.ts"
  }

  "watch" server para observar o arquivo src/server.ts





npm tsc --init

cria o arquivo de configuração do TypeScript (tsconfig.json)






-----------------------------------------------------------------------------------------------------------

EXPRESS:

O Express é um framework flexível e minimalista para o Node, focado em lidar com requisições e respostas. 
Ele oferece recursos prontos para lidar com parâmetros, query params, route params e JSON no corpo da requisição, 
facilitando o desenvolvimento de APIs. Com o Express, é possível criar uma API robusta com agilidade,
aproveitando sua estrutura de roteamento leve e flexível, que pode ser estendida com middlers. 
Essas características tornam o Express uma ferramenta poderosa para o desenvolvimento de aplicações.



npm i express@4.19.2  <<<< versão utilizada do express

npm i --save-dev @types/express   <<<< assim como no na instalação da tipagem do node, 
agumas bibliotecas precisam que eu instale a tipagem delas separadamente. o express é um exemplo disso.




*/

import express, { Request, Response, NextFunction } from "express";
import { myMiddleware } from "./middlewares/my-middleware"; //não precisa colocar a extensão do arquivo no TYPESCRIPT.
import { routes } from "./routes/index";

// estou criando a variavel da porta pois se eu quiser mudar futuramente basta eu mudar o valor desta variavel que todo o resto sera mudado
const PORT = 3333;

const app = express();

app.use(express.json());

//tenho que chamar as rotas aqui para que funcione.
//esse app.use(routes) esta chamando o index.ts(routes), e o index.ts(routes) vai chamar o products-routes.ts(routes)
app.use(routes);

//o tratamento de erros deve vir sempre por ultimo no código pois ele consegue capturar qualquer exceção que acontecer nos blocos de código acima.
app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    response.status(500).json({ message: error.message });
  },
);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
