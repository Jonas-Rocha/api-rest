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
  console.log("Passou pelo Middleware");

  //retornar o next se quiser chamar a próxima requisição.
  return next();
}
