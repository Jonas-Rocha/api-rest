// o (.d) no nome do arquivo serve para o typeScript entender como um arquivo de typagem global.

// o namespace serve para arrumar o problema de conflito de nomes (caso tenha nomes iguais).
// então é uma forma de organizar e evitar conflito de nomes entre diferentes partes de um projeto.

// uma interface tem o poder de juntar com outra existente.

/*
Aqui estou estendendo a interface Request nativa do Express
usando Declaration Merging do TypeScript.

Isso permite adicionar a propriedade "user_id" ao objeto req,
sem sobrescrever a tipagem original do Express.

Assim, quando eu usar req.user_id em middlewares ou controllers,
o TypeScript reconhecerá essa propriedade sem erro de tipagem.
*/
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
