// Arquivo com letra inicial maiúscula pois estou criando uma classe.

import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class ProductsController {
  //Boas praticas para controllers. Usar no máximo 5 métodos.
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um resgistro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */
  // Se eu precisar criar mais do que esses 5, é um sinal que eu preciso criar um controller personalizado para o caso em especial.

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name) {
      throw new AppError("Nome do produto é obrigatório!");
    }

    if (name.trim().length < 6) {
      throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres");
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório!");
    }

    if (price < 0) {
      throw new AppError("Preço do produto não pode ser menor do que zero!");
    }

    // throw new Error("Erro ao tentar criar um produto!");

    // throw new AppError("Erro ao criar o produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };

/*
    Neste trecho, são separadas as rotas da aplicação em um arquivo específico e discute-se a criação de um controller para cada rota. 
    É destacada a importância de separar as responsabilidades de roteamento e execução de ações. 
    O instrutor demonstra a criação dos métodos de index e create no controller, explicando a importância de ter acesso à requisição e resposta.
     Por fim, é mostrado como importar e utilizar o controller nas rotas, mantendo a organização do código.
 */
