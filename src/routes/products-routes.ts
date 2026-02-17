//importando o "Router" do proprio express para lidar com rotas. Usar os metodos .get(), .post(), por exemplo...
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router();

// Aqui eu estou colocando apenas "/" e não "/products" para o router não duplicar o caminho que ja esta sendo referenciado no index.ts(routes)
productsRoutes.get("/:id", (request, response) => {
  const { page, limit } = request.query;
  const { id } = request.params;

  response.send(`Página ${page} de ${limit} -- ID: ${id}`);
});

// Aqui eu estou colocando apenas "/" e não "/products" para o router não duplicar o caminho que ja esta sendo referenciado no index.ts(routes)
productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body;

  //aqui eu estou mudando o content-type do header. todo o conteudo da resposta é convertido já para JSON.
  response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };
