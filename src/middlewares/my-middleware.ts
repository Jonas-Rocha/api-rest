// Importando a tipagem pronta da requisição e da resposta do proprio express.
/*
    O NextFunction é o que diz para seguir para a proxima requisição, ele é o que faz as coisas não morrerem aqui nesta função. 
    (a não ser que a ideia seja essa).
    e a tipagem também já existe no express.
 */
import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Aqui estamos utilizando o middleware para modificar ou insererir coisas na requisição. mesmo que na requisição não tenha o user_id.
  // O user_id teve sua typagem declarada no arquivo request.d.ts
  request.user_id = "123456";

  console.log("Passou pelo Middleware");

  //retornar o next se quiser chamar a próxima requisição.
  return next();
}
