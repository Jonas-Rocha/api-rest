// Arquivo com letra inicial maiúscula pois estou criando uma classe.

import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

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
    const bodySchema = z.object({
      name: z.string(),
      price: z.number().nullish(), //nullish serve para deixar de ser obrigatório o dado. dizer que pode ser nulo ou undefined.
    });
    //quando os dados não bate com a validação do zod, o proprio zod lança uma exceção.
    const { name, price } = bodySchema.parse(request.body);

    // if (!name) {
    //   throw new AppError("Nome do produto é obrigatório!");
    // }

    // if (name.trim().length < 6) {
    //   throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres");
    // }

    // if (!price) {
    //   throw new AppError("Preço do produto é obrigatório!");
    // }

    // if (price < 0) {
    //   throw new AppError("Preço do produto não pode ser menor do que zero!");
    // }

    // throw new Error("Erro ao tentar criar um produto!");

    // throw new AppError("Erro ao criar o produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
