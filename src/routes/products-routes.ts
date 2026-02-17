//importando o "Router" do proprio express para lidar com rotas. Usar os metodos .get(), .post(), por exemplo...
//ARQUIVO RESPONSAVEL APENAS PELO "ROTEAMENTO". lidar com o que as rotas fazem é no arquivo de controllers.
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();

// Aqui eu estou colocando apenas "/" e não "/products" para o router não duplicar o caminho que ja esta sendo referenciado no index.ts(routes)
// Estou usando productsController.index por que não preciso usar o request response, pois já criei o metodo "index" la nos controllers.
productsRoutes.get("/", productsController.index);

// Aqui eu estou colocando apenas "/" e não "/products" para o router não duplicar o caminho que ja esta sendo referenciado no index.ts(routes)
// Estou usando productsController.create por que não preciso usar o request response, pois já criei o metodo "create" la nos controllers.
productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };